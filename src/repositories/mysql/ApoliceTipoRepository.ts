import { Service } from "typedi";
import IApoliceTipo from "../IApoliceTipo";
import {  apolice_tipo } from "@prisma/client";
import prisma from "../PrismaClient";

@Service()
class ApoliceTipoRepository implements IApoliceTipo<apolice_tipo> {

    async getApoliceTipoByApoliceID(id: string): Promise<apolice_tipo> {
        const apolice_tipo = await prisma.apolice.findUnique({
            where: {
                ID: parseInt(id)
            },
        }).apolice_tipo();
        if (apolice_tipo === null) {
            throw Error("Ocorreu um erro ao actualizar od dados do tipo de apólice");
        }
        return apolice_tipo;
    }

    async getAll(): Promise<apolice_tipo[]> {
        const apolice_tipo = await prisma.apolice_tipo.findMany({
            take: 100
        });
        if (apolice_tipo === null) {
            throw Error("Ocorreu um erro ao actualizar od dados do tipo de apólice");
        }
        return apolice_tipo;
    }

    async getByID(id: string): Promise<apolice_tipo> {
        const apolice_tipo = await prisma.apolice_tipo.findUnique({
            where: {
                ID: parseInt(id)
            }
        });
        if (apolice_tipo === null) {
            throw Error("Ocorreu um erro ao actualizar od dados do tipo de apólice");
        }
        return apolice_tipo;
    }

    async create(item: apolice_tipo): Promise<apolice_tipo> {
        const apolice_tipo = await prisma.apolice_tipo.create({
            data: {
                NOME: item.NOME,
                SIGLA: item.SIGLA,
                DESCRICAO: item.DESCRICAO,

            }
        });
        if (apolice_tipo === null) {
            throw Error("Ocorreu um erro ao actualizar od dados do tipo de apólice");
        }
        return apolice_tipo;
    }

    async update(id: string, item: apolice_tipo): Promise<apolice_tipo> {
        const apolice_tipo = await prisma.apolice_tipo.update({
            where: {
                ID: parseInt(id)
            },
            data: {
                NOME: item.NOME,
                SIGLA: item.SIGLA,
                DESCRICAO: item.DESCRICAO
            }
        });
        if (apolice_tipo === null) {
            throw Error("Ocorreu um erro ao actualizar od dados do tipo de apólice");
        }
        return apolice_tipo;

    }

    async delete(id: string): Promise<boolean> {
        const apolice_tipo = await prisma.apolice_tipo.delete({
            where: {
                ID: parseInt(id)
            }
        });
        if (apolice_tipo !== null) {
            return true;
        }
        return false;
    }
}

export default ApoliceTipoRepository;