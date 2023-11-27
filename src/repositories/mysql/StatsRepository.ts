
import { Service } from "typedi";
import ClienteStats from "../../entities/ClienteStats";
import ApoliceStats from "../../entities/ApoliceStats";
import AllStats from "../../entities/AllStats";
import prisma from "../PrismaClient";

@Service()
class StatsRepository {
    async getAllCliente(): Promise<ClienteStats> {
        const TOTAL_CLIENTES = await prisma.apolice.count({
            where: {},
            distinct: ['TOMADOR_ID'],
        }) ?? 0;


        const TOTAL_SEGURADOS = await prisma.adenda_segurado.count({
            where: {},
            distinct: ['SEGURADO_ID']
        }) ?? 0;

        const TOTAL_UTENTES = await prisma.pessoa.count() ?? 0;


        const clientStats: ClienteStats = {
            TOTAL_CLIENTES: TOTAL_CLIENTES,
            TOTAL_SEGURADOS: TOTAL_SEGURADOS,
            TOTAL_UTENTES: TOTAL_UTENTES
        }

        return clientStats

    }

    async getAllApolice(): Promise<ApoliceStats> {
        const TOTAL_APOLICES = await prisma.apolice.count() ?? 0;

        const TOTAL_APOLICES_ADJUDICADAS = await prisma.apolice.count({
            where: {
                APOLICE_ESTADO_ID: 5
            }
        })?? 0;

        const TOTAL_APOLICES_EXPIRADAS = await prisma.apolice.count({
            where: {
                APOLICE_ESTADO_ID: 4
            }
        })?? 0;

        const TOTAL_APOLICES_CANCELADAS = await prisma.apolice.count({
            where: {
                APOLICE_ESTADO_ID: 3
            }
        })?? 0;

        const apoliceStats: ApoliceStats = {
            APOLICES_EMITIDAS: TOTAL_APOLICES,
            APOLICES_CANCELADAS: TOTAL_APOLICES_CANCELADAS,
            APOLICE_ADJUDICADAS: TOTAL_APOLICES_ADJUDICADAS,
            APOLICES_EXPIRADAS: TOTAL_APOLICES_EXPIRADAS,
        }

        return apoliceStats;
    }

    async getAll(): Promise<AllStats> {
        return {
            APOLICE_STATS: await this.getAllApolice(),
            CLIENT_STATS: await this.getAllCliente(),
            SINISTROS_STATS: {
                TOTAL_SINISTRO_ACIDENTE_TRABALHO: 0,
                TOTAL_SINISTRO_AUTOMOVEL: 0,
                TOTAL_SINISTRO_SAUDE: 0,
                TOTAL_SINISTROS: 0
            }
        }
    }
}

export default StatsRepository;