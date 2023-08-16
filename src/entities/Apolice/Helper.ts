import { RowDataPacket } from "mysql2/promise";
import ApoliceTipo from "./ApoliceTipo";
import ApoliceEstado from "./ApoliceEstado";
import Apolice from "./Apolice";
import ApoliceTomador from "./ApoliceTomador";
import ApoliceSegurado from "./ApoliceSegurado";


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
        id: data['ID'],
        sigla: data['SIGLA'],
        nome: data['NOME'],
        descricao: data['DESCRICAO']

    };
    
    let apolice_estado: ApoliceEstado = {

    };
    
    let apolice_tomador:ApoliceTomador [] = {

    };

    let apolice_segurado: ApoliceSegurado = {

    };

    let apolice: Apolice = {
        id: data['ID'],
        apolice_tipo_id: data['ID'],
        numero: data['ID'],
        segurado: data['ID'],
        tomador: data['ID'],
        data_inicio: data['DATA_INICIO'],
        data_fim: data['DATA_FIM'],
        apolice_fracionamento: data['APOLICE_FRACIONAMENTO_ID'],
        apolice_estado_id: data['APOLICE_ESTADO_ID'],
        valor_premio: data['VALOR_PREMIO'],
        inserido_por: data['INSERIDO_POR']
    }
    return apolice;
}
export {generateApoliceTipo, generateApoliceEstado};