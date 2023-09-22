import PrecoCilindrada  from '../../entities/PrecoCilindrada';
import { RowDataPacket } from "mysql2/promise";
import IGenericRepository from "../IGenericRepository";
import { query } from "./mysql";
import generatePrecoCilindrada from './../../entities/Helper';

class PrecoCilindradaRepository implements IGenericRepository<PrecoCilindrada> {

    private primeTable = 'preco_cilindrada';
    private secondTable = "veiculo_categoria";

    constructor() {
        
    }

    async getAll(): Promise<PrecoCilindrada[]> {
        const sql: string = `SELECT preco_cilindrada.* , veiculo_categoria.ID AS CATEGORIA_ID,
        veiculo_categoria.NOME AS CATEGORIA_NOME
        FROM preco_cilindrada
        INNER JOIN veiculo_categoria ON
        preco_cilindrada.VEICULO_CATEGORIA_ID = veiculo_categoria.ID  LIMIT 100` ;

        const data: RowDataPacket[] = await query(sql) as  RowDataPacket[] ;
        let precoCilindradas:PrecoCilindrada[] = [];
        if (data) {
            for (const item of data) {
                const precoCilindrada:PrecoCilindrada = generatePrecoCilindrada(item);
                precoCilindradas.push(precoCilindrada);
            }
        }
        return precoCilindradas;
    }

    async getByID(id: String): Promise<PrecoCilindrada> {
        const data:RowDataPacket= await query(
            `SELECT ${this.primeTable}.* , ${this.secondTable}.ID AS CATEGORIA_ID,
            ${this.secondTable}.NOME AS CATEGORIA_NOME
            FROM ${this.primeTable}
            INNER JOIN ${this.secondTable} ON
            ${this.primeTable}.VEICULO_CATEGORIA_ID = ${this.secondTable}.ID 
            WHERE ${this.primeTable}.ID=${id} LIMIT 1`
        ) as RowDataPacket;
        if (!data) {
            throw Error("Não foi possivel encontrar os dados do Preco Cilindrada");
        }
        return generatePrecoCilindrada(data[0]);

    }

    async create(item: PrecoCilindrada): Promise<PrecoCilindrada> {
        const result = await query(
            `INSERT INTO ${this.primeTable}
            (NOME,LOTACAO,VEICULO_CATEGORIA_ID, PREMIO_TRIMESTRAL, PREMIO_SEMESTRAL, 
            PREMIO_ANUAL, PESO_KG, CILINDRADA_MIN, CILINDRADA_MAX)
            VALUES 
            ('${item.nome}', ${item.lotacao}, ${item.veiculo_categoria.id}, ${item.premio_trimestral}, ${item.premio_semestral},
             ${item.premio_anual}, ${item.peso_kg}, ${item.cilindrada_min}, ${item.cilindrada_max})`
        ) as RowDataPacket;  
        if (!result.affectedRows) {
            throw Error("Não foi possivel inserir os dados do Preco Cilindrada");

        }
        item.id = result.insertId;
        return item;
   
    }

    async update(id: string, item: PrecoCilindrada): Promise<PrecoCilindrada> {
        const result: RowDataPacket = await query(`
        UPDATE ${this.primeTable} SET
        NOME = '${item.nome}',
        LOTACAO = ${item.lotacao},
        VEICULO_CATEGORIA_ID = ${item.veiculo_categoria.id},
        PREMIO_TRIMESTRAL = ${item.premio_trimestral},
        PREMIO_SEMESTRAL = ${item.premio_semestral},
        PREMIO_ANUAL = ${item.premio_anual},
        PESO_KG = ${item.peso_kg},
        CILINDRADA_MIN = ${item.cilindrada_min},
        CILINDRADA_MAX = ${item.cilindrada_max},
        WHERE ID=${id}`
        ) as RowDataPacket;

        if (!result.affectedRows) {
            throw Error("Não foi possivel actualizar os Dados do Preco Cilindrada");
        }
        return item;

    }

    async delete(id: String): Promise<Boolean> {
        const result: RowDataPacket = await query(`DELETE FROM ${this.primeTable} WHERE id=${id}`) as RowDataPacket;
        if (result.affectedRows) {
            return true;
        }
        return false;
    }

}


export default PrecoCilindradaRepository;