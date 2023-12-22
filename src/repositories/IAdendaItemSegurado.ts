import { adenda } from "@prisma/client";

interface IAdendaItemSegurado<T> {
    getAllItemSeguradoByAdenda(adenda: adenda): Promise<T[]>;

    addAllItemSeguradoByAdenda(adenda: adenda, items: T[]): Promise<T[]>;

    removeAllItemSeguradoByAdenda(adenda: adenda, items: T[]): Promise<T[]>;

    addItemSeguradoByAdenda(adenda: adenda, item: T): Promise<T>;

    removeItemSeguradoByAdenda(adenda: adenda, item: T): Promise<T>;
}

export default IAdendaItemSegurado;