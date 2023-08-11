import Pessoa from "../Pessoa/Pessoa";

interface Apolice {
    id?: Number,
    apolice_tipo_id: Number,
    numero: String,
    segurado: Pessoa,
    data_inicio: Date,
    data_fim: Date,
    apolice_fracionamento_id: Number,
    apolice_estado_id: Number,
    valor_premio: Number,
    inserido_por: Number,
    actualizado_por: Number,
    removido_por: Number,
}

export default Apolice;


