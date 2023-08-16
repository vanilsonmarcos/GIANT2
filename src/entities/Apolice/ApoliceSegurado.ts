import Pessoa from "../Pessoa/Pessoa";

interface ApoliceSegurado {
    id?: Number,
    nome: String,
    pessoa_tipo_id:Number,
    data_nascimento: String,
    sexo: String,
    nbi: String,
    nif: String,
    estado_civil: String
}  

export default ApoliceSegurado;