import { Service, Inject } from "typedi";
import IGenericRepository from "../repositories/IGenericRepository";
import VeiculoRepository from "../repositories/mysql/VeiculoRepository";
import Veiculo from "../entities/Apolice/Veiculo/Veiculo";
import IVeiculoReposiroty from "../repositories/IVeiculoRepository";

@Service()
class VeiculoService {
    @Inject(()=> VeiculoRepository)
    private repo: IVeiculoReposiroty<Veiculo>;

    constructor () {}

    async getAll(): Promise<Veiculo[]> {
        return await this.repo.getAll();         
    }

    async getByID(id: String): Promise<Veiculo>{
        return await this.repo.getByID(id);
    }

    async getByMatricola(matricola: String): Promise<Veiculo> {
        return await this.repo.getVeiculoByMatricula(matricola);
    }

    async criar(veiculo: Veiculo): Promise<Veiculo> {
        return await this.repo.create(veiculo);
    } 

    async actualizar(id: String, veiculo: Veiculo) {
        return await this.repo.update(id, veiculo);
    }

    async remover(id: String): Promise<Boolean> {
        // check if object exist
        return await this.repo.delete(id);
    }
} 

export default VeiculoService;