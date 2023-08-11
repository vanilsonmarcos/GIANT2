import PessoaEndereco from "./PessoaEndereco";
import PessoaTipo from "./PessoaTipo";

interface Pessoa {
    id?: Number
    nome: String,
    pessoa_tipo: PessoaTipo,
    data_nascimento: Date,
    sexo: String,
    nbi: String,
    nif: String,
    estado_civil: String
    endereco: PessoaEndereco
}

export default Pessoa;