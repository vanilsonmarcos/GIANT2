import ApoliceSegurado from "../entities/Apolice/ApoliceSegurado";

interface IApoliceSegurado<T extends ApoliceSegurado>{
    getSeguradoByApoliceID(id: String): Promise<T | Boolean>;
    //removeSeguradoByApoliceID(id:String, tomador_id:String): Promise<Boolean>;
    AddSeguradoByApoliceID(id: String, segurado:ApoliceSegurado):Promise<Boolean>;
}

export default IApoliceSegurado;