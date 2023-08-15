import { RowDataPacket } from "mysql2/promise";
import ApoliceEstado from "../../entities/Apolice/ApoliceEstado";
import IApoliceEstado from "../IApoliceEstado";
import IApoliceTipo from "../IApoliceTipo";
import ApoliceTipo from "../../entities/Apolice/ApoliceTipo";
import { generateApoliceEstado, generateApoliceTipo } from "../../entities/Apolice/Helper";
import { query } from "./mysql";

class ApoliceRepository implements IApoliceEstado<ApoliceEstado>, IApoliceTipo<ApoliceTipo>, Ia {
    constructor() {}

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