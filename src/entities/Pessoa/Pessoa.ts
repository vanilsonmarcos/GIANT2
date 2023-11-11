import PessoaTipo from './PessoaTipo';
import PessoaEndereco from './PessoaEndereco';
interface Pessoa {
    id?: number
    nome: string,
    pessoa_tipo: PessoaTipo,
    data_nascimento: string,
    sexo: string,
    nbi?: string,
    nif: string,
    estado_civil: string
    endereco?: PessoaEndereco
}

export default Pessoa;