import { Service } from "typedi";
import prisma from "../PrismaClient";
import { Decimal } from "@prisma/client/runtime/library";
import { adenda, pessoa, veiculo } from "@prisma/client";
import IGenericRepository from "../IGenericRepository";
import IAdendaItemSegurado from "../IAdendaItemSegurado";
import { calculatePremio, isArrayEmpty } from "../../utils/helper";
import CustomError from "../../utils/CustomError";
import IAdendaCalculate from "../IAdendaCalculate";
import IAdendaSegurado from "../IAdendaSegurado";

@Service()
class AdendaRepository implements IGenericRepository<adenda>, IAdendaSegurado<pessoa>, IAdendaItemSegurado<veiculo>, IAdendaCalculate<Decimal>{


    async getAllSeguradoByApoliceID(apoliceID: string): Promise<pessoa[]> {
        const adenda = await prisma.adenda.findFirst({
            where: {
                APOLICE_ID: parseInt(apoliceID)
            }
        });

        const pessoas = await prisma.pessoa.findMany({
            include: {
                adenda_segurado: {
                    where: {
                        ADENDA_ID: adenda?.ID
                    }
                }
            }
        });
        
        if (isArrayEmpty(pessoas) || pessoas === null || pessoas === undefined) {
            throw new CustomError("Ocorreu um erro ao carregar os segurados da apólice");
        }

        return pessoas;

    }

    async getAllSeguradoByAdendaID(adendaID: string): Promise<pessoa[]> {
        const segurados = await prisma.pessoa.findMany({
            where: {
                adenda_segurado: {
                  every: {
                    ADENDA_ID: parseInt(adendaID)
                  }
                }
            },
            include: {
                pessoa_endereco: true,
                pessoa_tipo: true
            },
        });
        return segurados;
    }

    async removeSeguradoByApoliceID(apoliceID: string, seguradoID: string): Promise<pessoa> {

        const adenda = await prisma.adenda.findFirst({
            where: {
                APOLICE_ID: parseInt(apoliceID)
            }
        });


        if (adenda === null || adenda === undefined) {
            throw new CustomError("Ocorreu um error carragar a adenda correspondente a apólice");
        }

        const segurando = await prisma.pessoa.findUnique({
            where: {
                ID: parseInt(seguradoID)
            }
        });

        if (segurando === null || segurando === undefined) {
            throw new CustomError("Ocorreu um error carregar o segurado correspondente a apólice");
        }

        const deletedSegurados = await prisma.adenda_segurado.deleteMany({
            where: {
                ADENDA_ID: adenda.ID,
                SEGURADO_ID: parseInt(seguradoID)
            }
        });

        if (deletedSegurados === null || deletedSegurados === undefined || deletedSegurados.count !== 1) {
            throw new CustomError("Ocorreu um error ao remover o segurado correspondente a apólice");
        }

        return segurando;
    }

    async removeSeguradoByAdendaID(adendaID: string, seguradoID: string): Promise<pessoa> {
        const segurado = await prisma.adenda_segurado.delete({
            where: {
                SEGURADO_ID_ADENDA_ID: {
                    SEGURADO_ID: parseInt(seguradoID),
                    ADENDA_ID: parseInt(adendaID)
                }
            },
        }).pessoa();
        if (segurado === null || segurado === undefined) {
            throw new CustomError("Ocorreu um error ao remover o segurado da adenda");
        }
        return segurado;
    }

    async addSeguradosByAdendaID(adendaID: string, segurados: pessoa[]): Promise<pessoa[]> {
        const savedSegurados = await Promise.all(
            segurados.map((segurado) => {
                return prisma.adenda_segurado.create({
                    data: {
                        ADENDA_ID: parseInt(adendaID),
                        SEGURADO_ID: segurado.ID
                    }
                }).pessoa();
            })
        );

        if (savedSegurados === null || savedSegurados === undefined) {
            throw new CustomError("Não Possivel associar os segurados a adenda");
        }
        return segurados;
    }

