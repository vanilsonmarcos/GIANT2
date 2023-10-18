import { Service } from "typedi";
import Ficheiro from "../../entities/Ficheiro/Ficheiro";
import IGenericRepository from "../IGenericRepository";
import { RowDataPacket } from "mysql2";
import { queryWithValues } from "./mysql";
import generateFicheiro from "../../entities/Ficheiro/Helper";
import prisma from "../PrismaClient";
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

        const newFile = await prisma.ficheiro.create({
            data: {
                NOME: item.nome,
                SIZE: item.size,
                PATH: item.path,
                EXT:  item.ext,
                CONTENT: item.content
            },
        });   


        if (!newFile) {
            throw Error("Ocorreu um erro inserir o ficheiro");
        }

        
        return generateFicheiro(newFile);
    }

    update(id: String, item: Ficheiro): Promise<Ficheiro> {
        throw new Error("Method not implemented.");
    }

    async delete(id: String): Promise<Boolean> {
        const deletedFile = await prisma.ficheiro.delete({
            where: {
                ID: parseInt(id.toString(), 10)
            }
        });
        return deletedFile!== null;
    }
}

export default FicheiroRepository;