import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { Service } from "typedi";
import { query, getConnection, queryWithConnection, queryWithValues, queryWithConnectionAndValues } from "./mysql";
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
        const sql = `SELECT * FROM pessoa 
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
        const query = `SELECT * FROM ${this.primeTable} 
        INNER JOIN ${this.secondTable} ON 
        ${this.primeTable}.ID=${this.secondTable}.PESSOA_ID 
        INNER JOIN ${this.thirdTable} ON
        ${this.primeTable}.PESSOA_TIPO_ID = ${this.thirdTable}.ID
        WHERE ${this.primeTable}.ID=? LIMIT 1`;

        const data:RowDataPacket= await queryWithValues(query, [id]) as RowDataPacket;
        if (!data) {
            throw Error("Não foi possivel encontrar os dados da pessoa");
        }
        return generatePessoa(data[0]);
    }

    async create(item: Pessoa): Promise<Pessoa> {
        const conn = await getConnection();
        try {
            await conn.beginTransaction();
    
            const firstQuery= `INSERT INTO pessoa(PESSOA_TIPO_ID, NOME, DATA_NASCIMENTO, SEXO, NBI, NIF, ESTADO_CIVIL) VALUES(?, ?, ?, ?, ?, ?, ?);`;
            const firstValues = [
                item.pessoa_tipo.id,
                item.nome,
                jsDateToMysqlDate(item.data_nascimento),
                item.sexo,
                item.nbi,
                item.nif,
                item.estado_civil
            ]
            const firstResult: RowDataPacket = await queryWithConnectionAndValues(conn, firstQuery, firstValues) as RowDataPacket;
    
            const pessoaId = firstResult.insertId;
    
            const secondQuery = `INSERT INTO pessoa_endereco(PESSOA_ID, TELEFONE, TELEFONE_ALTERNATIVO, EMAIL) VALUES(?, ?, ?, ?);`; 
            const secondValues = [
                pessoaId,
                item.endereco.telefone,
                item.endereco.telefone_alt,
                item.endereco.email
            ]
    
            const secondResult: RowDataPacket =  await queryWithConnectionAndValues(conn, secondQuery, secondValues) as RowDataPacket;
            
            if (firstResult.affectedRows === 0 || secondResult.affectedRows === 0) {
                throw Error("Ocorreu um erro inserir os dados da pessoa");
            }
            await conn.commit();
            item.id = pessoaId;
            return item;
        } catch (error) {
            await conn.rollback();
            throw Error("Ocorreu um erro inserir os dados da pessoa");
        } finally {
            await conn.end();
        }
    }

    async update(id: string, item: Pessoa): Promise<Pessoa> {
        const conn = await getConnection();
        try {
            conn.beginTransaction();
    
            const firstQuery= `UPDATE ${this.primeTable} 
            SET PESSOA_TIPO_ID=?, NOME=? , DATA_NASCIMENTO=?, 
            SEXO=?, NBI=? , NIF=?, ESTADO_CIVIL=?
            WHERE ID=?;`;
            const firstValues = [
                item.pessoa_tipo.id,
                item.nome,
                jsDateToMysqlDate(item.data_nascimento),
                item.sexo,
                item.nbi,
                item.nif,
                item.estado_civil,
                id
            ];
            const firstResult: ResultSetHeader =  await queryWithConnectionAndValues(conn, firstQuery, firstValues) as ResultSetHeader;
    
            const secondQuery = `UPDATE ${this.secondTable} SET TELEFONE=?, TELEFONE_ALTERNATIVO=?, EMAIL=? WHERE PESSOA_ID=?;`; 
            const secondValues = [
                item.endereco.telefone,
                item.endereco.telefone_alt,
                item.endereco.email,
                id
            ];
    
            const secondResult: ResultSetHeader =  await queryWithConnectionAndValues(conn, secondQuery, secondValues) as ResultSetHeader;
            if (firstResult.affectedRows === 0 || secondResult.affectedRows === 0) {
                throw Error("Ocorreu um erro ao actualizar os dados da pessoa");
            }
            await conn.commit();
            return item;
        } catch (error) {
            await conn.rollback();
            throw Error("Ocorreu um erro actualizar os dados da pessoa");
        } finally {
            await conn.end();
        }
    }

    async delete(id: String): Promise<Boolean> {
        const conn = await getConnection();
        try {
            conn.beginTransaction();
    
            const secondQuery = `DELETE FROM pessoa_endereco WHERE PESSOA_ID=?;`;
            const secondValues = [id];
            const secondResult: RowDataPacket = await queryWithConnectionAndValues(conn, secondQuery,secondValues) as RowDataPacket; 
            
            
            const firstQuery = `DELETE FROM pessoa WHERE ID=${id};`;
            const firstValues = [id]; 
            const firstResult: RowDataPacket = await queryWithConnectionAndValues(conn, firstQuery, firstValues) as RowDataPacket;
    

            if (firstResult.affectedRows && secondResult.affectedRows) {
                await conn.commit();
                return true;
            }
            return false;

        } catch (error) {
            await conn.rollback();
            throw Error("Ocorreu um erro remover os dados da pessoa");
        } finally {
            await conn.end();
        }     
    }

    async getPersonByPhoneNumber(phoneNumber: String): Promise<Pessoa> {
        const query = `SELECT * FROM ${this.primeTable} 
        INNER JOIN ${this.secondTable} ON 
        ${this.primeTable}.ID=${this.secondTable}.PESSOA_ID 
        INNER JOIN ${this.thirdTable} ON
        ${this.primeTable}.PESSOA_TIPO_ID = ${this.thirdTable}.ID
        WHERE ${this.secondTable}.TELEFONE=? LIMIT 1`;
        const data: RowDataPacket = await queryWithValues(query, [phoneNumber]) as RowDataPacket;
       
        if (!data) {
            throw Error("Não foram encontrados os dados da pessoa");
        }
        return generatePessoa(data[0]);
    }

    async getPersonByEmail(email: String): Promise<Pessoa> {
        const query = `SELECT * FROM ${this.primeTable} 
        INNER JOIN ${this.secondTable} ON 
        ${this.primeTable}.ID=${this.secondTable}.PESSOA_ID 
        INNER JOIN ${this.thirdTable} ON
        ${this.primeTable}.PESSOA_TIPO_ID = ${this.thirdTable}.ID
        WHERE ${this.secondTable}.EMAIL=? LIMIT 1`;

        const data: RowDataPacket = await queryWithValues(query, [email]) as RowDataPacket;
        if (!data) {
            throw Error("Não Foram encontrados os dados da pessoa");
        }
        return generatePessoa(data[0]);
    }

    async getPersonByNIF(nif: String): Promise<Pessoa> {
        const query =  `SELECT * FROM ${this.primeTable} 
        INNER JOIN ${this.secondTable} ON 
        ${this.primeTable}.ID=${this.secondTable}.PESSOA_ID 
        INNER JOIN ${this.thirdTable} ON
        ${this.primeTable}.PESSOA_TIPO_ID = ${this.thirdTable}.ID
        WHERE ${this.primeTable}.NIF=? LIMIT 1`;

        const data: RowDataPacket = await queryWithValues(query, [nif]) as RowDataPacket;
        if (!data) {
            throw Error("Não foram encontrados os dados da pessoa");
        }
        return generatePessoa(data[0]);
    }

    async getPersonByNBI(nbi: String): Promise<Pessoa>{
        const query = `SELECT * FROM ${this.primeTable} 
        INNER JOIN ${this.secondTable} ON 
        ${this.primeTable}.ID=${this.secondTable}.PESSOA_ID 
        INNER JOIN ${this.thirdTable} ON
        ${this.primeTable}.PESSOA_TIPO_ID = ${this.thirdTable}.ID
        WHERE ${this.primeTable}.NBI=? LIMIT 1`;

        const data: RowDataPacket = await queryWithValues(query, [nbi]) as RowDataPacket;
        if (!data) {
            throw Error("Não foram encotrados os dados da pessoa");
        }
        return generatePessoa(data[0]);
    }
}


export default PessoaRepository