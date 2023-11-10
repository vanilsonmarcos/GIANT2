import { Service } from "typedi";

import IGenericRepository from "../IGenericRepository";
import Apolice from "../../entities/Apolice/Apolice";
import prisma from '../PrismaClient';
import { generateApolice } from '../../entities/Apolice/Helper';
@Service()
class ApoliceRepository implements IGenericRepository<Apolice>{
    constructor() { }

    async getAll(): Promise<Apolice[]> {
        const apls = await prisma.apolice.findMany({
            take: 100
        });

        let apolices: Apolice[] = [];

        if (apls !== null) {
            for (const item of apls) {
                const apolice: Apolice = generateApolice(item);
                apolices.push(apolice);
            }
        }
        return apolices;
    }

    async getByID(id: string): Promise<Apolice> {
        const apolice = await prisma.apolice.findUnique({
            where: {
                ID: parseInt(id)
            }
        });

        if (apolice === null) {
            throw Error("Não Foi encontrado apólice com o identificador referênciado");
        }
        return generateApolice(apolice);
    }

    async create(item: Apolice): Promise<Apolice> {
        const apolice = await prisma.apolice.create({
            data: {
                APOLICE_TIPO_ID: item.apolice_tipo_id,
                APOLICE_ESTADO_ID: item.apolice_estado_id,
                APOLICE_FRACIONAMENTO_ID: item.apolice_fracionamento_id,
                NUMERO: item.numero,
                TOMADOR_ID: item.tomador_id
            }
        });

        if (apolice !== null) {
            item.id = apolice.ID;
            return item;
        }
        throw Error("Ocorreu um erro ao criar apólice");
    }

    async update(id: string, item: Apolice): Promise<Apolice> {
        const apolice = await prisma.apolice.update({
            where: {
                ID: parseInt(id)
            },
            data: {
                APOLICE_TIPO_ID: item.apolice_tipo_id,
                APOLICE_ESTADO_ID: item.apolice_estado_id,
                APOLICE_FRACIONAMENTO_ID: item.apolice_fracionamento_id,
                NUMERO: item.numero,
                TOMADOR_ID: item.tomador_id
            }
        });
        if (apolice) {
            return item;
        }
        throw Error("Ocorreu um erro ao actualizar a apólice")
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

