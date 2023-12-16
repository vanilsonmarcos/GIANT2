import { Service } from "typedi";
import IGenericRepository from "../IGenericRepository";
import prisma from '../PrismaClient';
import { adenda, apolice, apolice_estado, pessoa } from "@prisma/client";
import IApoliceAdenda from "../IApoliceAdenda";
import IApoliceEstado from "../IApoliceEstado";
import CustomError from "../../utils/CustomError";
import { isArrayEmpty } from "../../utils/helper";
@Service()
class ApoliceRepository implements
    IGenericRepository<apolice>, 
    IApoliceAdenda<adenda>, 
    IApoliceEstado<apolice_estado> {
    
    async getAllApoliceEstado(): Promise<apolice_estado[]> {
        const apolice_estados =  await prisma.apolice_estado.findMany({
            take: 100,
        });
        if (isArrayEmpty(apolice_estados) || apolice_estados === null || apolice_estados === undefined) {
            throw new CustomError("Ocorreu um erro ao carregar os estados das apólices");
        }
        return apolice_estados;  
    }

    async getApoliceEstado(apoliceID: string): Promise<apolice_estado> {
        const apolice_estado = await prisma.apolice.findUnique({
            where: {
                ID: parseInt(apoliceID)
            }
        }).apolice_estado();
        if (apolice_estado === null || apolice_estado === undefined) {
            throw new CustomError("Ocorreu um erro ao carregar o estado da apólice");
        }
        return apolice_estado;
    }

    async setApoliceEstado(apoliceID: string, apoliceEstado: apolice_estado): Promise<apolice_estado> {
        const apolice_estado = await prisma.apolice.update({
            where: {
                ID: parseInt(apoliceID)
            },
            data: {
                APOLICE_ESTADO_ID: apoliceEstado.ID
            }
        }).apolice_estado();
        return apolice_estado;
    }

    async getAllAdendaByApoliceID(apoliceID: string): Promise<adenda[]> {
        const adendas = await prisma.adenda.findMany({
            where: {
                APOLICE_ID: parseInt(apoliceID)
            },
            orderBy: {
                DATA_INSERCAO:'desc'
            },
            take: 100,
        });

        if (isArrayEmpty(adendas) || adendas === null || adendas === undefined) {
            throw new CustomError("Esta apolice não possui adendas");
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

        if (adenda === null || adenda === undefined) {
            throw new CustomError("Esta apolice não possui adendas");
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

        if (adenda === null || adenda === undefined) {
            throw new CustomError("Esta apolice não possui adenda");
        }
        return adenda;
    }

    async getAll(): Promise<apolice[]> {
        const apolices = await prisma.apolice.findMany({
            take: 100,
        });
        if (isArrayEmpty(apolices) || apolices === null || apolices === undefined) {
            throw new CustomError("Esta apolice não possui adenda");
        }

        return apolices;
    }

    async getByID(id: string): Promise<apolice> {
        const apolice = await prisma.apolice.findUnique({
            where: {
                ID: parseInt(id)
            }
        });

        if (apolice === null || apolice === undefined) {
            throw new CustomError("Não Foi encontrado apólice com o ID referenciado");
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

        if (apolice === null || apolice === undefined) {
            throw new CustomError("Ocorreu um erro ao criar apólice");
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
        if (apolice === null || apolice === undefined) {
            throw new CustomError("Ocorreu um erro ao actualizar a apólice")
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

