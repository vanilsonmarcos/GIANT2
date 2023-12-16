import { Service, Inject } from "typedi";
import VeiculoRepository from "../repositories/mysql/VeiculoRepository";
import { veiculo } from "@prisma/client";
import CustomError from "../utils/CustomError";

@Service()
class VeiculoService {
 
    @Inject(()=> VeiculoRepository)
    private repo: VeiculoRepository;

    constructor () {}

    async getAll(): Promise<veiculo[]> {
        return this.repo.getAll();         
    }

    async getByID(id: string): Promise<veiculo>{
        return this.repo.getByID(id);
    }

    async exists(id: string) {
        const item = await this.getByID(id);
        return item !== null && item !== undefined;
    }

    async getByMatricola(matricola: string): Promise<veiculo> {
        return this.repo.getVeiculoByMatricula(matricola);
    }

    async criar(veiculo: veiculo): Promise<veiculo> {
        return this.repo.create(veiculo);
    } 

    async actualizar(id: string, veiculo: veiculo) {
        return this.repo.update(id, veiculo);
    }

    async remover(id: string): Promise<boolean> {
        // check if object exist
        if(!await this.exists(id)) {
            throw new CustomError("O Veículo que deseja remover não existe!");
        }
        return this.repo.delete(id);
    }   
    async getAllVeiculoCategoria() {
        return this.repo.getAllVeiculoCategoria();
    }
} 

export default VeiculoService;