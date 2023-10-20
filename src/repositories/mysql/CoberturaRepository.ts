import { RowDataPacket } from "mysql2";
import Cobertura from "../../entities/Cobertura";
import ICobertura from "../ICobertura";
import IGenericRepository from "../IGenericRepository";
import { query } from "./mysql";
import { generateCobertura } from "../../entities/Apolice/Helper";
import { Service } from "typedi";
import prisma from "../PrismaClient";

@Service()
class CoberturaRepository implements IGenericRepository<Cobertura>, ICobertura{

    async isCoberturaBase(id: string): Promise<Boolean> {
        const isCoberturaBase = await prisma.cobertura.findUnique({
            where: {
                ID: parseInt(id)
            },
            select: {
                COBERTURA_BASE: true
            }
        });
        if (isCoberturaBase=== null) {
            return false
        }
        return isCoberturaBase?.COBERTURA_BASE;
    }

    async getAll(): Promise<Cobertura[]> {
        const cs = await prisma.cobertura.findMany({
            include: {
                apolice_tipo: true
            },
            take: 100
        })
        let coberturas: Cobertura[] = [];
        if (cs !== null) {
            for (const item of cs) {
                const cobertura: Cobertura = generateCobertura(item);
                coberturas.push(cobertura);
            }
        }
        return coberturas;
    }
    async getByID(id: string): Promise<Cobertura> {
        const cobertura = await prisma.cobertura.findUnique({
            where: {
            ID: parseInt(id)
            },
            include: {
                apolice_tipo: true
            }
        })

        if (cobertura === null) {
            throw Error("Não foram encontrados os dados da Cobertura");
        }
        return generateCobertura(cobertura);
    }

    async create(item: Cobertura): Promise<Cobertura> {
        const cobertura = await prisma.cobertura.create({
            data: {
                APOLICE_TIPO_ID: item.apolice_tipo.id,
                COBERTURA_BASE: item.cobertura_base,
                SIGLA:item.sigla,
                NOME:item.nome,
                DESCRICAO:item.descricao,
                VALOR_PAGAR:item.valor_pagar,
                DESCONTO: item.desconto
            }
        });

        if (cobertura === null) {
            throw Error("Ocorreu um erro ao criar a Cobertura");
            
        }
        item.id = cobertura.ID;
        return item;
    }

    async update(id: string, item: Cobertura): Promise<Cobertura> {
        const cobertura = await prisma.cobertura.update({
            where: {
                ID: parseInt(id)
            },
            data: {
                COBERTURA_BASE: item.cobertura_base ,
                SIGLA:  item.sigla,
                NOME:  item.nome,
                DESCRICAO:  item.descricao,
                VALOR_PAGAR:  item.valor_pagar,
                DESCONTO:  item.desconto
            }
        });


        if (cobertura === null) {
            throw Error("Ocorreu um erro ao actualizar od dados da Cobertura")
        }
        return item;
    }

    async delete(id: string): Promise<Boolean> {
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