import ApoliceItemSegurado from "../entities/Apolice/ApoliceItemSegurado";

interface IApoliceItemSegurado<T extends ApoliceItemSegurado> {
    getAllItemsByApoliceID(id: String): Promise<T[] | Boolean>;
    removeItemByApoliceID(id:String, item:ApoliceItemSegurado): Promise<Boolean>;
    AddItemByApoliceID(id: String, item:ApoliceItemSegurado): Promise<Boolean>;
}

export default IApoliceItemSegurado;