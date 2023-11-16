import { apolice_fracionamento } from "@prisma/client";
import IGenericRepository from "../IGenericRepository";
import prisma from "../PrismaClient";
import { Service } from "typedi";
import { isArrayEmpty } from "../../utils/helper";
import CustomError from "../../utils/CustomError";

@Service()
class ApoliceFracionamentoRepository  implements IGenericRepository<apolice_fracionamento>{
    async getAll(): Promise<apolice_fracionamento[]> {
        const apolice_fracionamentos = await prisma.apolice_fracionamento.findMany({
            orderBy: {
                DATA_INSERCAO: 'asc'
            },
        });
        if (isArrayEmpty(apolice_fracionamentos) || apolice_fracionamentos === null || apolice_fracionamentos === undefined) {
            throw new CustomError("Ocorreu um erro ao carregar os fracionamentos")
        }
        return apolice_fracionamentos;
    }

    async getByID(id: string): Promise<apolice_fracionamento> {
        const apolice_fracionamento = await prisma.apolice_fracionamento.findUnique({
            where: {
                ID: parseInt(id)
            }
        });

        if (apolice_fracionamento === null || apolice_fracionamento === undefined) {
            throw new CustomError("Ocorreu um erro ao carregar o fracionamento")
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
        if (apolice_fracionamento === null || apolice_fracionamento === undefined) {
            throw new CustomError("Ocorreu um erro ao carregar o fracionamento")
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
        if (apolice_fracionamento === null || apolice_fracionamento === undefined) {
            throw new CustomError("Ocorreu um erro ao actualizar o fracionamento")
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