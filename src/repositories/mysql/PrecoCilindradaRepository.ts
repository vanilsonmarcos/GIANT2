import { preco_cilindrada } from './../../../node_modules/.prisma/client/index.d';
import { Service } from "typedi";
import IGenericRepository from "../IGenericRepository";
import prisma from '../PrismaClient';
@Service()
class PrecoCilindradaRepository implements IGenericRepository<preco_cilindrada> {

    async getAll(): Promise<preco_cilindrada[]> {
        const precoCilindradas = await prisma.preco_cilindrada.findMany({
            include: {
                veiculo_categoria: true
            },
            take: 100
        });
        return precoCilindradas;
    }

    async getByID(id: string): Promise<preco_cilindrada> {
        const preco_cilindrada = await prisma.preco_cilindrada.findUnique({
            where: {
                ID: parseInt(id)
            },
            include: {
                veiculo_categoria: true
            }
        });

        if (preco_cilindrada === null) {
            throw Error("Não foi possivel encontrar os dados do Preco Cilindrada");
        }
        return preco_cilindrada;
    }

    async create(item: preco_cilindrada): Promise<preco_cilindrada> {
        const preco_cilindrada = await prisma.preco_cilindrada.create({
            data: {
                NOME: item.NOME,
                LOTACAO: item.LOTACAO,
                VEICULO_CATEGORIA_ID: item.VEICULO_CATEGORIA_ID,
                PREMIO_TRIMESTRAL: item.PREMIO_TRIMESTRAL,
                PREMIO_SEMESTRAL: item.PREMIO_SEMESTRAL,
                PREMIO_ANUAL: item.PREMIO_ANUAL,
                PESO_KG: item.PESO_KG,
                CILINDRADA_MIN: item.CILINDRADA_MIN,
                CILINDRADA_MAX: item.CILINDRADA_MAX
            }
        });
        if (preco_cilindrada === null) {
            throw Error("Não foi possivel inserir os dados do Preco Cilindrada");
        }
        return preco_cilindrada;
    }

    async update(id: string, item: preco_cilindrada): Promise<preco_cilindrada> {
        const preco_cilindrada = await prisma.preco_cilindrada.update({
            where: {
                ID: parseInt(id)
            },
            data: {
                NOME: item.NOME,
                LOTACAO: item.LOTACAO,
                VEICULO_CATEGORIA_ID: item.VEICULO_CATEGORIA_ID,
                PREMIO_TRIMESTRAL: item.PREMIO_TRIMESTRAL,
                PREMIO_SEMESTRAL: item.PREMIO_SEMESTRAL,
                PREMIO_ANUAL: item.PREMIO_ANUAL,
                PESO_KG: item.PESO_KG,
                CILINDRADA_MIN: item.CILINDRADA_MIN,
                CILINDRADA_MAX: item.CILINDRADA_MAX
            }
        });
        if (preco_cilindrada === null) {
            throw Error("Não foi possivel actualizar os Dados do Preco Cilindrada");
        }
        return item;
    }

    async delete(id: string): Promise<boolean> {
        const preco_cilindrada = await prisma.preco_cilindrada.delete({
            where: {
                ID: parseInt(id)
            }
        });
        if (preco_cilindrada !== null) {
            return true;
        }
        return false;
    }
}

export default PrecoCilindradaRepository;