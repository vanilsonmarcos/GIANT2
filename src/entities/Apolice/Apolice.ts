import Pessoa from "../Pessoa/Pessoa";
import ApoliceEstado from "./ApoliceEstado";
import ApoliceFracionamento from "./ApoliceFracionamento";
interface Apolice {
    id?: Number,
    apolice_tipo_id: Number,
    numero: String,
    tomador: Pessoa,
    apolice_fracionamento: ApoliceFracionamento,
    apolice_estado: ApoliceEstado
}

export default Apolice;