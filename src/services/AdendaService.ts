import { Service, Inject } from "typedi";
import { adenda, pessoa, veiculo } from "@prisma/client";
import AdendaRepository from "../repositories/mysql/AdendaRepository";
import { validateAdendaDates } from "../utils/helper";
import ApoliceRepository from "../repositories/mysql/ApoliceRepository";
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

    async getByApoliceID(id: string):Promise<adenda[]> {
        return this.apolice_repo.getAllAdendaByApoliceID(id);
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
        return this.adenda_repo.delete(id);
    }

    async calculateAdendaPremio(id: string): Promise<adenda> {
        const adenda = await this.adenda_repo.getByID(id);
        adenda.PREMIO = await this.adenda_repo.sumAdendaPremio(id);
        const updateAdenda = await this.adenda_repo.update(id, adenda)
    
        return updateAdenda;
    }

    async adicionarItemsSegurado(id: string, items: veiculo[]): Promise<veiculo[]> {
        return this.adenda_repo.addAllItemSeguradoByAdendaID(id, items);
    }

    async adicionarSegurados(id: string, segurados:pessoa[]): Promise<pessoa[]>{
        return this.apolice_repo.addSeguradosByAdendaID(id, segurados);
    }
}

export default AdendaService;