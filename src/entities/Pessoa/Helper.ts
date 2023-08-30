import { RowDataPacket } from "mysql2";
import Pessoa from "./Pessoa";
import PessoaEndereco from "./PessoaEndereco";
import PessoaTipo from "./PessoaTipo";
import { formatDateToDDMMYYY } from "../../utils/helper";

function generatePessoa(data: RowDataPacket): Pessoa {
    let pessoaTipo: PessoaTipo = {
        id: data['PESSOA_TIPO_ID'],
        nome: data['NOME_TIPO'],
    }

    let pessoaEndereco: PessoaEndereco = {
        telefone: data['TELEFONE'],
        telefone_alt: data['TELEFONE_ALTERNATIVO'],
        email: data['EMAIL']
    };

    let pessoa: Pessoa = {
        id: data['ID'],
        pessoa_tipo: pessoaTipo,
        nome: data['NOME'],
        data_nascimento: formatDateToDDMMYYY(data['DATA_NASCIMENTO']),
        sexo: data['SEXO'],
        nbi: data['NBI'],
        nif: data['NIF'],
        estado_civil: data['ESTADO_CIVIL'],
        endereco: pessoaEndereco,
    }

    return pessoa;
}

export default generatePessoa;