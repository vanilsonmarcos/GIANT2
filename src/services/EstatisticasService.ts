import { Inject, Service } from "typedi";
import StatsRepository from "../repositories/mysql/StatsRepository";
import AllStats from "../entities/AllStats";
import ApoliceStats from "../entities/ApoliceStats";
import ClienteStats from "../entities/ClienteStats";

@Service()
class EstatisticasService {
    @Inject(() => StatsRepository)
    private repo: StatsRepository;

    constructor() { }
    
    getAll(): Promise<AllStats> {
        return this.repo.getAll();
    }

    getAllApolice(): Promise<ApoliceStats> {
        return this.repo.getAllApolice();
    }

    getAllCliente(): Promise<ClienteStats> {
        return this.repo.getAllCliente();
    }
}

export default EstatisticasService;

 