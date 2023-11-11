import { adenda_item_segurado } from "@prisma/client";
import IGenericRepository from "../IGenericRepository";
import prisma from "../PrismaClient";

class AdendaItemSeguradoRepository implements IGenericRepository<adenda_item_segurado>{
    async getAll(): Promise<adenda_item_segurado[]> {
        const adenda_item_segurados = await prisma.adenda_item_segurado.findMany({
            take:100
        });

        if (adenda_item_segurados === null) {
            throw Error("Ocorreu um erro ao actualizar a adenda item segurado ");
        }
        return adenda_item_segurados;
    }

    async getByID(id: string): Promise<adenda_item_segurado> {
        const adenda_item_segurado = await prisma.adenda_item_segurado.findUnique({
           where: {
            ID: parseInt(id)
           }
        });

        if (adenda_item_segurado === null) {
            throw Error("Ocorreu um erro ao carregar a a adenda item segurado ");
        }
        return adenda_item_segurado;
    }

    async create(item: adenda_item_segurado): Promise<adenda_item_segurado> {
        const adenda_item_segurado = await prisma.adenda_item_segurado.create({
            data: {
                ADENDA_ID: item.ADENDA_ID,
                APOLICE_TIPO_ID: item.APOLICE_TIPO_ID,
                ITEM_ID: item.ITEM_ID
            }
        });

        if (adenda_item_segurado === null) {
            throw Error("Ocorreu um erro ao actualizar a adenda item segurado ");
        }
        return adenda_item_segurado;
    }

    async update(id: string, item: adenda_item_segurado): Promise<adenda_item_segurado> {
        const adenda_item_segurado = await prisma.adenda_item_segurado.update({
            where: {
                ID: parseInt(id)
            },
            data: {
                ADENDA_ID: item.ADENDA_ID,
                APOLICE_TIPO_ID: item.APOLICE_TIPO_ID,
                ITEM_ID: item.ITEM_ID
            }
        });

        if (adenda_item_segurado === null) {
            throw Error("Ocorreu um erro ao actualizar a adenda item segurado ");
        }
        return adenda_item_segurado;
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

export default AdendaItemSeguradoRepository;