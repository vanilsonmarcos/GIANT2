import Cobertura from "../entities/Cobertura";

interface ICobertura {
    isCoberturaBase(id: String): Promise<Boolean>;
}


export default ICobertura;