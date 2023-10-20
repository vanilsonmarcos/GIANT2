import { Service } from "typedi";
import IApoliceTipo from "../IApoliceTipo";
import ApoliceTipo from "../../entities/Apolice/ApoliceTipo";


@Service()
class ApoliceTipoRepository implements IApoliceTipo<ApoliceTipo> {
    getAll(): Promise<ApoliceTipo[]> {
        throw new Error("Method not implemented.");
    }
    getByID(id: string): Promise<ApoliceTipo> {
        throw new Error("Method not implemented.");
    }
    create(item: ApoliceTipo): Promise<ApoliceTipo> {
        throw new Error("Method not implemented.");
    }
    update(id: string, item: ApoliceTipo): Promise<ApoliceTipo> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    getApoliceTipoByApoliceID(id: String): Promise<ApoliceTipo> {
        throw new Error("Method not implemented.");
    }
}

export default ApoliceTipoRepository;