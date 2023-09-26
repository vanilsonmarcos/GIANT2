import Pessoa from "../Pessoa/Pessoa";
import ApoliceEstado from "./ApoliceEstado";
import ApoliceFracionamento from "./ApoliceFracionamento";
import ApoliceTipo from "./ApoliceTipo";
interface Apolice {
    id?: Number,
    apolice_tipo: ApoliceTipo,
    tomador: Pessoa,
    apolice_fracionamento: ApoliceFracionamento,
    apolice_estado: ApoliceEstado
}

export default Apolice;