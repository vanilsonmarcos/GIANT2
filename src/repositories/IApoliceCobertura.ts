import ApoliceCobertura from "../entities/Apolice/ApoliceCobertura";

interface IApoliceCoberturas<T extends ApoliceCobertura> {
    getAllApoliceCoberturaByApoliceID(id: String): Promise<T[]|Boolean>;
    setApoliceCoberturaByApoliceID():Promise<Boolean>;
}

export default IApoliceCoberturas;