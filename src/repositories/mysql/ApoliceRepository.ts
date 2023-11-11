import { Service } from "typedi";
import IGenericRepository from "../IGenericRepository";
import prisma from '../PrismaClient';
import { adenda, apolice, apolice_estado, pessoa } from "@prisma/client";
import IApoliceAdenda from "../IApoliceAdenda";
import IApoliceSegurado from "../IApoliceSegurado";
import IApoliceEstado from "../IApoliceEstado";
@Service()
class ApoliceRepository implements
    IGenericRepository<apolice>, IApoliceAdenda<adenda>, IApoliceSegurado<pessoa>, IApoliceEstado<apolice_estado> {
        
    async getApoliceEstado(apoliceID: string): Promise<apolice_estado> {
        const apolice_estado = await prisma.apolice.findUnique({
            where: {
                ID: parseInt(apoliceID)
            }
        }).apolice_estado();
        if(apolice_estado === null) {
            throw new Error("Ocorreu um erro ao gerar carregar o estado da apólice");
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

    getAllSeguradoByApoliceID(apoliceID: string): Promise<pessoa[]> {
        throw new Error("Method not implemented.");
    }

    async getAllSeguradoByAdendaID(adendaID: string): Promise<pessoa[]> {
        const segurados = await prisma.pessoa.findMany({
            include: {
                adenda_segurado: {
                    where: {
                        ADENDA_ID: parseInt(adendaID)
                    }
                },
            },
        });

        return segurados;
    }

    removeSeguradoByApoliceID(apoliceID: string, seguradoID: string): Promise<pessoa> {
        throw new Error("Method not implemented.");
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
        if (segurado === null) {
            throw new Error("Ocorreu um error ao remover o segurado da adenda");
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

        if (savedSegurados === null) {
            throw new Error("Não Possivel associar os segurados a adenda");
        }
        return segurados;
    }

    addSeguradosByApoliceID(apoliceID: string, segurados: pessoa[]): Promise<pessoa[]> {
        throw new Error("Method not implemented.");
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
        if (deletedSegurados === null) {
            throw new Error("Ocorreu um error ao remover o segurado da adenda");
        }
        return segurados;
    }

    removeSeguradosByApoliceID(apoliceID: string, segurados: pessoa[]): Promise<pessoa[]> {
        throw new Error("Method not implemented.");
    }

    async getAllApoliceAdenda(apoliceID: string): Promise<adenda[]> {
        const adendas = await prisma.adenda.findMany({
            where: {
                APOLICE_ID: parseInt(apoliceID)
            },
            take: 100,
        });

        if (adendas === null) {
            throw Error("Esta apolice não possui adendas");
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

        if (adenda === null) {
            throw Error("Esta apolice não possui adendas");
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

        if (adenda === null) {
            throw Error("Esta apolice não possui adendas");
        }
        return adenda;
    }

    async getAll(): Promise<apolice[]> {
        const apolices = await prisma.apolice.findMany({
            take: 100,
        });
        return apolices;
    }

    async getByID(id: string): Promise<apolice> {
        const apolice = await prisma.apolice.findUnique({
            where: {
                ID: parseInt(id)
            }
        });

        if (apolice === null) {
            throw Error("Não Foi encontrado apólice com o ID referenciado");
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

        if (apolice === null) {
            throw Error("Ocorreu um erro ao criar apólice");
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
        if (apolice === null) {
            throw Error("Ocorreu um erro ao actualizar a apólice")
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

