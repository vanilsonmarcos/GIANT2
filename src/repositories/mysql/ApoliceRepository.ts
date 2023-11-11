import { Service } from "typedi";
import IGenericRepository from "../IGenericRepository";
import prisma from '../PrismaClient';
import { adenda, apolice } from "@prisma/client";
import IApoliceAdenda from "../IApoliceAdenda";
@Service()
class ApoliceRepository implements IGenericRepository<apolice>, IApoliceAdenda<adenda>{
    async getAllApoliceAdenda(apoliceID: string): Promise<adenda[]> {
        const adendas = await prisma.adenda.findMany({
            where: {
                APOLICE_ID: parseInt(apoliceID)
            },
            take: 100,
        });

        if(adendas === null) {
            throw Error("Esta apolice não possui adendas");
        }
        return adendas;
    }

    async getFirstAdenda(apoliceID: string): Promise<adenda> {
        const adenda = await prisma.adenda.findFirst({
            orderBy: {
                DATA_INSERCAO: 'asc'
            },
            where: {
                APOLICE_ID: parseInt(apoliceID)
            }
        });

        if(adenda === null) {
            throw Error("Esta apolice não possui adendas");
        }
        return adenda;
    }

    async getLatestAdenda(apoliceID: string): Promise<adenda> {
        const adenda = await prisma.adenda.findFirst({
            orderBy: {
                DATA_INSERCAO: 'desc'
            },
            where: {
                APOLICE_ID: parseInt(apoliceID)
            }
        });

        if(adenda === null) {
            throw Error("Esta apolice não possui adendas");
        }
        return adenda;
    }

    async getAll(): Promise<apolice[]> {
        const apolices = await prisma.apolice.findMany({
            take: 100,
        });
        return apolices;
    }

    async getByID(id: string): Promise<apolice> {
        const apolice = await prisma.apolice.findUnique({
            where: {
                ID: parseInt(id)
            }
        });

        if (apolice === null) {
            throw Error("Não Foi encontrado apólice com o ID referenciado");
        }
        return apolice;
    }

    async create(item: apolice): Promise<apolice> {
        const apolice = await prisma.apolice.create({
            data: {
                APOLICE_TIPO_ID: item.APOLICE_TIPO_ID,
                APOLICE_ESTADO_ID: item.APOLICE_ESTADO_ID,
                APOLICE_FRACIONAMENTO_ID: item.APOLICE_FRACIONAMENTO_ID,
                NUMERO: item.NUMERO,
                TOMADOR_ID: item.TOMADOR_ID
            }, 
            include: {
                apolice_tipo: true,
                apolice_estado: true,
                adenda: true,                
            }
        });

        if (apolice === null) {
            throw Error("Ocorreu um erro ao criar apólice");
        }
        return apolice;
    }

    async update(id: string, item: apolice): Promise<apolice> {
        const apolice = await prisma.apolice.update({
            where: {
                ID: parseInt(id)
            },
            data: {
                APOLICE_TIPO_ID: item.APOLICE_TIPO_ID,
                APOLICE_ESTADO_ID: item.APOLICE_ESTADO_ID,
                APOLICE_FRACIONAMENTO_ID: item.APOLICE_FRACIONAMENTO_ID,
                NUMERO: item.NUMERO,
                TOMADOR_ID: item.TOMADOR_ID
            }
        });
        if (apolice === null) {
            throw Error("Ocorreu um erro ao actualizar a apólice")
        }
        return apolice;
    }

    async delete(id: string): Promise<boolean> {
        const apolice = await prisma.apolice.delete({
            where: {
                ID: parseInt(id)
            }
        });
        if (apolice !== null) {
            return true;
        }
        return false;
    }
}

export default ApoliceRepository;

