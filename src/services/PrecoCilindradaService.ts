import { Service, Inject } from "typedi";
import PrecoCilindradaRepository from "../repositories/mysql/PrecoCilindradaRepository";
import IGenericRepository from "../repositories/IGenericRepository";
import PrecoCilindrada from "../entities/PrecoCilindrada";

@Service()
class PrecoCilindradaService {
    @Inject(() => PrecoCilindradaRepository)
    private repo: IGenericRepository<PrecoCilindrada>;

    constructor(){}
    
    async getAll(): Promise<PrecoCilindrada[]> {
        return this.repo.getAll();         
    }

    async getByID(id: string): Promise<PrecoCilindrada>{
        return this.repo.getByID(id);
    }

    async criar(veiculo: PrecoCilindrada): Promise<PrecoCilindrada> {
        return this.repo.create(veiculo);
    } 

    async actualizar(id: string, precoCilindrada: PrecoCilindrada) {
        return this.repo.update(id, precoCilindrada);
    }

    async remover(id: string): Promise<Boolean> {
        // check if object exist
        return this.repo.delete(id);
    }
}

export default PrecoCilindradaService;