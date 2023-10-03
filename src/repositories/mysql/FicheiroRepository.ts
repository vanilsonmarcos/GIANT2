import { Service } from "typedi";
import Ficheiro from "../../entities/Ficheiro/Ficheiro";
import IGenericRepository from "../IGenericRepository";
import { RowDataPacket } from "mysql2";
import { queryWithValues } from "./mysql";
import generateFicheiro from "../../entities/Ficheiro/Helper";
@Service()
class FicheiroRepository implements IGenericRepository<Ficheiro>{

    constructor() {}
    
    getAll(): Promise<Ficheiro[]> {
        throw new Error("Method not implemented.");
    }
    
    async getByID(id: String): Promise<Ficheiro> {
        const query = "SELECT * FROM ficheiro WHERE ID = ?;";
        const value = [id];
        const data:RowDataPacket = await queryWithValues(query, value) as RowDataPacket;
        if (data.affectedRows) {
            throw Error("Não foi possivel carregar os dados do ficheiro");
        }
        return generateFicheiro(data[0]);
    }

    async create(item: Ficheiro): Promise<Ficheiro> {
        const query = `INSERT INTO ficheiro(NOME, SIZE, PATH, EXT, CONTENT) VALUES (?, ?, ?, ?, ?);`;
        const values = [
            item.nome,
            item.size,
            item.path,
            item.ext,
            item.content
        ];
        const data:RowDataPacket = await queryWithValues(query, values) as RowDataPacket;

        if (!data) {
            throw Error("Ocorreu um erro inserir o ficheiro");
        }
        return generateFicheiro(data[0]);
    }

    update(id: String, item: Ficheiro): Promise<Ficheiro> {
        throw new Error("Method not implemented.");
    }

    async delete(id: String): Promise<Boolean> {
        const query = "DELETE FROM ficheiro WHERE ID = ?;";
        const value = [id];
        const data:RowDataPacket = await queryWithValues(query, value) as RowDataPacket;
        if (data.affectedRows) {
            return false;
        }
        return true;
    }
}

export default FicheiroRepository;