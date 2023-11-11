import { adenda } from "@prisma/client";
import IGenericRepository from "../IGenericRepository";
import prisma from "../PrismaClient";

class AdendaRepository implements IGenericRepository<adenda> {
    async getAll(): Promise<adenda[]> {
        const adendas = await prisma.adenda.findMany({
            take: 100,
        });
        return adendas;
    }
    
    async getByID(id: string): Promise<adenda> {
        const adenda = await prisma.adenda.findUnique({
            where: {
                ID: parseInt(id)
            }
        });

        if (adenda === null) {
            throw Error("Não Foi encontrado apólice com o ID referenciado");
        }
        return adenda;
    }

    async create(item: adenda): Promise<adenda> {
        const adenda = await prisma.adenda.create({
            data: {
                APOLICE_ID: item.APOLICE_ID,
                PREMIO: item.PREMIO,
                DATA_INICIO: item.DATA_INICIO,
                DATA_FIM: item.DATA_FIM,
            }
        });

        if (adenda === null) {
            throw Error("Ocorreu um erro ao criar apólice");
        }
        return adenda;    
    }
    
    async update(id: string, item: adenda): Promise<adenda> {
        const adenda = await prisma.adenda.update({
            where: {
                ID: parseInt(id)
            },
            data: {
                APOLICE_ID: item.APOLICE_ID,
                PREMIO: item.PREMIO,
                DATA_INICIO: item.DATA_INICIO,
                DATA_FIM: item.DATA_FIM,
            }
        });

        if (adenda === null) {
            throw Error("Ocorreu um erro ao criar apólice");
        }
        return adenda;    
    }
    
    async delete(id: string): Promise<boolean> {
        const adenda = await prisma.adenda.delete({
            where: {
                ID: parseInt(id)
            }
        });
        if (adenda !== null) {
            return true;
        }
        return false;
    }
}

export default AdendaRepository;