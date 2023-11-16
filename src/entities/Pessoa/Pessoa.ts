import PessoaTipo from './PessoaTipo';
import PessoaEndereco from './PessoaEndereco';
interface Pessoa {
    ID?: number
    NOME: string,
    PESSOA_TIPO: PessoaTipo,
    DATA_NASCIMENTO: string,
    SEXO: string,
    NBI?: string,
    NIF: string,
    ESTADO_CIVIL: string,
    ENDERECO?: PessoaEndereco
}

export default Pessoa;