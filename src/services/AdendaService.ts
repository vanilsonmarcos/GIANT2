import { Service, Inject } from "typedi";
import { adenda } from "@prisma/client";
import AdendaRepository from "../repositories/mysql/AdendaRepository";
import { validateAdendaDates } from "../utils/helper";
@Service()
class AdendaService {

    @Inject(() => AdendaRepository)
    private repo: AdendaRepository;

    constructor() { }

    async getAll(): Promise<adenda[]> {
        return this.repo.getAll();
    }

    async getByID(id: string): Promise<adenda> {
        return this.repo.getByID(id);
    }
    async criar(item: adenda): Promise<adenda> {
        validateAdendaDates(item.DATA_INICIO, item.DATA_FIM);
        return this.repo.create(item);
    }

    async actualizar(id: string, item: adenda): Promise<adenda> {
        validateAdendaDates(item.DATA_INICIO, item.DATA_FIM);
        return this.repo.update(id, item);
    }

    async remover(id: string): Promise<boolean> {
        // check if object exist
        return this.repo.delete(id);
    }

    async calculateAdendaPremio(id: string): Promise<adenda> {
        const adenda = await this.repo.getByID(id);
        adenda.PREMIO = await this.repo.sumAdendaPremio(id);
        const updateAdenda = await this.repo.update(id, adenda)
    
        return updateAdenda;
    }
}

export default AdendaService;