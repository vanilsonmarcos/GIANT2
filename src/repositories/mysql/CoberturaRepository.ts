import { Service } from "typedi";
import ICobertura from "../ICobertura";
import IGenericRepository from "../IGenericRepository";
import prisma from "../PrismaClient";
import { cobertura } from "@prisma/client";

@Service()
class CoberturaRepository implements IGenericRepository<cobertura>, ICobertura {

    async isCoberturaBase(id: string): Promise<boolean> {
        const isCoberturaBase = await prisma.cobertura.findUnique({
            where: {
                ID: parseInt(id)
            },
            select: {
                COBERTURA_BASE: true
            }
        });
        if (isCoberturaBase === null) {
            return false
        }
        return isCoberturaBase?.COBERTURA_BASE;
    }

    async getAll(): Promise<cobertura[]> {
        const coberturas = await prisma.cobertura.findMany({
            include: {
                apolice_tipo: true
            },
            take: 100
        });
        return coberturas;
    }

    async getByID(id: string): Promise<cobertura> {
        const cobertura = await prisma.cobertura.findUnique({
            where: {
                ID: parseInt(id)
            },
            include: {
                apolice_tipo: true
            }
        });

        if (cobertura === null) {
            throw Error("Não foram encontrados os dados da Cobertura");
        }
        return cobertura;
    }

    async create(item: cobertura): Promise<cobertura> {
        const cobertura = await prisma.cobertura.create({
            data: {
                APOLICE_TIPO_ID: item.APOLICE_TIPO_ID,
                COBERTURA_BASE: item.COBERTURA_BASE,
                SIGLA: item.SIGLA,
                NOME: item.NOME,
                DESCRICAO: item.DESCRICAO,
                VALOR_A_PAGAR: item.VALOR_A_PAGAR,
                DESCONTO: item.DESCONTO
            }
        });

        if (cobertura === null) {
            throw Error("Ocorreu um erro ao criar a Cobertura");
        }
        return cobertura;
    }

    async update(id: string, item: cobertura): Promise<cobertura> {
        const cobertura = await prisma.cobertura.update({
            where: {
                ID: parseInt(id)
            },
            data: {
                COBERTURA_BASE: item.COBERTURA_BASE,
                SIGLA: item.SIGLA,
                NOME: item.NOME,
                DESCRICAO: item.DESCRICAO,
                VALOR_A_PAGAR: item.VALOR_A_PAGAR,
                DESCONTO: item.DESCONTO
            }
        });
        if (cobertura === null) {
            throw Error("Ocorreu um erro ao actualizar od dados da Cobertura")
        }
        return cobertura;
    }

    async delete(id: string): Promise<boolean> {
        const cobertura = await prisma.cobertura.delete({
            where: {
                ID: parseInt(id)
            }
        });
        if (cobertura !== null) {
            return true;
        }
        return false;
    }
}

export default CoberturaRepository;