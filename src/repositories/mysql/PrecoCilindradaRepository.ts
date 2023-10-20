import { preco_cilindrada } from './../../../node_modules/.prisma/client/index.d';
import { Service } from "typedi";
import PrecoCilindrada  from '../../entities/PrecoCilindrada';
import IGenericRepository from "../IGenericRepository";
import generatePrecoCilindrada from './../../entities/Helper';
import prisma from '../PrismaClient';

@Service()
class PrecoCilindradaRepository implements IGenericRepository<PrecoCilindrada> {

    async getAll(): Promise<PrecoCilindrada[]> {
        const p_cilindrada = await prisma.preco_cilindrada.findMany({
            include: {
              veiculo_categoria: true  
            },
            take: 100
        });

        let precoCilindradas:PrecoCilindrada[] = [];
        if (p_cilindrada) {
            for (const item of p_cilindrada) {
                const precoCilindrada:PrecoCilindrada = generatePrecoCilindrada(item);
                precoCilindradas.push(precoCilindrada);
            }
        }
        return precoCilindradas;
    }

    async getByID(id: string): Promise<PrecoCilindrada> {
        const preco_cilindrada = await prisma.preco_cilindrada.findUnique({
            where: {
                ID: parseInt(id)
            }
        });
        
        if (preco_cilindrada === null) {
            throw Error("Não foi possivel encontrar os dados do Preco Cilindrada");
        }
        return generatePrecoCilindrada(preco_cilindrada);
    }

    async create(item: PrecoCilindrada): Promise<PrecoCilindrada> {
        const preco_cilindrada = await prisma.preco_cilindrada.create({
            data: {
                NOME: item.nome,
                LOTACAO: item.lotacao,
                VEICULO_CATEGORIA_ID: item.veiculo_categoria_id, 
                PREMIO_TRIMESTRAL: item.premio_trimestral, 
                PREMIO_SEMESTRAL: item.premio_semestral, 
                PREMIO_ANUAL: item.premio_anual, 
                PESO_KG: item.peso_kg, 
                CILINDRADA_MIN: item.cilindrada_min, 
                CILINDRADA_MAX: item.cilindrada_max
            }
        });
        if (preco_cilindrada === null) {
            throw Error("Não foi possivel inserir os dados do Preco Cilindrada");
        }
        item.id = preco_cilindrada.ID;
        return item;
    }

    async update(id: string, item: PrecoCilindrada): Promise<PrecoCilindrada> {
        const preco_cilindrada = await prisma.preco_cilindrada.update({
            where: {
                ID: parseInt(id)
            },
            data: {
                NOME: item.nome,
                LOTACAO: item.lotacao,
                VEICULO_CATEGORIA_ID: item.veiculo_categoria_id, 
                PREMIO_TRIMESTRAL: item.premio_trimestral, 
                PREMIO_SEMESTRAL: item.premio_semestral, 
                PREMIO_ANUAL: item.premio_anual, 
                PESO_KG: item.peso_kg, 
                CILINDRADA_MIN: item.cilindrada_min, 
                CILINDRADA_MAX: item.cilindrada_max
            }
        });
        if (preco_cilindrada === null) {
            throw Error("Não foi possivel actualizar os Dados do Preco Cilindrada");
        }
        return item;
    }

    async delete(id: string): Promise<Boolean> {
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