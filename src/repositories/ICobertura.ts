import Cobertura from "../entities/Cobertura";

interface ICobertura {
    isCoberturaBase(id: string): Promise<boolean>;
}

export default ICobertura;