    async addSeguradosByApoliceID(apoliceID: string, segurados: pessoa[]): Promise<pessoa[]> {
        const adenda = await prisma.adenda.findFirst({
            where: {
                APOLICE_ID: parseInt(apoliceID)
            },
            orderBy: {
                DATA_INSERCAO: 'desc'
            }
        });
        if (adenda === null || adenda === undefined) {
            throw new CustomError("Ocorreu um erro ao carregar a adenda mais actualizada da apólice");
        }

        const loadedSegurados = await prisma.pessoa.findMany({
            include: {
                adenda_segurado: {
                    where: {
                        ADENDA_ID: adenda.ID
                    }
                }
            }
        });
        
        if (isArrayEmpty(loadedSegurados) || loadedSegurados === null || loadedSegurados === undefined) {
            throw new CustomError("Ocorreu um erro ao carregar os segurados da apólice");
        }

        const savedSegurados = await Promise.all(
            loadedSegurados.map((segurado) => {
                return prisma.adenda_segurado.create({
                    data: {
                        SEGURADO_ID: segurado.ID,
                        ADENDA_ID: adenda.ID
                        
                    }
                });
            })
        );

        if (isArrayEmpty(savedSegurados) || savedSegurados === null || savedSegurados === undefined) {
            throw new CustomError("Ocorreu um erro ao adicionar os segurados a apólice");
        }

        if(savedSegurados.length !== loadedSegurados.length) {
            throw new CustomError("Ocorreu um erro ao adicionar algumas segurados a a apólice");
        }

        return loadedSegurados;
    }

    async removeSeguradosByAdendaID(adendaID: string, segurados: pessoa[]): Promise<pessoa[]> {
        const deletedSegurados = await Promise.all(
            segurados.map((segurado) => {
                return prisma.adenda_segurado.delete({
                    where: {
                        SEGURADO_ID_ADENDA_ID: {
                            SEGURADO_ID: segurado.ID,
                            ADENDA_ID: parseInt(adendaID)
                        }
                    }
                });
            })
        );
        if (deletedSegurados === null || deletedSegurados === undefined) {
            throw new CustomError("Ocorreu um error ao remover o segurado da adenda");
        }
        return segurados;
    }

    async removeSeguradosByApoliceID(apoliceID: string, segurados: pessoa[]): Promise<pessoa[]> {
        const adenda = await prisma.adenda.findFirst({
            where: {
                APOLICE_ID: parseInt(apoliceID)
            }
        });

        if (adenda === null || adenda === undefined) {
            throw new CustomError("Ocorreu um error carregar a adenda correspondente a apólice");
        }


        const newSegurandos = await prisma.pessoa.findMany({
            where: {
                ID: {
                    in: segurados.map((segurado) => segurado.ID)
                }
            }
        });

        if (newSegurandos === null || newSegurandos === undefined) {
            throw new CustomError("Ocorreu um error carregar os segurados correspondentes a apólice");
        }

        const deletedSegurados = await prisma.adenda_segurado.deleteMany({
            where: {
                ADENDA_ID: adenda.ID,
                SEGURADO_ID: {
                    in: newSegurandos.map((segurado) => segurado.ID)
                }
            }
        });

        if (deletedSegurados === null || deletedSegurados === undefined || deletedSegurados.count !== 1) {
            throw new CustomError("Ocorreu um error ao remover os segurados correspondentes a apólice");
        }

        if(deletedSegurados.count!== segurados.length) {
            throw new CustomError("Não foram removidos todos os segurados correspondentes a apólice");
        }

        return newSegurandos;
    }

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

        if (sumPremio === null || sumPremio == undefined) {
            throw new CustomError("Não foi possivel calcular O prémio da adenda.");
        }

