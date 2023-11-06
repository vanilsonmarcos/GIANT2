import { Service, Inject } from "typedi";
import VeiculoRepository from "../repositories/mysql/VeiculoRepository";
import Veiculo from "../entities/Veiculo/Veiculo";
import IVeiculoReposiroty from "../repositories/IVeiculoRepository";

@Service()
class VeiculoService {
    @Inject(()=> VeiculoRepository)
    private repo: IVeiculoReposiroty<Veiculo>;

    constructor () {}

    async getAll(): Promise<Veiculo[]> {
        return this.repo.getAll();         
    }

    async getByID(id: string): Promise<Veiculo>{
        return this.repo.getByID(id);
    }

    async getByMatricola(matricola: string): Promise<Veiculo> {
        return this.repo.getVeiculoByMatricula(matricola);
    }

    async criar(veiculo: Veiculo): Promise<Veiculo> {
        return this.repo.create(veiculo);
    } 

    async actualizar(id: string, veiculo: Veiculo) {
        return this.repo.update(id, veiculo);
    }

    async remover(id: string): Promise<Boolean> {
        // check if object exist
        return this.repo.delete(id);
    }
} 

export default VeiculoService;