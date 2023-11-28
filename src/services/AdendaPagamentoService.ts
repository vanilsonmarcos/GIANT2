import { Service, Inject } from "typedi";
import AdendaPagamentoRepository from "../repositories/mysql/AdendaPagamentoRepository";
import { adenda_pagamento } from "@prisma/client";
import IGenericRepository from "../repositories/IGenericRepository";

@Service()
class AdendaPagamentoService {
    @Inject(()=> AdendaPagamentoRepository)
    private repo: AdendaPagamentoRepository;

    constructor () {}

    async getAll(): Promise<adenda_pagamento[]> {
        return this.repo.getAll();         
    }

    async getByID(id: string): Promise<adenda_pagamento>{
        return this.repo.getByID(id);
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
        return this.repo.delete(id);
    }

}

export default AdendaPagamentoService