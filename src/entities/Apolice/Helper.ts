import { RowDataPacket } from "mysql2/promise";
import ApoliceTipo from "./ApoliceTipo";
import ApoliceEstado from "./ApoliceEstado";
import Apolice from "./Apolice";
import ApoliceTomador from "./ApoliceTomador";
import ApoliceSegurado from "./ApoliceSegurado";
import ApoliceFracionamento from "./ApoliceFracionamento";


function generateApoliceTipo(data: RowDataPacket): ApoliceTipo {
    let apoliceTipo: ApoliceTipo = {
        id: data['ID'],
        sigla: data['SIGLA'],
        nome: data['NOME'],
        descricao: data['DESCRICAO']
    }
    return apoliceTipo;
}


function generateApoliceEstado(data: RowDataPacket): ApoliceEstado {
    let apoliceEstado: ApoliceEstado = {
        id: data['ID'],
        nome: data['NOME'],
        descricao: data['DESCRICAO']
    }
    return apoliceEstado;
}


function generateApolice(data: RowDataPacket): Apolice {
    let apolice_tipo: ApoliceTipo = {
        id: data['APOLICE_TIPO_ID'],
        sigla: data['APOLICE_TIPO_SIGLA'],
        nome: data['APOLICE_TIPO_NOME'],
        descricao: data['APOLICE_TIPO_DESCRICAO']

    };
    
    let apolice_estado: ApoliceEstado = {
        id: data['APOLICE_ESTADO_ID'],
        nome: data['APOLICE_ESTADO_NOME'],
        descricao: data['APOLICE_ESTADO_DESCRICAO']

    };

    let apolice_segurado: ApoliceSegurado = {
        id: data['APOLICE_SEGURADO_ID'],
        nome: data['SEGURADO_NOME'],
        pessoa_tipo_id: data['SEGURADO_TIPO'],
        data_nascimento: data['SEGURADO_DATA_NASCIMENTO'],
        sexo: data['SEGURADO_SEXO'],
        nbi: data['SEGURADO_NBI'],
        nif: data['SEGURADO_NIF'],
        estado_civil: data['SEGURADO_ESTADO_CIVIL']

    };

    let apolice_fracionamento:ApoliceFracionamento = {
        id: data['APOLICE_FRACIONAMENTO_ID'],
        fracionado_em: data['FRACIONADO_EM'],
        no_fracoes: data['NO_FRACOES']
    }

    let apolice: Apolice = {
        id: data['ID'],
        apolice_tipo: apolice_tipo,
        numero: data['ID'],
        segurado: apolice_segurado,
        tomador: data['ID'],
        data_inicio: data['DATA_INICIO'],
        data_fim: data['DATA_FIM'],
        apolice_fracionamento: apolice_fracionamento,
        apolice_estado: apolice_estado,
        valor_premio: data['VALOR_PREMIO'],
    }
    return apolice;
}
export {generateApoliceTipo, generateApoliceEstado, generateApolice};