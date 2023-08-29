import { RowDataPacket } from "mysql2";
import Cobertura from "../../entities/Cobertura";
import ICobertura from "../ICobertura";
import IGenericRepository from "../IGenericRepository";
import { query } from "./mysql";
import { generateCobertura } from "../../entities/Apolice/Helper";
import { Service } from "typedi";

@Service()
class CoberturaRepository implements IGenericRepository<Cobertura>, ICobertura{
    constructor() { 
    }
    async isCoberturaBase(id: String): Promise<Boolean> {

        const sql: string = `
        SELECT 
            cobertura.*,  
            apolice_tipo.ID as APOLICE_TIPO_ID,  
            apolice_tipo.SIGLA as APOLICE_TIPO_SIGLA, 
            apolice_tipo.NOME as APOLICE_TIPO_NOME,
            apolice_tipo.DESCRICAO as APOLICE_TIPO_DESCRICAO
        FROM cobertura 
        INNER JOIN apolice_tipo 
        ON cobertura.APOLICE_TIPO_ID=apolice_tipo.ID
        WHERE cobertura.ID=${id}
        ` ;
        const data: RowDataPacket[] = await query(sql) as RowDataPacket[];

        if (data) {
            const cobertura: Cobertura = generateCobertura(data[0]);
            return cobertura.cobertura_base;
        }
        return false;
    }

    async getAll(): Promise<Cobertura[]> {
        const sql: string = `
        SELECT 
            cobertura.*,  
            apolice_tipo.ID as APOLICE_TIPO_ID,  
            apolice_tipo.SIGLA as APOLICE_TIPO_SIGLA, 
            apolice_tipo.NOME as APOLICE_TIPO_NOME,
            apolice_tipo.DESCRICAO as APOLICE_TIPO_DESCRICAO
        FROM cobertura 
        INNER JOIN apolice_tipo 
        ON cobertura.APOLICE_TIPO_ID=apolice_tipo.ID
        ` ;
        const data: RowDataPacket[] = await query(sql) as RowDataPacket[];
        let coberturas: Cobertura[] = [];
        if (data) {
            for (const item of data) {
                const cobertura: Cobertura = generateCobertura(item);
                coberturas.push(cobertura);
            }
        }
        return coberturas;
    }
    async getByID(id: String): Promise<Cobertura> {
        const sql: string = `
        SELECT 
            cobertura.*,  
            apolice_tipo.ID as APOLICE_TIPO_ID,  
            apolice_tipo.SIGLA as APOLICE_TIPO_SIGLA, 
            apolice_tipo.NOME as APOLICE_TIPO_NOME,
            apolice_tipo.DESCRICAO as APOLICE_TIPO_DESCRICAO
        FROM cobertura 
        INNER JOIN apolice_tipo 
        ON cobertura.APOLICE_TIPO_ID=apolice_tipo.ID
        WHERE cobertura.ID=${id}
        ` ;
        const data: RowDataPacket[] = await query(sql) as RowDataPacket[];

        if (data) {
            const cobertura: Cobertura = generateCobertura(data[0]);
            return cobertura;
        }
        throw Error("Não foram encontrados os dados da Cobertura");
    }

    async create(item: Cobertura): Promise<Cobertura> {
        const result: RowDataPacket = await query(
            `INSERT INTO cobertura(
                APOLICE_TIPO_ID,
                COBERTURA_BASE,
                SIGLA,
                NOME,
                DESCRICAO,
                VALOR_PAGAR,
                DESCONTO
            ) VALUES (
                '${item.apolice_tipo.id}', 
                ${item.cobertura_base? 1: 0}, 
                '${item.sigla}', 
                '${item.nome}', 
                '${item.descricao}',
                ${item.valor_pagar},
                ${item.desconto})`
        ) as RowDataPacket;

        if (result.affectedRows) {
            item.id = result.insertId;
            return item;

        }
        throw Error("Ocorreu um erro ao criar a Cobertura");
    }

    async update(id: string, item: Cobertura): Promise<Cobertura> {
        const result: RowDataPacket = await query(`
        UPDATE 
            cobertura 
        SET 
            APOLICE_TIPO_ID = ${item.apolice_tipo.id},
            COBERTURA_BASE =  ${item.cobertura_base? 1 : 0},
            SIGLA =  '${item.sigla}',
            NOME =  '${item.nome}',
            DESCRICAO =  '${item.descricao}',
            VALOR_PAGAR =  ${item.valor_pagar},
            DESCONTO =  ${item.desconto}
        WHERE ID=${id}`
        ) as RowDataPacket;

        if (result.affectedRows) {
            return item;
        }
        throw Error("Ocorreu um erro ao actualizar od dados da Cobertura")

    }

    async delete(id: String): Promise<Boolean> {
        const result: RowDataPacket = await query(`DELETE FROM cobertura WHERE id=${id}`) as RowDataPacket;
        if (result.affectedRows) {
            return true;
        }
        return false;
    }

}

export default CoberturaRepository;