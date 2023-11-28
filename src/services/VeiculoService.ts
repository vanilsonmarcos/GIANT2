import { Service, Inject } from "typedi";
import VeiculoRepository from "../repositories/mysql/VeiculoRepository";
import { veiculo } from "@prisma/client";

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
        return this.repo.delete(id);
    }   
    async getAllVeiculoCategoria() {
        return this.repo.getAllVeiculoCategoria();
    }
} 

export default VeiculoService;