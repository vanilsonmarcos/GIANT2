import { adenda, veiculo } from "@prisma/client";
import IGenericRepository from "../IGenericRepository";
import prisma from "../PrismaClient";
import IAdendaItemSegurado from "../IAdendaItemSegurado";
import { Service } from "typedi";
import { calculatePremio } from "../../utils/helper";
import CustomError from "../../utils/CustomError";
import IAdendaCalculate from "../IAdendaCalculate";
import { Decimal } from "@prisma/client/runtime/library";

@Service()
class AdendaRepository implements IGenericRepository<adenda>, IAdendaItemSegurado<veiculo>, IAdendaCalculate<Decimal>{

    async sumAdendaPremio(adendaID: string): Promise<Decimal> {
        const premios = await prisma.adenda_item_segurado.aggregate({
            _sum: {
                PREMIO: true
            },
            where: {
                ADENDA_ID: parseInt(adendaID)
            }
        });
        const sumPremio = premios._sum.PREMIO;

        if ( sumPremio === null) {
            throw new CustomError("Não foi possivel selecionar e somar os premios dos items");
        }

       return sumPremio;
    }

    async getAllItemSeguradoByAdendaID(adendaID: string): Promise<veiculo[]> {
        const veiculos = await prisma.veiculo.findMany({
            include: {
                adenda_item_segurado: {
                    where: {
                        ADENDA_ID: parseInt(adendaID)
                    }
                },
            },
        });

        if (veiculos === null) {
            throw new CustomError("Não foi encontrado nenhum item segurado nesta adenda");
        }
        return veiculos;
    }

    async addAllItemSeguradoByAdendaID(adendaID: string, items: veiculo[]): Promise<veiculo[]> {
        const fracionamento = await prisma.apolice.findFirst({
            include: {
                adenda:{
                    where: {
                        ID: parseInt(adendaID)
                    },
                },
                apolice_fracionamento: true
            }
        }).apolice_fracionamento();

        if(fracionamento=== null) {
            throw new CustomError("Não foi encontrado o tipo de fracionamento da apólice/adenda selecionada");
        }

        const veiculos = await Promise.all(
            items.map(async (item) => {
                return prisma.adenda_item_segurado.create({
                    data: {
                        ADENDA_ID: parseInt(adendaID),
                        ITEM_ID: item.ID,
                        PREMIO: await calculatePremio(adendaID, item, fracionamento)
                    }
                }).veiculo();
            })
        );

        const addedItems = veiculos.filter(item => item !== null) as veiculo[];
        if (addedItems === null) {
            throw new Error("Ocorreu um error ao adicionar os items segurados da adenda");
        }
        return addedItems;
    }

    async removeAllItemSeguradoByAdendaID(adendaID: string, items: veiculo[]): Promise<veiculo[]> {
        const veiculos = await Promise.all(
            items.map((item) => {
                return prisma.adenda_item_segurado.delete({
                    where: {
                        ADENDA_ID_ITEM_ID: {
                            ADENDA_ID: parseInt(adendaID),
                            ITEM_ID: item.ID,
                        }
                    }
                }).veiculo();
            })
        );
        const addedItems = veiculos.filter(item => item !== null) as veiculo[];

        if (addedItems === null) {
            throw new Error("Não possivel remover os items segurados associados a adenda: " + adendaID);
        }
        return addedItems;
    }

    async addItemSeguradoByAdendaID(adendaID: string, item: veiculo): Promise<veiculo> {
        const fracionamento = await prisma.apolice.findFirst({
            include: {
                adenda:{
                    where: {
                        ID: parseInt(adendaID)
                    },
                },
                apolice_fracionamento: true
            }
        }).apolice_fracionamento();

        if(fracionamento === null) {
            throw new CustomError("Não foi encontrado o tipo de fracionamento da apólice/adenda selecionada");
        }
      
        const savedItem = await prisma.adenda_item_segurado.create({
            data: {
                ADENDA_ID: parseInt(adendaID),
                ITEM_ID: item.ID,
                PREMIO: await calculatePremio(adendaID, item, fracionamento)
            }
        }).veiculo();

  
        if (savedItem === null) {
            throw new Error("Ocorreu um error ao adicionar os items segurados da adenda");
        }
        return savedItem;
    }

    async removeItemSeguradoByAdendaID(adendaID: string, item: veiculo): Promise<veiculo> {
        const veiculo = await prisma.adenda_item_segurado.delete({
            where: {
                ADENDA_ID_ITEM_ID: {
                    ADENDA_ID: parseInt(adendaID),
                    ITEM_ID: item.ID
                }
            },
            include: {
                veiculo: true
            }
        }).veiculo();
        if (veiculo === null) {
            throw new Error("Não foi encontrado o item segurado para esta adenda");
        }
        return veiculo;
    }

    async getallItemSeguradoByApoliceID(apoliceID: string): Promise<veiculo[]> {
        const veiculos = await prisma.veiculo.findMany({
            include: {
                adenda_item_segurado: {
                    include: {
                        adenda: {
                            where: {
                                APOLICE_ID: parseInt(apoliceID)
                            }
                        }
                    }
                },
            }
        });
        if (veiculos === null) {
            throw new Error("Não foi encontrado nenhum item segurado nesta apólice");
        }
        return veiculos;
    }

    async getAll(): Promise<adenda[]> {
        const adendas = await prisma.adenda.findMany({
            take: 100,
        });
        return adendas;
    }

    async getByID(id: string): Promise<adenda> {
        const adenda = await prisma.adenda.findUnique({
            where: {
                ID: parseInt(id)
            }
        });

        if (adenda === null) {
            throw new CustomError("Não Foi encontrado apólice com o ID referenciado");
        }
        return adenda;
    }

    async create(item: adenda): Promise<adenda>{
        const adenda = await prisma.adenda.create({
            data: {
                APOLICE_ID: item.APOLICE_ID,
                PREMIO: item.PREMIO,
                DATA_INICIO: new Date(item.DATA_INICIO),
                DATA_FIM: new Date(item.DATA_FIM),
            }
        });

        if (adenda === null) {
            throw new Error("Ocorreu um erro ao criar a adenda");
        }
        return adenda;
    }

    async update(id: string, item: adenda): Promise<adenda> {
        const adenda = await prisma.adenda.update({
            where: {
                ID: parseInt(id)
            },
            data: {
                APOLICE_ID: item.APOLICE_ID,
                PREMIO: item.PREMIO,
                DATA_INICIO: new Date(item.DATA_INICIO),
                DATA_FIM: new Date(item.DATA_FIM),
            }
        });

        if (adenda === null) {
            throw new Error("Ocorreu um erro ao criar apólice");
        }
        return adenda;
    }

    async delete(id: string): Promise<boolean> {
        const adenda = await prisma.adenda.delete({
            where: {
                ID: parseInt(id)
            }
        });
        if (adenda !== null) {
            return true;
        }
        return false;
    }
}

export default AdendaRepository;

