import { Decimal } from '@prisma/client/runtime/library';
import { Service, Inject } from "typedi";
import { adenda, pessoa, veiculo } from "@prisma/client";
import AdendaRepository from "../repositories/mysql/AdendaRepository";
import { validateAdendaDates } from "../utils/helper";
import ApoliceRepository from "../repositories/mysql/ApoliceRepository";
import CustomError from "../utils/CustomError";
import prisma from '../repositories/PrismaClient';
@Service()
class AdendaService {
 
    @Inject(() => AdendaRepository)
    private adenda_repo: AdendaRepository;

    @Inject(() => ApoliceRepository)
    private apolice_repo: ApoliceRepository;

    constructor() { }

    async getAll(): Promise<adenda[]> {
        return this.adenda_repo.getAll();
    }

    async getByID(id: string): Promise<adenda> {
        return this.adenda_repo.getByID(id);
    }

    async exists(id: string): Promise<boolean> {
        const item = await this.getByID(id);
        return item !== null && item !== undefined;
    }

    async getByApoliceID(id: string):Promise<adenda[]> {
        return this.apolice_repo.getAllAdendaByApoliceID(id);
    }

    async getVeiculosByAdendaID(adendaID: string): Promise<veiculo[]> {
        const adenda = await this.adenda_repo.getByID(adendaID);
        return this.adenda_repo.getAllItemSeguradoByAdenda(adenda);
    }
     
    async getSeguradosByAdendaID(id: string): Promise<pessoa[]> {
        return this.adenda_repo.getAllSeguradoByAdendaID(id);
    }
   
    async criar(item: adenda): Promise<adenda> {
        validateAdendaDates(item.DATA_INICIO, item.DATA_FIM);
        return this.adenda_repo.create(item);
    }

    async actualizar(id: string, item: adenda): Promise<adenda> {
        validateAdendaDates(item.DATA_INICIO, item.DATA_FIM);
        return this.adenda_repo.update(id, item);
    }

    async remover(id: string): Promise<boolean> {
        // check if object exist
        if(!await this.exists(id)) {
            throw new CustomError("A adenda que deseja remover não existe!");
        }
        return this.adenda_repo.delete(id);
    }

    async calculateAdendaPremio(id: string): Promise<adenda> {
        const adenda = await this.adenda_repo.getByID(id);
        adenda.PREMIO = await this.adenda_repo.sumAdendaPremio(id);
        const updateAdenda = await this.adenda_repo.update(id, adenda)
        return updateAdenda;
    }

    async adicionarItemsSegurado(adenda: adenda, items: veiculo[]): Promise<veiculo[]> {
        return this.adenda_repo.addAllItemSeguradoByAdenda(adenda, items);
    }

    async adicionarSegurados(id: string, segurados:pessoa[]): Promise<pessoa[]>{
        return this.adenda_repo.addSeguradosByAdendaID(id, segurados);
    }
}

export default AdendaService;