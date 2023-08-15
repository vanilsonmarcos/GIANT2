import ApoliceTomador from "../entities/Apolice/ApoliceTomador";

interface IApoliceTomador <T extends ApoliceTomador> {
    getAllTomadorByApoliceID(id: String): Promise<T[] | Boolean>;
    removeTomadorByApoliceID(id:String, tomador_id:String): Promise<Boolean>;
    AddTomadorByApoliceID(id: String, tomador:ApoliceTomador):Promise<Boolean>;
}

export default IApoliceTomador;