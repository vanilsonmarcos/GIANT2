import { OkPacket } from "mysql";
import Pessoa from "../../entities/Pessoa/Pessoa";
import IGenericRepository from "../IGenericRepository";
import IPessoaRepository from "../IPessoaRepository";
import { query } from "./mysql";
import { emptyOrRow } from "../../utils/helper";
import { RowDataPacket } from "mysql2";
import generatePessoa from "../../entities/Pessoa/Helper";


class PessoaRepository implements IGenericRepository<Pessoa>, IPessoaRepository<Pessoa> {
    private primeTable = 'PESSOA';
    private secondTable = "PESSOA_ENDERECO";
    private thirdTable = "PESSOA_TIPO";

    constructor() {

    }

    async getAll(): Promise<Pessoa[]> {
        const rows = await query(
            `SELECT * FROM ${this.primeTable} 
            INNER JOIN ${this.secondTable} ON 
            ${this.primeTable}.ID=${this.secondTable}.PESSOA_ID 
            INNER JOIN ${this.thirdTable} ON
            ${this.primeTable}.PESSOA_TIPO_ID = ${this.thirdTable}.ID`
        );
        const data = emptyOrRow(rows);

        if (data) {
            let pessoas: Array<Pessoa>;

            for (let i = 0; i > data.length; i++) {
                pessoas.push(generatePessoa(data[i]));
            }
        }
        return pessoas;
    }

    async getByID(id: String): Promise<Boolean | Pessoa> {
        const rows: RowDataPacket = await query(
            `SELECT * FROM ${this.primeTable} 
            INNER JOIN ${this.secondTable} ON 
            ${this.primeTable}.ID=${this.secondTable}.PESSOA_ID 
            INNER JOIN ${this.thirdTable} ON
            ${this.primeTable}.PESSOA_TIPO_ID = ${this.thirdTable}.ID
            WHERE ${this.primeTable}.ID=${id} LIMIT 1`
        );
        const data = rows[0];
        if (data) {
            return generatePessoa(data);
        }

        return false;

    }

    async create(item: Pessoa): Promise<Boolean> {
        const result: OkPacket = await query(
            `INSERT INTO ${this.primeTable} 
            (PESSOA_TIPO_ID, NOME, DATA_NASCIMENTO, SEXO, NBI, NIF, ESTADO_CIVIL) 
            VALUES 
            ('${item.pessoa_tipo_id}', '${item.nome}', '${item.data_nascimento}', '${item.sexo}', '${item.nbi}', '${item.nif}', '${item.estado_civil}')`
        );
      
        const result_two: OkPacket = await query(
            `INSERT INTO ${this.secondTable} 
            (PESSOA_ID, TELEFONE, TELEFONE_ALTERNATIVO, EMAIL) 
            VALUES 
            (${result.insertId}, '${item.endereco.telefone}', '${item.endereco.telefone_alt}', '${item.endereco.email}')`
        );  
        if (result.affectedRows && result_two.affectedRows) {
            return true;
        }
        return false;
    }

    async update(id: string, item: Pessoa): Promise<Boolean> {
        const result: OkPacket = await query(`UPDATE ${this.primeTable} 
            SET PESSOA_TIPO_ID="${item.pessoa_tipo_id}", NOME=${item.nome}, DATA_NASCIMENTO=${item.data_nascimento}, 
            SEXO=${item.sexo}, NBI=${item.nbi}, NIF=${item.nif}, ESTADO_CIVIL=${item.estado_civil}
            WHERE id=${id}`
        );

        const result_two: OkPacket = await query(`UPDATE ${this.secondTable} 
        SET TELEFONE="${item.endereco.telefone}", TELEFONE_ALTERNATIVO=${item.endereco.telefone_alt}, EMAIL=${item.endereco.email}
        WHERE PESSOA_ID=${id}`
        );

        if (result.affectedRows && result_two.affectedRows) {
            return true;
        }
        return false;
    }

    async delete(id: String): Promise<Boolean> {
        const result: OkPacket = await query(`DELETE FROM ${this.primeTable} WHERE id=${id}`);
        if (result.affectedRows) {
            return true;
        }
        return false;
    }

    async getPersonByPhoneNumber(phone_number: String): Promise<Pessoa | Boolean> {
        const rows: RowDataPacket = await query(
            `SELECT * FROM ${this.primeTable} 
            INNER JOIN ${this.secondTable} ON 
            ${this.primeTable}.ID=${this.secondTable}.PESSOA_ID 
            INNER JOIN ${this.thirdTable} ON
            ${this.primeTable}.PESSOA_TIPO_ID = ${this.thirdTable}.ID
            WHERE ${this.secondTable}.TELEFONE=${phone_number} LIMIT 1`
        );
        const data = rows[0];
        if (data) {
            return generatePessoa(data);
        }
        return false;
    }

    async getPersonByEmail(email: String): Promise<Pessoa | Boolean> {
        const rows: RowDataPacket = await query(
            `SELECT * FROM ${this.primeTable} 
            INNER JOIN ${this.secondTable} ON 
            ${this.primeTable}.ID=${this.secondTable}.PESSOA_ID 
            INNER JOIN ${this.thirdTable} ON
            ${this.primeTable}.PESSOA_TIPO_ID = ${this.thirdTable}.ID
            WHERE ${this.secondTable}.EMAIL=${email} LIMIT 1`
        );
        const data = rows[0];
        if (data) {
            return generatePessoa(data);
        }
        return false;
    }

    async getPersonByNIF(nif: String): Promise<Pessoa | Boolean> {
        const rows: RowDataPacket = await query(
            `SELECT * FROM ${this.primeTable} 
            INNER JOIN ${this.secondTable} ON 
            ${this.primeTable}.ID=${this.secondTable}.PESSOA_ID 
            INNER JOIN ${this.thirdTable} ON
            ${this.primeTable}.PESSOA_TIPO_ID = ${this.thirdTable}.ID
            WHERE ${this.primeTable}.NIF=${nif} LIMIT 1`
        );
        const data = rows[0];
        if (data) {
            return generatePessoa(data);
        }
        return false;
    }

    async getPersonByNBI(nbi: String): Promise<Pessoa | Boolean> {
        const rows: RowDataPacket = await query(
            `SELECT * FROM ${this.primeTable} 
            INNER JOIN ${this.secondTable} ON 
            ${this.primeTable}.ID=${this.secondTable}.PESSOA_ID 
            INNER JOIN ${this.thirdTable} ON
            ${this.primeTable}.PESSOA_TIPO_ID = ${this.thirdTable}.ID
            WHERE ${this.primeTable}.NBI=${nbi} LIMIT 1`
        );
        const data = rows[0];
        if (data) {
            return generatePessoa(data);
        }
        return false;

    }
}


export default PessoaRepository