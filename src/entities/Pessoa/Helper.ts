import Pessoa from "./Pessoa";
import { pessoa } from "@prisma/client";

function generatePessoa(data: pessoa): pessoa {
    let pessoa: Pessoa = {
        id: data.ID,
        pessoa_tipo: {
            id: data.pessoa_tipo.ID,
            nome: data.pessoa_tipo.NOME,
        },   
        nome: data.NOME,
        data_nascimento: data.DATA_NASCIMENTO.toString(),
        sexo: data.SEXO,
        nbi: data.NBI ?? '',
        nif: data.NIF,
        estado_civil: data.ESTADO_CIVIL,
        endereco: {
            data.pessoa_endereco 
        }
    }
    return pessoa;
}

export default generatePessoa;