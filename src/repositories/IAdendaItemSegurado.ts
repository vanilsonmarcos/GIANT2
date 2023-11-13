interface IAdendaItemSegurado<T> {
    getAllItemSeguradoByAdendaID(adendaID: string): Promise<T[]>;

    addAllItemSeguradoByAdendaID(adendaID: string, items: T[]): Promise<T[]>;

    removeAllItemSeguradoByAdendaID(adendaID: string, items: T[]): Promise<T[]>;

    addItemSeguradoByAdendaID(adendaID: string, item: T): Promise<T>;

    removeItemSeguradoByAdendaID(adendaID: string, item: T): Promise<T>;
}

export default IAdendaItemSegurado;