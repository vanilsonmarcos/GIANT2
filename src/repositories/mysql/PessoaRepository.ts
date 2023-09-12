import Pessoa from "../../entities/Pessoa/Pessoa";
import IPessoaRepository from "../IPessoaRepository";
import { query } from "./mysql";
import { RowDataPacket } from 'mysql2/promise';
import generatePessoa from "../../entities/Pessoa/Helper";
import { formatDDMMYYYYToMySQLDate, jsDateToMysqlDate } from "../../utils/helper";
import { Service } from "typedi";

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
        const result:RowDataPacket = await query(
            `INSERT INTO ${this.primeTable} 
            (PESSOA_TIPO_ID, NOME, DATA_NASCIMENTO, SEXO, NBI, NIF, ESTADO_CIVIL) 
            VALUES 
            ('${item.pessoa_tipo.id}', '${item.nome}', '${jsDateToMysqlDate(item.data_nascimento)}', '${item.sexo}', '${item.nbi}', '${item.nif}', '${item.estado_civil}')`
        ) as RowDataPacket;
      
        const result_two = await query(
            `INSERT INTO ${this.secondTable} 
            (PESSOA_ID, TELEFONE, TELEFONE_ALTERNATIVO, EMAIL) 
            VALUES 
            (${result.insertId}, '${item.endereco.telefone}', '${item.endereco.telefone_alt}', '${item.endereco.email}')`
        ) as RowDataPacket;  

        if (result.affectedRows && result_two.affectedRows) { 
            item.id = result.insertId;
            return item;
        }
        throw Error("Ocorreu um erro ao criar os dados da pessoa");
    }

    async update(id: string, item: Pessoa): Promise<Pessoa> {
        const result:RowDataPacket = await query(`UPDATE ${this.primeTable} 
            SET PESSOA_TIPO_ID=${item.pessoa_tipo.id}, NOME='${item.nome}', DATA_NASCIMENTO=${jsDateToMysqlDate(item.data_nascimento)}, 
            SEXO='${item.sexo}', NBI='${item.nbi}', NIF='${item.nif}', ESTADO_CIVIL='${item.estado_civil}'
            WHERE ID=${id}`
        ) as RowDataPacket;

        const result_two: RowDataPacket = await query(`UPDATE ${this.secondTable} 
        SET TELEFONE="${item.endereco.telefone}", TELEFONE_ALTERNATIVO='${item.endereco.telefone_alt}', EMAIL='${item.endereco.email}'
        WHERE PESSOA_ID=${id}`
        ) as RowDataPacket;

        if (result.affectedRows && result_two.affectedRows) {
            return item;
        }
        throw Error("Ocorreu um erro ao actualizar od dados da pessoa")
    }

    async delete(id: String): Promise<Boolean> {
        const result: RowDataPacket = await query(`DELETE FROM ${this.primeTable} WHERE id=${id}`) as RowDataPacket;
        if (result.affectedRows) {
            return true;
        }
        return false;
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