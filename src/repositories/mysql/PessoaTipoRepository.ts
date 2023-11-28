import { Service } from "typedi";

import IGenericRepository from "../IGenericRepository";
import { pessoa_tipo } from "@prisma/client";
import prisma from "../PrismaClient";
import { isArrayEmpty } from "../../utils/helper";
import CustomError from "../../utils/CustomError";

@Service()
class PessoaTipoRepository implements IGenericRepository<pessoa_tipo> {
    async getAll(): Promise<pessoa_tipo[]> {
        const pessoa_tipos = await prisma.pessoa_tipo.findMany({
            take: 10
        });
        if (isArrayEmpty(pessoa_tipos) || pessoa_tipos === null || pessoa_tipos === undefined) {
            throw new CustomError("Não foram os possiveis tipos de pessoas");
        }
        return pessoa_tipos;
    }

    getByID(id: string): Promise<pessoa_tipo> {
        throw new Error("Method not implemented.");
    }
    create(item: pessoa_tipo): Promise<pessoa_tipo> {
        throw new Error("Method not implemented.");
    }
    update(id: string, item: pessoa_tipo): Promise<pessoa_tipo> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}


export default PessoaTipoRepository