import { adenda_pagamento } from "@prisma/client";
import IGenericRepository from "../IGenericRepository";
import prisma from "../PrismaClient";
import { Service } from "typedi";


@Service()
class AdendaPagamentoRepository implements IGenericRepository<adenda_pagamento> {
    
    async getAll(): Promise<adenda_pagamento[]> {
        const adenda_pagamento = await prisma.adenda_pagamento.findMany({
            orderBy: {
                DATA_INSERCAO: 'asc'
            },
        });

        if (adenda_pagamento === null) {
            throw Error("Ocorreu um erro ao criar a adenda ou acta");
        }
        return adenda_pagamento;
    }

    async getByID(id: string): Promise<adenda_pagamento> {
        const adenda_pagamento = await prisma.adenda_pagamento.findUnique({
            where: {
                ID: parseInt(id)
            }
        });

        if (adenda_pagamento === null) {
            throw Error("Ocorreu um erro ao criar a adenda ou acta");
        }
        return adenda_pagamento;
    }

    async create(item: adenda_pagamento): Promise<adenda_pagamento> {
        const adenda_pagamento = await prisma.adenda_pagamento.create({
            data: {
                ADENDA_ID: item.ADENDA_ID,
                DESCONTOS: item.DESCONTOS,
                VALOR_PAGO: item.VALOR_PAGO
            }
        });

        if (adenda_pagamento === null) {
            throw Error("Ocorreu um erro ao criar a adenda ou acta");
        }
        return adenda_pagamento;
    }

    async update(id: string, item: adenda_pagamento): Promise<adenda_pagamento> {
        const adenda_pagamento = await prisma.adenda_pagamento.update({
            where: {
                ID: parseInt(id)
            },
            data: {
                ADENDA_ID: item.ADENDA_ID,
                DESCONTOS: item.DESCONTOS,
                VALOR_PAGO: item.VALOR_PAGO
            }
        });

        if (adenda_pagamento === null) {
            throw Error("Ocorreu um erro ao actualizar a adenda ou acta");
        }
        return adenda_pagamento;
    }

    async delete(id: string): Promise<boolean> {
        const adenda_pagamento = await prisma.adenda_pagamento.delete({
            where: {
                ID: parseInt(id)
            }
        });
        if (adenda_pagamento !== null) {
            return true;
        }
        return false;
    }
}

export default AdendaPagamentoRepository;