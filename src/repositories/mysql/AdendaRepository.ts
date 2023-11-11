import { adenda, veiculo } from "@prisma/client";
import IGenericRepository from "../IGenericRepository";
import prisma from "../PrismaClient";
import IAdendaItemSegurado from "../IAdendaItemSegurado";
import { Service } from "typedi";

@Service()
class AdendaRepository implements IGenericRepository<adenda>, IAdendaItemSegurado<veiculo> {
    
    async getAllItemSeguradoByAdendaID(adendaID: string): Promise<veiculo[]> {
        const veiculos = await prisma.veiculo.findMany({
            include: {
                adenda_item_segurado: {
                    where: {
                        ADENDA_ID: parseInt(adendaID)
                    }
                },
            },
        });
        
        if (veiculos === null) {
            throw new Error("Não foi encontrado nenhum item segurado nesta adenda");
        }

        return veiculos;
    }

    async getallItemsSeguradoByApoliceID(apoliceID: string): Promise<veiculo[]> {
        const veiculos = await prisma.veiculo.findMany({
            include: {
                adenda_item_segurado: {
                    include: {
                        adenda: {
                            where: {
                                APOLICE_ID: parseInt(apoliceID)
                            }
                        }
                    }
                },     
            }
        });
        if (veiculos === null) {
            throw new Error("Não foi encontrado nenhum item segurado nesta apólice");
        }
        return veiculos;
    }

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
            throw new Error("Não Foi encontrado apólice com o ID referenciado");
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
            throw new Error("Ocorreu um erro ao criar apólice");
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
            throw new Error("Ocorreu um erro ao criar apólice");
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