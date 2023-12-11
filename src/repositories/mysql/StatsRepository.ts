import { Service } from "typedi";
import ClienteStats from "../../entities/ClienteStats";
import ApoliceStats from "../../entities/ApoliceStats";
import AllStats from "../../entities/AllStats";
import prisma from "../PrismaClient";
import { JsDateToYYYMMDD } from "../../utils/helper";

@Service()
class StatsRepository {

    async getAllCliente(): Promise<ClienteStats> {
        // const TOTAL_CLIENTES = await prisma.apolice.count({
        //     where: {},
        //     distinct: ['TOMADOR_ID'],
        // }) ?? 0;


        // const TOTAL_SEGURADOS = await prisma.adenda_segurado.count({
        //     where: {},
        //     distinct: ['SEGURADO_ID']
        // }) ?? 0;

        const TOTAL_CLIENTES = 0;

        const TOTAL_SEGURADOS = 0;

        const TOTAL_UTENTES = await prisma.pessoa.count() ?? 0;


        const clientStats: ClienteStats = {
            TOTAL_CLIENTES: TOTAL_CLIENTES,
            TOTAL_SEGURADOS: TOTAL_SEGURADOS,
            TOTAL_UTENTES: TOTAL_UTENTES
        }

        return clientStats

    }

    async getAllClienteByInterval(start: Date, end: Date): Promise<ClienteStats> {
        const CLIENTES:any = await prisma.$queryRaw`
        SELECT COUNT(DISTINCT TOMADOR_ID) AS CLIENTES
        FROM apolice
        WHERE DATA_INSERCAO BETWEEN ${JsDateToYYYMMDD(start)} AND ${JsDateToYYYMMDD(end)};
      `;
        const TOTAL_CLIENTES = Number(CLIENTES[0].CLIENTES?? 0); 

        const SEGURADOS:any = await prisma.$queryRaw`
        SELECT COUNT(DISTINCT SEGURADO_ID) AS SEGURADOS
        FROM adenda_segurado
        WHERE DATA_INSERCAO BETWEEN ${JsDateToYYYMMDD(start)} AND ${JsDateToYYYMMDD(end)};
        `;
        const TOTAL_SEGURADOS = Number(SEGURADOS[0].SEGURADOS?? 0); 


        const UTENTES:any = await prisma.$queryRaw`
        SELECT COUNT(ID) AS UTENTES
        FROM pessoa
        WHERE DATA_INSERCAO BETWEEN ${JsDateToYYYMMDD(start)} AND ${JsDateToYYYMMDD(end)};
        `;
        const TOTAL_UTENTES = Number(UTENTES[0].UTENTES?? 0); 

        const clientStats: ClienteStats = {
            TOTAL_CLIENTES: TOTAL_CLIENTES,
            TOTAL_SEGURADOS: TOTAL_SEGURADOS,
            TOTAL_UTENTES: TOTAL_UTENTES
        }

        return clientStats;
    }


    async getAllApolice(): Promise<ApoliceStats> {
        const TOTAL_APOLICES = await prisma.apolice.count() ?? 0;

        const TOTAL_APOLICES_ADJUDICADAS = await prisma.apolice.count({
            where: {
                APOLICE_ESTADO_ID: 5
            }
        }) ?? 0;

        const TOTAL_APOLICES_EXPIRADAS = await prisma.apolice.count({
            where: {
                APOLICE_ESTADO_ID: 4
            }
        }) ?? 0;

        const TOTAL_APOLICES_CANCELADAS = await prisma.apolice.count({
            where: {
                APOLICE_ESTADO_ID: 3
            }
        }) ?? 0;

        const apoliceStats: ApoliceStats = {
            APOLICES_EMITIDAS: TOTAL_APOLICES,
            APOLICES_CANCELADAS: TOTAL_APOLICES_CANCELADAS,
            APOLICE_ADJUDICADAS: TOTAL_APOLICES_ADJUDICADAS,
            APOLICES_EXPIRADAS: TOTAL_APOLICES_EXPIRADAS,
        }

        return apoliceStats;
    }

    async getAllApoliceByInterval(start: Date, end: Date): Promise<ApoliceStats> {
        const APOLICES: any = await prisma.$queryRaw`
        SELECT COUNT(ID) AS APOLICES
        FROM apolice
        WHERE DATA_INSERCAO BETWEEN ${JsDateToYYYMMDD(start)} AND ${JsDateToYYYMMDD(end)};
      `;
   
        const TOTAL_APOLICES = Number(APOLICES[0].APOLICES?? 0); 

        const APOLICES_ADJUDICADAS:any = await prisma.$queryRaw`
        SELECT COUNT(ID) AS APOLICES_ADJUDICADAS
        FROM apolice
        WHERE APOLICE_ESTADO_ID=5
        AND DATA_INSERCAO BETWEEN ${JsDateToYYYMMDD(start)} AND ${JsDateToYYYMMDD(end)};
        `;
        const TOTAL_APOLICES_ADJUDICADAS = Number(APOLICES_ADJUDICADAS[0].APOLICES_ADJUDICADAS?? 0); 

        const APOLICES_EXPIRADAS: any = await prisma.$queryRaw`
        SELECT COUNT(ID) AS APOLICES_EXPIRADAS
        FROM apolice
        WHERE APOLICE_ESTADO_ID=4
        AND DATA_INSERCAO BETWEEN ${JsDateToYYYMMDD(start)} AND ${JsDateToYYYMMDD(end)};
        `;

        const TOTAL_APOLICES_EXPIRADAS = Number(APOLICES_EXPIRADAS[0].APOLICES_EXPIRADAS?? 0); 


        const APOLICES_CANCELADAS: any = await prisma.$queryRaw`
        SELECT COUNT(ID) AS APOLICES_CANCELADAS
        FROM apolice
        WHERE APOLICE_ESTADO_ID=3
        AND DATA_INSERCAO BETWEEN ${JsDateToYYYMMDD(start)} AND ${JsDateToYYYMMDD(end)};
        `;
        const TOTAL_APOLICES_CANCELADAS = Number(APOLICES_CANCELADAS[0].APOLICES_CANCELADAS?? 0); 

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

    async getAllByInterval(start: Date, end: Date): Promise<AllStats> {
        return {
            APOLICE_STATS: await this.getAllApoliceByInterval(start, end),
             CLIENT_STATS: await this.getAllClienteByInterval(start, end),
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