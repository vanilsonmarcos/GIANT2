import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { Service } from "typedi";
import { query, getConnection, queryWithConnection } from "./mysql";
import { jsDateToMysqlDate } from "../../utils/helper";
import IPessoaRepository from "../IPessoaRepository";
import Pessoa from "../../entities/Pessoa/Pessoa";
import generatePessoa from "../../entities/Pessoa/Helper";

@Service()
class PessoaRepository implements IPessoaRepository<Pessoa> {
    private primeTable = 'pessoa';
    private secondTable = "pessoa_endereco";
    private thirdTable = "pessoa_tipo";

    constructor() {
    }

    async getAll(): Promise<Pessoa[]> {
        const sql: string = `SELECT * FROM pessoa 
        INNER JOIN pessoa_endereco ON 
        pessoa.ID=pessoa_endereco.PESSOA_ID 
        INNER JOIN pessoa_tipo ON
        pessoa.PESSOA_TIPO_ID = pessoa_tipo.ID LIMIT 100` ;
        const data: RowDataPacket[] = await query(sql) as  RowDataPacket[] ;
        let pessoas:Pessoa[] = [];
        if (data) {
            for (const item of data) {
                const pessoa:Pessoa = generatePessoa(item);
                pessoas.push(pessoa);
            }
        }
        return pessoas;
    }

    async getByID(id: String): Promise<Pessoa> {
        const data:RowDataPacket= await query(
            `SELECT * FROM ${this.primeTable} 
            INNER JOIN ${this.secondTable} ON 
            ${this.primeTable}.ID=${this.secondTable}.PESSOA_ID 
            INNER JOIN ${this.thirdTable} ON
            ${this.primeTable}.PESSOA_TIPO_ID = ${this.thirdTable}.ID
            WHERE ${this.primeTable}.ID=${id} LIMIT 1`
        ) as RowDataPacket;
        if (!data) {
            throw Error("Não foi possivel encontrar os dados da pessoa");
        }
        return generatePessoa(data[0]);
    }

    async create(item: Pessoa): Promise<Pessoa> {
        const conn = await getConnection();
        try {
            conn.beginTransaction();
    
            const firstQuery= `INSERT INTO pessoa(PESSOA_TIPO_ID, NOME, DATA_NASCIMENTO, SEXO, NBI, NIF, ESTADO_CIVIL) 
            VALUES('${item.pessoa_tipo.id}', '${item.nome}', '${jsDateToMysqlDate(item.data_nascimento)}', '${item.sexo}', '${item.nbi}', '${item.nif}', '${item.estado_civil}');`
    
            const firstResult: RowDataPacket = await queryWithConnection(conn, firstQuery) as RowDataPacket;
    
            const pessoaID = firstResult.insertId;
    
            const secondQuery = `INSERT INTO pessoa_endereco(PESSOA_ID, TELEFONE, TELEFONE_ALTERNATIVO, EMAIL) 
            VALUES(${pessoaID}, '${item.endereco.telefone}', '${item.endereco.telefone_alt}', '${item.endereco.email}');`; 
    
            const secondResult: RowDataPacket =  await queryWithConnection(conn, secondQuery) as RowDataPacket; 

            await conn.commit();
            item.id = pessoaID;
            return item;
        } catch (error) {
            await conn.rollback();
            throw Error("Ocorreu um erro ao inserir os dados da pessoa");
        } finally {
            await conn.end();
        }
    }

    async update(id: string, item: Pessoa): Promise<Pessoa> {
        const conn = await getConnection();
        try {
            conn.beginTransaction();
    
            const firstQuery= `UPDATE ${this.primeTable} 
            SET PESSOA_TIPO_ID=${item.pessoa_tipo.id}, NOME='${item.nome}', DATA_NASCIMENTO=${jsDateToMysqlDate(item.data_nascimento)}, 
            SEXO='${item.sexo}', NBI='${item.nbi}', NIF='${item.nif}', ESTADO_CIVIL='${item.estado_civil}'
            WHERE ID=${id};`;
    
            const firstResult: ResultSetHeader = await queryWithConnection(conn, firstQuery) as ResultSetHeader;
    
            const secondQuery = `UPDATE ${this.secondTable} 
            SET TELEFONE="${item.endereco.telefone}", TELEFONE_ALTERNATIVO='${item.endereco.telefone_alt}', EMAIL='${item.endereco.email}'
            WHERE PESSOA_ID=${id};`; 
    
            const secondResult: ResultSetHeader =  await queryWithConnection(conn, secondQuery) as ResultSetHeader;
            if (firstResult.affectedRows === 0 || secondResult.affectedRows === 0) {
                throw Error("Ocorreu um erro ao actualizar os dados da pessoa");
            }
            await conn.commit();
            return item;
        } catch (error) {
            await conn.rollback();
            throw Error("Ocorreu um erro ao actualizar os dados da pessoa");
        } finally {
            await conn.end();
        }
    }

