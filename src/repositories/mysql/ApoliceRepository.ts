import { RowDataPacket } from "mysql2/promise";
import ApoliceEstado from "../../entities/Apolice/ApoliceEstado";
import IApoliceEstado from "../IApoliceEstado";
import IApoliceTipo from "../IApoliceTipo";
import ApoliceTipo from "../../entities/Apolice/ApoliceTipo";
import { generataApoliceFracionamento, generateApolice, generateApoliceEstado, generateApoliceItemSegurado, generateApoliceTipo } from "../../entities/Apolice/Helper";
import { query } from "./mysql";
import IGenericRepository from "../IGenericRepository";
import Apolice from "../../entities/Apolice/Apolice";
import IApoliceTomador from "../IApoliceTomador";
import IApoliceFracionamento from "../IApoliceFracionamento";
import ApoliceFracionamento from "../../entities/Apolice/ApoliceFracionamento";
import ApoliceItemSegurado from "../../entities/Apolice/ApoliceItemSegurado";
import IApoliceItemSegurado from "../IApoliceItemSegurado";

class ApoliceRepository implements IGenericRepository<Apolice>, IApoliceEstado<ApoliceEstado>, 
    IApoliceTipo<ApoliceTipo>, IApoliceFracionamento<ApoliceFracionamento>,
    IApoliceItemSegurado<ApoliceItemSegurado>{
    constructor() { }

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

        const data: RowDataPacket[] = await query(sql) as RowDataPacket[];
        let apolices: Apolice[] = [];
        if (data) {
            for (const item of data) {
                const apolice: Apolice = generateApolice(item);
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
        const data: RowDataPacket[] = await query(sql) as RowDataPacket[];
        if (data) {
            return generateApolice(data[0]);
        }
        return false;
    }

    async create(item: Apolice): Promise<Boolean> {
        const result: RowDataPacket = await query(
            `INSERT INTO apolice 
            (APOLICE_TIPO_ID ,NUMERO, SEGURADO_ID, DATA_INICIO, DATA_FIM, APOLICE_FRACIONAMENTO_ID, APOLICE_ESTADO_ID, VALOR_PREMIO) 
            VALUES 
            (${item.apolice_tipo_id}, ${item.numero}, ${item.segurado_id}, 
            '${item.data_inicio}', '${item.data_fim}', ${item.apolice_fracionamento_id}, 
            ${item.apolice_estado_id}, ${item.valor_premio})`
        ) as RowDataPacket;

        if (result.affectedRows) {
            return true;
        }
        return false;

    }

    async update(id: string, item: Apolice): Promise<Boolean> {
        const result: RowDataPacket = await query(
            `UPDATE SET 
                APOLICE_TIPO_ID = ${item.apolice_tipo_id},
                NUMERO = ${item.numero},
                SEGURADO_ID = ${item.segurado_id},
                DATA_INICIO = ${item.data_inicio},
                DATA_FIM = ${item.data_fim},
                APOLICE_FRACIONAMENTO_ID = ${item.apolice_fracionamento_id},
                APOLICE_ESTADO_ID = ${item.apolice_estado_id},
                VALOR_PREMIO = ${item.valor_premio},
            WHERE id=${id}`
        ) as RowDataPacket;

        if (result.affectedRows) {
            return true;
        }
        return false;
    }

    async delete(id: String): Promise<Boolean> {
        const result: RowDataPacket = await query(`DELETE FROM apolice WHERE id=${id}`) as RowDataPacket;
        if (result.affectedRows) {
            return true;
        }
        return false;
    }

    async getApoliceTipoByApoliceID(id: String): Promise<Boolean | ApoliceTipo> {
        const data: RowDataPacket = await query(
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
        const result: RowDataPacket = await query(
            `INSERT INTO apolice_tipo (SIGLA, NOME, DESCRICAO) 
            VALUES ('${apoliceTipo.sigla}', '${apoliceTipo.nome}', '${apoliceTipo.descricao}')`
        ) as RowDataPacket;
        if (result.affectedRows) {
            return true;
        }
        return false;
    }

    async getApoliceEstadoByApoliceID(id: String): Promise<Boolean | ApoliceEstado> {
        const data: RowDataPacket = await query(
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
        const result: RowDataPacket = await query(
            `UPDATE apolice 
            SET APOLICE_ESTADO_ID=${apoliceEstado.id}
            WHERE id=${id}`
        ) as RowDataPacket;

        if (result.affectedRows) {
            return true;
        }
        return false;
    }

    async getApoliceFracionamentoByApoliceID(id: String): Promise<Boolean | ApoliceFracionamento> {
        const sql: string = `
            SELECT apolice_fracionamento.*
            FROM apolice
            INNER JOIN apolice_fracionamento ON apolice.APOLICE_FRACIONAMENTO_ID = apolice_fracionamento.ID
            WHERE apolice.ID=${id}
            LIMIT 1; 
        ` ;
        const data: RowDataPacket[] = await query(sql) as RowDataPacket[];
        if (data) {
            return generataApoliceFracionamento(data[0]);
        }
        return false;
    }

    async setApoliceFracionamentoByApoliceID(id: String, apoliceFracionamento: ApoliceFracionamento): Promise<Boolean> {
        const sql: string = `
            UPDATE apolice
            SET APOLICE_FRACIONAMENTO_ID = ${apoliceFracionamento.id}
            WHERE ID = ${id};
        `;
        const result: RowDataPacket = await query(sql) as RowDataPacket;

        if (result.affectedRows) {
            return true;
        }
        return false;
    }

    async getAllItemsByApoliceID(id: String): Promise<Boolean | ApoliceItemSegurado[]> {
        const data: RowDataPacket[] = await query(`
            SELECT * 
            FROM apolice_item_segurado
            WHERE APOLICE_ID=${id} 
            LIMIT 1`
        ) as RowDataPacket [];
        let apoliceItemSegurados:ApoliceItemSegurado[] = [];
        if (data) {
            for (const item of data) {
                const pessoa:ApoliceItemSegurado = generateApoliceItemSegurado(item);
                apoliceItemSegurados.push(pessoa);
            }
            return apoliceItemSegurados;
        }
        return false;
    }

    async removeItemByApoliceID(id: String, item: ApoliceItemSegurado): Promise<Boolean> {
        const result: RowDataPacket = await query(`
        DELETE FROM apolice_item_segurado
        WHERE APOLICE_ID=${id} AND ITEM_ID=${item.item_id}
        `) as RowDataPacket;
        if (result.affectedRows) {
            return true;
        }
        return false;
    }

    async AddItemByApoliceID(id: String, item: ApoliceItemSegurado): Promise<Boolean> {
        const result = await query(
            `INSERT INTO apolice_item_segurado
            (APOLICE_TIPO_ID, ITEM_ID, APOLICE_ID) 
            VALUES 
            (${item.apolice_tipo_id}, '${item.item_id}', '${item.apolice_id}')`
        ) as RowDataPacket;  
        if (result.affectedRows) {
            return true;
        }
        return false;
    }

    


}

export default ApoliceRepository;  