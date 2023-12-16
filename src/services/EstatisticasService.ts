import { Inject, Service } from "typedi";
import StatsRepository from "../repositories/mysql/StatsRepository";
import AllStats from "../entities/AllStats";
import ApoliceStats from "../entities/ApoliceStats";
import ClienteStats from "../entities/ClienteStats";
import { isValidInterval } from "../utils/helper";
import CustomError from "../utils/CustomError";

@Service()
class EstatisticasService {
    @Inject(() => StatsRepository)
    private repo: StatsRepository;

    constructor() { }

    async getAll(): Promise<AllStats> {
        return this.repo.getAll();
    }

    async getAllByInterval(start: Date, end: Date): Promise<AllStats> {
        // Validate dates and intervals 
        if(!isValidInterval(start, end)) {
            throw new CustomError("O intervalo a data de inicio é maior que a data do fim");
        };
        return this.repo.getAllByInterval(start, end);
    }

    async getAllApolice(): Promise<ApoliceStats> {
        return this.repo.getAllApolice();
    }

    async getAllApoliceByInterval(start: Date, end: Date): Promise<ApoliceStats> {
        // Validate dates and intervals 
        if(isValidInterval(start, end)) {
            throw new CustomError("O intervalo a data de inicio é maior que a data do fim");
        };
        return this.repo.getAllApoliceByInterval(start, end);
    }

    async getAllCliente(): Promise<ClienteStats> {
        return this.repo.getAllCliente();
    }

    async getAllClienteByInterval(start: Date, end: Date): Promise<ClienteStats> {
        // Validate dates and intervals 
        if(isValidInterval(start, end)) {
            throw new CustomError("O intervalo a data de inicio é maior que a data do fim");
        };
        return this.repo.getAllClienteByInterval(start, end);
    }
}

export default EstatisticasService;

