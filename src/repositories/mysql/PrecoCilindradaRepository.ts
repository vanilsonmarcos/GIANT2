import { RowDataPacket } from "mysql2/promise";
import IGenericRepository from "../IGenericRepository";
import { query } from "./mysql";
import PrecoCilindrada from "../../entities/PrecoCilindrada";

class PrecoCilindrada implements IGenericRepository<PrecoCilindrada> {
    async getAll(): Promise<PrecoCilindrada[]> {
        const sql: string = `SELECT veiculo.* , veiculo_categoria.ID AS CATEGORIA_ID,
        veiculo_categoria.NOME AS CATEGORIA_NOME
        FROM veiculo
        INNER JOIN veiculo_categoria ON
        veiculo.VEICULO_CATEGORIA_ID = veiculo_categoria.ID  LIMIT 100` ;

        const data: RowDataPacket[] = await query(sql) as  RowDataPacket[] ;
        let precoCilindradas:PrecoCilindrada[] = [];
        if (data) {
            for (const item of data) {
                const precoCilindrada:PrecoCilindrada = generatePrecoCilindrada(item);
                precoCilindradas.push(veiculo);
            }
        }
        return veiculos;
    }
    getByID(id: String): Promise<Boolean | PrecoCilindrada> {
        throw new Error("Method not implemented.");
    }
    create(item: PrecoCilindrada): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    update(id: string, item: PrecoCilindrada): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    delete(id: String): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }

}


export default PrecoCilindrada;