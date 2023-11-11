import { apolice_fracionamento } from "@prisma/client";
import IGenericRepository from "../IGenericRepository";
import prisma from "../PrismaClient";

class ApoliceFracionamentoRepository  implements IGenericRepository<apolice_fracionamento>{
    async getAll(): Promise<apolice_fracionamento[]> {
        const apolice_fracionamento = await prisma.apolice_fracionamento.findMany({
            orderBy: {
                DATA_INSERCAO: 'asc'
            },
        });
        if (apolice_fracionamento === null) {
            throw Error("Ocorreu um erro ao carregar os fracionamentos")
        }
        return apolice_fracionamento;
    }

    async getByID(id: string): Promise<apolice_fracionamento> {
        const apolice_fracionamento = await prisma.apolice_fracionamento.findUnique({
            where: {
                ID: parseInt(id)
            }
        });

        if (apolice_fracionamento === null) {
            throw Error("Ocorreu um erro ao carregar o fracionamento")
        }
        return apolice_fracionamento;
    }

    async create(item: apolice_fracionamento): Promise<apolice_fracionamento> {
        const apolice_fracionamento = await prisma.apolice_fracionamento.create({
            data: {
                FRACIONADO_EM: item.FRACIONADO_EM,
                NO_FRACOES: item.NO_FRACOES
            }
        });
        if (apolice_fracionamento === null) {
            throw Error("Ocorreu um erro ao carregar o fracionamento")
        }
        return apolice_fracionamento;
    }

    async update(id: string, item: apolice_fracionamento): Promise<apolice_fracionamento> {
        const apolice_fracionamento = await prisma.apolice_fracionamento.update({
            where: {
                ID: parseInt(id)
            },
            data: {
                FRACIONADO_EM: item.FRACIONADO_EM,
                NO_FRACOES: item.NO_FRACOES
            }
        });
        if (apolice_fracionamento === null) {
            throw Error("Ocorreu um erro ao actualizar o fracionamento")
        }
        return apolice_fracionamento;
    }

    async delete(id: string): Promise<boolean> {
        const apolice_fracionamento = await prisma.apolice_fracionamento.delete({
            where: {
                ID: parseInt(id)
            }
        });
        if (apolice_fracionamento !== null) {
            return true;
        }
        return false;
    }

}

export default ApoliceFracionamentoRepository;