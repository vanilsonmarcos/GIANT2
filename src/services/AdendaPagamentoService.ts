import { Service, Inject } from "typedi";
import AdendaPagamentoRepository from "../repositories/mysql/AdendaPagamentoRepository";
import { adenda_pagamento } from "@prisma/client";
import IGenericRepository from "../repositories/IGenericRepository";
import CustomError from "../utils/CustomError";

@Service()
class AdendaPagamentoService {
    @Inject(()=> AdendaPagamentoRepository)
    private repo: AdendaPagamentoRepository;

    constructor () {}

    async getAll(): Promise<adenda_pagamento[]> {
        return this.repo.getAll();         
    }

    async getByID(id: string): Promise<adenda_pagamento> {
        return this.repo.getByID(id);
    }

    async exists(id:string): Promise<boolean> {
        const item = await this.getByID(id);
        return item !== null && item !== undefined;
    }

    async getByAdendaID(id: string): Promise<adenda_pagamento[]> {
        return this.repo.getByAdendaID(id);
    }

    async criar(item: adenda_pagamento): Promise<adenda_pagamento> {
        return this.repo.create(item);
    } 

    async actualizar(id: string, item: adenda_pagamento): Promise<adenda_pagamento> {
        return this.repo.update(id, item);
    }

    async remover(id: string): Promise<boolean> {
        // check if object exist
        if(!await this.exists(id)) {
            throw new CustomError("O Pagamento da Adenda que deseja remover não existe!");
        }
        return this.repo.delete(id);
    }

}

export default AdendaPagamentoService