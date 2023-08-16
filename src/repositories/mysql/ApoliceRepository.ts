import { RowDataPacket } from "mysql2/promise";
import ApoliceEstado from "../../entities/Apolice/ApoliceEstado";
import IApoliceEstado from "../IApoliceEstado";
import IApoliceTipo from "../IApoliceTipo";
import ApoliceTipo from "../../entities/Apolice/ApoliceTipo";
import { generateApolice, generateApoliceEstado, generateApoliceTipo } from "../../entities/Apolice/Helper";
import { query } from "./mysql";
import IGenericRepository from "../IGenericRepository";
import Apolice from "../../entities/Apolice/Apolice";

class ApoliceRepository implements  IGenericRepository<Apolice>,IApoliceEstado<ApoliceEstado>, IApoliceTipo<ApoliceTipo> {
    constructor() {}
    async getAll(): Promise<Apolice[]> {
        const sql: string = `
            SELECT 
                apolice.*,
                apolice_estado.NOME AS APOLICE_ESTADO_NOME,
                apolice_estado.DESCRICAO AS APOLICE_ESTADO_DESCRICAO,
                apolice_tipo.SIGLA AS APOLICE_TIPO_SIGLA,
                apolice_tipo.NOME AS APOLICE_TIPO_NOME,
                apolice_tipo.DESCRICAO AS APOLICE_TIPO_DESCRICAO,
                segurado.NOME AS SEGURADO_NOME,
                segurado.TIPO AS SEGURADO_TIPO,
                segurado.DATA_NASCIMENTO AS SEGURADO_DATA_NASCIMENTO,
                segurado.SEXO AS SEGURADO_SEXO,
                segurado.NBI AS SEGURADO_NBI,
                segurado.NIF AS SEGURADO_NIF,
                segurado.ESTADO_CIVIL AS SEGURADO_ESTADO_CIVIL,
                apolice_fracionamento.FRACIONADO_EM, apolice_fracionamento.NO_FRACOES
            FROM apolice
            INNER JOIN pessoa AS segurado ON apolice.SEGURADO_ID = pessoa.ID
            INNER JOIN apolice_estado ON apolice.APOLICE_ESTADO_ID = apolice_estado.ID
            INNER JOIN apolice_tipo ON apolice.APOLICE_TIPO_ID = apolice_tipo.ID
            INNER JOIN apolice_fracionamento ON apolice.APOLICE_FRACIONAMENTO_ID = apolice_fracionamento.ID
            LIMIT 100; 
        ` ;

        const data: RowDataPacket[] = await query(sql) as  RowDataPacket[] ;
        let apolices:Apolice[] = [];
        if (data) {
            for (const item of data) {
                const apolice:Apolice = generateApolice(item);
                apolices.push(apolice);
            }
        }
        return apolices;
    }

    async getByID(id: String): Promise<Boolean | Apolice> {
        const sql: string = `
            SELECT 
                apolice.*,
                apolice_estado.NOME AS APOLICE_ESTADO_NOME,
                apolice_estado.DESCRICAO AS APOLICE_ESTADO_DESCRICAO,
                apolice_tipo.SIGLA AS APOLICE_TIPO_SIGLA,
                apolice_tipo.NOME AS APOLICE_TIPO_NOME,
                apolice_tipo.DESCRICAO AS APOLICE_TIPO_DESCRICAO,
                segurado.NOME AS SEGURADO_NOME,
                segurado.TIPO AS SEGURADO_TIPO,
                segurado.DATA_NASCIMENTO AS SEGURADO_DATA_NASCIMENTO,
                segurado.SEXO AS SEGURADO_SEXO,
                segurado.NBI AS SEGURADO_NBI,
                segurado.NIF AS SEGURADO_NIF,
                segurado.ESTADO_CIVIL AS SEGURADO_ESTADO_CIVIL,
                apolice_fracionamento.FRACIONADO_EM, apolice_fracionamento.NO_FRACOES
            FROM apolice
            INNER JOIN pessoa AS segurado ON apolice.SEGURADO_ID = pessoa.ID
            INNER JOIN apolice_estado ON apolice.APOLICE_ESTADO_ID = apolice_estado.ID
            INNER JOIN apolice_tipo ON apolice.APOLICE_TIPO_ID = apolice_tipo.ID
            INNER JOIN apolice_fracionamento ON apolice.APOLICE_FRACIONAMENTO_ID = apolice_fracionamento.ID
            LIMIT 1; 
        ` ;
        const data: RowDataPacket[] = await query(sql) as  RowDataPacket[] ;
        if (data) {
            return generateApolice(data[0]);
        }
        return false;
    }

    async create(item: Apolice): Promise<Boolean> {
       
        
    }

    async update(id: string, item: Apolice): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }

    async delete(id: String): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }

    async getApoliceTipoByApoliceID(id: String): Promise<Boolean | ApoliceTipo> {
        const data:RowDataPacket= await query(
            `SELECT apolice_tipo.* 
            FROM apolice
            INNER JOIN apolice_tipo
            ON apolice.APOLICE_TIPO_ID=apolice_tipo.ID
            WHERE apolice.ID = ${id}
            LIMIT 1`
        ) as RowDataPacket;
        if (data) {
            return generateApoliceTipo(data[0]);
        }
        return false;
    }

    async addApoliceTipo(apoliceTipo: ApoliceTipo): Promise<Boolean> {
        const result:RowDataPacket = await query(
            `INSERT INTO apolice_tipo (SIGLA, NOME, DESCRICAO) 
            VALUES ('${apoliceTipo.sigla}', '${apoliceTipo.nome}', '${apoliceTipo.descricao}')`
        ) as RowDataPacket;
        if (result.affectedRows) {
            return true;
        }
        return false;
    }

    async getApoliceEstadoByApoliceID(id: String): Promise<Boolean | ApoliceEstado> {
        const data:RowDataPacket= await query(
            `SELECT apolice_estado.* 
            FROM apolice
            INNER JOIN apolice_estado
            ON apolice.APOLICE_ESTADO_ID=apolice_estado.ID
            WHERE apolice.ID = ${id}
            LIMIT 1`
        ) as RowDataPacket;
        if (data) {
            return generateApoliceEstado(data[0]);
        }
        return false;
    }
    // this method change/update the state o apolice estado
    async setApoliceEstadoByApoliceID(id: String, apoliceEstado: ApoliceEstado): Promise<Boolean | ApoliceEstado> {
        const result:RowDataPacket = await query(
            `UPDATE apolice 
            SET APOLICE_ESTADO_ID=${apoliceEstado.id}
            WHERE id=${id}`
        ) as RowDataPacket;

        if (result.affectedRows) {
            return true;
        }
        return false;
    }

}

export default ApoliceRepository;  