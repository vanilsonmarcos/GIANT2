import Pessoa from "./Pessoa";
import PessoaEndereco from "./PessoaEndereco";
import PessoaTipo from "./PessoaTipo";

function generatePessoa(data): Pessoa {
    let pessoaTipo:PessoaTipo;
    pessoaTipo.id = data.PESSOA_TIPO_ID;
    pessoaTipo.nome = data.PESSOA_TIPO_NOME;

    let pessoaEndereco: PessoaEndereco;
    pessoaEndereco.email = data.EMAIL;
    pessoaEndereco.telefone = data.TELEFONE;
    pessoaEndereco.telefone_alt = data.TELEFONE_ALTERNATIVO;

    let pessoa:Pessoa;
    pessoa.id = data.ID;
    pessoa.pessoa_tipo = pessoaTipo;
    pessoa.nome = data.NOME;
    pessoa.data_nascimento = data.DATA_NASCIMENTO;
    pessoa.sexo = data.SEXO;
    pessoa.nbi = data.NBI;
    pessoa.nif = data.NIF;
    pessoa.estado_civil = data.ESTADO_CIVIL;
    pessoa.endereco = pessoaEndereco;

    return pessoa;
}

export default generatePessoa;