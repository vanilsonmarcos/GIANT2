import ApoliceItemSegurado from "../entities/Apolice/ApoliceItemSegurado";

interface IApoliceItemSegurado<T extends ApoliceItemSegurado> {
    getAllItemsByApoliceID(id: String): Promise<T[] | Boolean>;
    removeItemsByApoliceID(id:String, items:ApoliceItemSegurado[]): Promise<Boolean>;
    AddItemsByApoliceID(id: String, items:ApoliceItemSegurado[]):Promise<Boolean>;

}

export default IApoliceItemSegurado;