import Pessoa from "../Pessoa/Pessoa";
import ApoliceCobertura from "./ApoliceCobertura";
import ApoliceEstado from "./ApoliceEstado";
import ApoliceFracionamento from "./ApoliceFracionamento";
import ApolicePagamento from "./ApolicePagamento";
import ApoliceSegurado from "./ApoliceSegurado";
import ApoliceTipo from "./ApoliceTipo";

interface Apolice {
    id?: Number,
    apolice_tipo_id: Number,
    numero: String,
    segurado_id: Number,
    tomador?: Pessoa[],
    data_inicio: String,
    data_fim: String,
    apolice_fracionamento_id: Number,
    apolice_estado_id: Number,
    valor_premio: Number,
    inserido_por?: Number,
    actualizado_por?: Number,
    removido_por?: Number,
}

export default Apolice;