    async delete(id: String): Promise<Boolean> {
        const conn = await getConnection();
        try {
            conn.beginTransaction();
    
            const firstQuery= `DELETE FROM ${this.primeTable} WHERE ID=${id};`;
    
            const firstResult: RowDataPacket = await queryWithConnection(conn, firstQuery) as RowDataPacket;
    
            const secondQuery = `DELETE FROM ${this.primeTable} WHERE PESSOA_ID=${id};`; 
    
            const secondResult: RowDataPacket =  await queryWithConnection(conn, secondQuery) as RowDataPacket; 

            if (firstResult.affectedRows && secondResult.affectedRows) {
                await conn.commit();
                return true;
            }
            return false;

        } catch (error) {
            await conn.rollback();
            throw Error("Ocorreu um erro ao remover os dados da pessoa");
        } finally {
            await conn.end();
        }     
    }

    async getPersonByPhoneNumber(phone_number: String): Promise<Pessoa> {
        const data: RowDataPacket = await query(
            `SELECT * FROM ${this.primeTable} 
            INNER JOIN ${this.secondTable} ON 
            ${this.primeTable}.ID=${this.secondTable}.PESSOA_ID 
            INNER JOIN ${this.thirdTable} ON
            ${this.primeTable}.PESSOA_TIPO_ID = ${this.thirdTable}.ID
            WHERE ${this.secondTable}.TELEFONE=${phone_number} LIMIT 1`
        ) as RowDataPacket;
       
        if (!data) {
            throw Error("Não foram encontrados os dados da pessoa");
        }
        return generatePessoa(data[0]);
    }

    async getPersonByEmail(email: String): Promise<Pessoa> {
        const data: RowDataPacket = await query(
            `SELECT * FROM ${this.primeTable} 
            INNER JOIN ${this.secondTable} ON 
            ${this.primeTable}.ID=${this.secondTable}.PESSOA_ID 
            INNER JOIN ${this.thirdTable} ON
            ${this.primeTable}.PESSOA_TIPO_ID = ${this.thirdTable}.ID
            WHERE ${this.secondTable}.EMAIL='${email}' LIMIT 1`
        ) as RowDataPacket;
        if (!data) {
            throw Error("Não Foram encontrados os dados da pessoa");
        }
        return generatePessoa(data[0]);
    }

    async getPersonByNIF(nif: String): Promise<Pessoa> {
        const data: RowDataPacket = await query(
            `SELECT * FROM ${this.primeTable} 
            INNER JOIN ${this.secondTable} ON 
            ${this.primeTable}.ID=${this.secondTable}.PESSOA_ID 
            INNER JOIN ${this.thirdTable} ON
            ${this.primeTable}.PESSOA_TIPO_ID = ${this.thirdTable}.ID
            WHERE ${this.primeTable}.NIF=${nif} LIMIT 1`
        ) as RowDataPacket;
        if (!data) {
            throw Error("Não foram encontrados os dados da pessoa");
        }
        return generatePessoa(data[0]);
    }

    async getPersonByNBI(nbi: String): Promise<Pessoa>{
        const data: RowDataPacket = await query(
            `SELECT * FROM ${this.primeTable} 
            INNER JOIN ${this.secondTable} ON 
            ${this.primeTable}.ID=${this.secondTable}.PESSOA_ID 
            INNER JOIN ${this.thirdTable} ON
            ${this.primeTable}.PESSOA_TIPO_ID = ${this.thirdTable}.ID
            WHERE ${this.primeTable}.NBI=${nbi} LIMIT 1`
        ) as RowDataPacket;
        if (!data) {
            throw Error("Não foram encotrados os dados da pessoa");
        }
        return generatePessoa(data[0]);
    }
}


export default PessoaRepository