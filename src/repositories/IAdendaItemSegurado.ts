interface IAdendaItemSegurado<T> {
    getAllItemSeguradoByAdendaID(adendaID: string): Promise<T[]>;
    getallItemsSeguradoByApoliceID(apoliceID: string): Promise<T[]>
}

export default IAdendaItemSegurado;