import ApoliceEstado from "../entities/Apolice/ApoliceEstado";

interface IApoliceEstado<T extends ApoliceEstado> {
    getApoliceEstadoByApoliceID(id:String):Promise<T | Boolean>;
    setApoliceEstadoByApoliceID(id: String):Promise<T | Boolean>;
}

export default IApoliceEstado;