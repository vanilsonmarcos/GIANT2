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
    let apolice: Apolice = {
        id: data['ID'],
        apolice_tipo_id: data['APOLICE_TIPO_ID'],
        numero: data['ID'],
        segurado_id: data['APOLICE_SEGURADO_ID'],
        data_inicio: data['DATA_INICIO'],
        data_fim: data['DATA_FIM'],
        apolice_fracionamento_id: data['APOLICE_FRACIONAMENTO_ID'],
        apolice_estado_id: data['APOLICE_ESTADO_ID'],
        valor_premio: data['VALOR_PREMIO'],
    }
    return apolice;
}
export {generateApoliceTipo, generateApoliceEstado, generateApolice};