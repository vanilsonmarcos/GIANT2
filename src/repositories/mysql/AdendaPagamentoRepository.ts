import { adenda_pagamento } from "@prisma/client";
import IGenericRepository from "../IGenericRepository";
import prisma from "../PrismaClient";
import { Service } from "typedi";
import CustomError from "../../utils/CustomError";
import { isArrayEmpty } from "../../utils/helper";


@Service()
class AdendaPagamentoRepository implements IGenericRepository<adenda_pagamento> {
    
    async getAll(): Promise<adenda_pagamento[]> {
        const adenda_pagamentos = await prisma.adenda_pagamento.findMany({
            orderBy: {
                DATA_INSERCAO: 'asc'
            },
        });

        if (isArrayEmpty(adenda_pagamentos) || adenda_pagamentos === null || adenda_pagamentos === undefined) {
            throw new CustomError("Não foram encontrados pagamentos registados.");
        }
        return adenda_pagamentos;
    }

    async getByID(id: string): Promise<adenda_pagamento> {
        const adenda_pagamento = await prisma.adenda_pagamento.findUnique({
            where: {
                ID: parseInt(id)
            }
        });

        if (adenda_pagamento === null || adenda_pagamento === undefined) {
            throw new CustomError("Não foi encontrado o pagamento com o ID referenciado.");
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

        if (adenda_pagamento === null || adenda_pagamento === undefined) {
            throw new CustomError("Ocorreu um erro ao adicionar o pagamento a adenda.");
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

        if (adenda_pagamento === null || adenda_pagamento === undefined) {
            throw new CustomError("Ocorreu um erro ao actualizar a adenda ou acta");
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