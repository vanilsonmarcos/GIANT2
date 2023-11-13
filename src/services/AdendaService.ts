import { veiculo } from './../../node_modules/.prisma/client/index.d';
import { Service, Inject } from "typedi";
import { adenda } from "@prisma/client";
import AdendaRepository from "../repositories/mysql/AdendaRepository";
import { validateAdendaDates } from "../utils/helper";
import prisma from '../repositories/PrismaClient';

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

    async calculatePremio(id: string): Promise<adenda> {
        //get all items from the adenda
        // const items = await this.repo.getAllItemSeguradoByAdendaID(id);
        // await Promise.all(
        //      items.map((item) => {
        //         return prisma.adenda_item_segurado.create({
        //             data: {
        //                 ADENDA_ID: parseInt(id),
        //                 ITEM_ID: item.ID,
                        
        //             }
        //         }).veiculo();
        //     })
        // );

        // get the 
        throw new Error("Not yet implemented");
    }
}

export default AdendaService; 