       return sumPremio;
    }

    async getAllItemSeguradoByAdenda(adenda: adenda): Promise<veiculo[]> {
        const veiculos = await prisma.veiculo.findMany({
            include: {
                adenda_item_segurado: {
                    where: {
                        ADENDA_ID: adenda.ID
                    }
                },
            },
        });

        if (veiculos === null || veiculos === undefined) {
            throw new CustomError("Não foi encontrado nenhum item segurado nesta adenda");
        }
        return veiculos;
    }

    async addAllItemSeguradoByAdenda(adenda: adenda, items: veiculo[]): Promise<veiculo[]> {

        // get fracionamento based in adenda
        // Get fracionamento based on apolice
        if(adenda.APOLICE_ID === null || adenda.APOLICE_ID === undefined){
            throw new CustomError("A adenda selecionada não está associada a uma apólice")
        }
        const apolice = await prisma.apolice.findUnique({
            where: {
               ID: adenda.APOLICE_ID
            },
            include: {
                apolice_fracionamento: true
            }
        });

        if(apolice === null || apolice === undefined){
            throw new CustomError("A apólice associada a está adenda não existe")
        }

        const fracionamento = await prisma.apolice_fracionamento.findUnique({
            where: {
                ID: apolice.APOLICE_FRACIONAMENTO_ID
            }
        })

        if(fracionamento === null || fracionamento === undefined) {
            throw new CustomError("Não foi encontrado o tipo de fracionamento da apólice/adenda selecionada");
        }

        const veiculos = await Promise.all(
            items.map(async (item) => {
                const adenda_item_segurado = await prisma.adenda_item_segurado.create({
                    data: {
                        ADENDA_ID: adenda.ID,
                        ITEM_ID: item.ID,
                        APOLICE_TIPO_ID: apolice.APOLICE_TIPO_ID,
                        PREMIO: await calculatePremio(adenda, item, fracionamento)
                    }
                });
                return item;
            })
        );

        const addedItems = veiculos.filter(item => item !== null) as veiculo[];
        if (addedItems === null) {
            throw new Error("Ocorreu um error ao adicionar os items segurados da adenda");
        }
        return addedItems;
    }

    async removeAllItemSeguradoByAdenda(adenda: adenda, items: veiculo[]): Promise<veiculo[]> {
        const veiculos = await Promise.all(
            items.map((item) => {
                return prisma.adenda_item_segurado.delete({
                    where: {
                        ADENDA_ID_ITEM_ID: {
                            ADENDA_ID: adenda.ID,
                            ITEM_ID: item.ID,
                        }
                    }
                }).veiculo();
            })
        );
        const addedItems = veiculos.filter(item => item !== null) as veiculo[];

        if (addedItems === null || addedItems === undefined) {
            throw new CustomError("Não possivel remover os items segurados associados a adenda");
        }
        return addedItems;
    }

    async addItemSeguradoByAdenda(adenda: adenda, item: veiculo): Promise<veiculo> {

        // get fracionamento based in adenda
        // Get fracionamento based on apolice
        if(adenda.APOLICE_ID === null || adenda.APOLICE_ID === undefined){
            throw new CustomError("A adenda selecionada não está associada a uma apólice")
        }
        const apolice = await prisma.apolice.findUnique({
            where: {
               ID: adenda.APOLICE_ID
            },
            include: {
                apolice_fracionamento: true
            }
        });

        if(apolice === null || apolice === undefined){
            throw new CustomError("A apólice associada a está adenda não existe")
        }

        const fracionamento = await prisma.apolice_fracionamento.findUnique({
            where: {
                ID: apolice.APOLICE_FRACIONAMENTO_ID
            }
        })

        if(fracionamento === null || fracionamento === undefined) {
            throw new CustomError("Não foi encontrado o tipo de fracionamento da apólice/adenda selecionada");
        }
        const savedItem = await prisma.adenda_item_segurado.create({
            data: {
                ADENDA_ID: adenda.ID,
                ITEM_ID: item.ID,
                PREMIO: await calculatePremio(adenda, item, fracionamento)
            }
        }).veiculo();

        if (savedItem === null) {
            throw new Error("Ocorreu um error ao adicionar o item segurado à adenda");
        }
        return savedItem;
    }

    async removeItemSeguradoByAdenda(adenda: adenda, item: veiculo): Promise<veiculo> {
        const veiculo = await prisma.adenda_item_segurado.delete({
            where: {
                ADENDA_ID_ITEM_ID: {
                    ADENDA_ID: adenda.ID,
                    ITEM_ID: item.ID
                }
            },
            include: {
                veiculo: true
            }
        }).veiculo();

        if (veiculo === null || veiculo === undefined) {
            throw new CustomError("Não foi encontrado o item segurado para esta adenda");
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
        if (isArrayEmpty(veiculos) || veiculos === null || veiculos === undefined) {
            throw new Error("Não foi encontrado nenhum item segurado nesta apólice");
        }
        return veiculos;
    }

    async getAll(): Promise<adenda[]> {
        const adendas = await prisma.adenda.findMany({
            take: 100,
        });
        if (adendas === null || adendas === undefined) {
            throw new CustomError("Não foram encontradas adendas registadas no sistema"); 
        }
        return adendas;
    }

    async getByID(id: string): Promise<adenda> {
        const adenda = await prisma.adenda.findUnique({
            where: {
                ID: parseInt(id)
            }
        });

        if (adenda === null || adenda === undefined) {
            throw new CustomError("Não Foi encontrado a adenda com o ID referenciado");
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

        if (adenda === null || adenda === undefined) {
            throw new CustomError("Ocorreu um erro ao criar a adenda");
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

        if (adenda === null || adenda === undefined) {
            throw new CustomError("Ocorreu um erro ao criar apólice");
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

