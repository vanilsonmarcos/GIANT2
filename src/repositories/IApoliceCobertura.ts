import ApoliceCobertura from "../entities/Apolice/ApoliceCobertura";

interface IApoliceCobertura<T extends ApoliceCobertura> {
    getAllApoliceCoberturaByApoliceID(id: String): Promise<T[]|Boolean>;
    getAllApoliceCoberturaByApoliceTypeID(id: String):Promise<T[]|Boolean>;
    addApoliceCoberturaByApoliceID(id:String ,ApoliceCobertura:ApoliceCobertura):Promise<Boolean>;
}

export default IApoliceCobertura;