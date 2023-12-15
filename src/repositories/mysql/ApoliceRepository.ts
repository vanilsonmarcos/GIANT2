import { Service } from "typedi";
import IGenericRepository from "../IGenericRepository";
import prisma from '../PrismaClient';
import { adenda, apolice, apolice_estado, pessoa } from "@prisma/client";
import IApoliceAdenda from "../IApoliceAdenda";
import IAdendaSegurado from "../IAdendaSegurado";
import IApoliceEstado from "../IApoliceEstado";
import CustomError from "../../utils/CustomError";
import { isArrayEmpty } from "../../utils/helper";
@Service()
class ApoliceRepository implements
    IGenericRepository<apolice>, IApoliceAdenda<adenda>, IAdendaSegurado<pessoa>, IApoliceEstado<apolice_estado> {
    
    async getAllApoliceEstado(): Promise<apolice_estado[]> {
        const apolice_estados =  await prisma.apolice_estado.findMany({
            take: 100,
        });
        if (isArrayEmpty(apolice_estados) || apolice_estados === null || apolice_estados === undefined) {
            throw new CustomError("Ocorreu um erro ao carregar os estados das apólices");
        }
        return apolice_estados;  
    }

    async getApoliceEstado(apoliceID: string): Promise<apolice_estado> {
        const apolice_estado = await prisma.apolice.findUnique({
            where: {
                ID: parseInt(apoliceID)
            }
        }).apolice_estado();
        if (apolice_estado === null || apolice_estado === undefined) {
            throw new CustomError("Ocorreu um erro ao gerar carregar o estado da apólice");
        }
        return apolice_estado;
    }

    async setApoliceEstado(apoliceID: string, apoliceEstado: apolice_estado): Promise<apolice_estado> {
        const apolice_estado = await prisma.apolice.update({
            where: {
                ID: parseInt(apoliceID)
            },
            data: {
                APOLICE_ESTADO_ID: apoliceEstado.ID
            }
        }).apolice_estado();
        return apolice_estado;
    }

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
            include: {
                adenda_segurado: {
                    where: {
                        ADENDA_ID: parseInt(adendaID)
                    }
                },
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

    async getAllAdendaByApoliceID(apoliceID: string): Promise<adenda[]> {
        const adendas = await prisma.adenda.findMany({
            where: {
                APOLICE_ID: parseInt(apoliceID)
            },
            orderBy: {
                DATA_INSERCAO:'desc'
            },
            take: 100,
        });

        if (isArrayEmpty(adendas) || adendas === null || adendas === undefined) {
            throw new CustomError("Esta apolice não possui adendas");
        }
        return adendas;
    }

    async getFirstAdenda(apoliceID: string): Promise<adenda> {
        const adenda = await prisma.adenda.findFirst({
            orderBy: {
                DATA_INSERCAO: 'asc'
            },
            where: {
                APOLICE_ID: parseInt(apoliceID)
            }
        });

        if (adenda === null || adenda === undefined) {
            throw new CustomError("Esta apolice não possui adendas");
        }
        return adenda;
    }

    async getLatestAdenda(apoliceID: string): Promise<adenda> {
        const adenda = await prisma.adenda.findFirst({
            orderBy: {
                DATA_INSERCAO: 'desc'
            },
            where: {
                APOLICE_ID: parseInt(apoliceID)
            }
        });

        if (adenda === null || adenda === undefined) {
            throw new CustomError("Esta apolice não possui adenda");
        }
        return adenda;
    }

    async getAll(): Promise<apolice[]> {
        const apolices = await prisma.apolice.findMany({
            take: 100,
        });
        if (isArrayEmpty(apolices) || apolices === null || apolices === undefined) {
            throw new CustomError("Esta apolice não possui adenda");
        }

        return apolices;
    }

    async getByID(id: string): Promise<apolice> {
        const apolice = await prisma.apolice.findUnique({
            where: {
                ID: parseInt(id)
            }
        });

        if (apolice === null || apolice === undefined) {
            throw new CustomError("Não Foi encontrado apólice com o ID referenciado");
        }
        return apolice;
    }

    async create(item: apolice): Promise<apolice> {
        const apolice = await prisma.apolice.create({
            data: {
                APOLICE_TIPO_ID: item.APOLICE_TIPO_ID,
                APOLICE_ESTADO_ID: item.APOLICE_ESTADO_ID,
                APOLICE_FRACIONAMENTO_ID: item.APOLICE_FRACIONAMENTO_ID,
                NUMERO: item.NUMERO,
                TOMADOR_ID: item.TOMADOR_ID
            },
            include: {
                apolice_tipo: true,
                apolice_estado: true,
                adenda: true,
            }
        });

        if (apolice === null || apolice === undefined) {
            throw new CustomError("Ocorreu um erro ao criar apólice");
        }
        return apolice;
    }

    async update(id: string, item: apolice): Promise<apolice> {
        const apolice = await prisma.apolice.update({
            where: {
                ID: parseInt(id)
            },
            data: {
                APOLICE_TIPO_ID: item.APOLICE_TIPO_ID,
                APOLICE_ESTADO_ID: item.APOLICE_ESTADO_ID,
                APOLICE_FRACIONAMENTO_ID: item.APOLICE_FRACIONAMENTO_ID,
                NUMERO: item.NUMERO,
                TOMADOR_ID: item.TOMADOR_ID
            }
        });
        if (apolice === null || apolice === undefined) {
            throw new CustomError("Ocorreu um erro ao actualizar a apólice")
        }
        return apolice;
    }

    async delete(id: string): Promise<boolean> {
        const apolice = await prisma.apolice.delete({
            where: {
                ID: parseInt(id)
            }
        });
        if (apolice !== null) {
            return true;
        }
        return false;
    }
}

export default ApoliceRepository;

