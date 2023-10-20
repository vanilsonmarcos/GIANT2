import Pessoa from "./Pessoa";
import { pessoa } from "@prisma/client";

function generatePessoa(data: pessoa): Pessoa {
    let pessoa: Pessoa = {
        id: data.ID,
        pessoa_tipo_id: data.PESSOA_TIPO_ID,
        nome: data.NOME,
        data_nascimento: data.DATA_NASCIMENTO.toString(),
        sexo: data.SEXO,
        nbi: data.NBI ?? '',
        nif: data.NIF,
        estado_civil: data.ESTADO_CIVIL
    }
    return pessoa;
}

export default generatePessoa;