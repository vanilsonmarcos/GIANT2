import { RowDataPacket } from "mysql2/promise";
import ApoliceEstado from "../../entities/Apolice/ApoliceEstado";
import IApoliceEstado from "../IApoliceEstado";
import IApoliceTipo from "../IApoliceTipo";
import ApoliceTipo from "../../entities/Apolice/ApoliceTipo";
import { generateApoliceEstado, generateApoliceTipo } from "../../entities/Apolice/Helper";
import { query } from "./mysql";
import IGenericRepository from "../IGenericRepository";
import Apolice from "../../entities/Apolice/Apolice";

class ApoliceRepository implements  IGenericRepository<Apolice>,IApoliceEstado<ApoliceEstado>, IApoliceTipo<ApoliceTipo> {
    constructor() {}
    getAll(): Promise<Apolice[]> {
        const sql: string = `SELECT * FROM pessoa 
        INNER JOIN pessoa_endereco ON 
        pessoa.ID=pessoa_endereco.PESSOA_ID 
        INNER JOIN pessoa_tipo ON
        pessoa.PESSOA_TIPO_ID = pessoa_tipo.ID LIMIT 100` ;
        const data: RowDataPacket[] = await query(sql) as  RowDataPacket[] ;
        let apolices:Apolice[] = [];
        if (data) {
            for (const item of data) {
                const apolice:Apolice = generatePessoa(item);
                apolices.push(apolice);
            }
        }
        return apolices;
    }

    getByID(id: String): Promise<Boolean | Apolice> {
        throw new Error("Method not implemented.");
    }

    create(item: Apolice): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }

    update(id: string, item: Apolice): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    
    delete(id: String): Promise<Boolean> {
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