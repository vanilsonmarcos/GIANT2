import { RowDataPacket } from "mysql2/promise";
import ApoliceTipo from "./ApoliceTipo";
import ApoliceEstado from "./ApoliceEstado";
import Apolice from "./Apolice";
import ApoliceTomador from "./ApoliceTomador";
import ApoliceSegurado from "./ApoliceSegurado";
import ApoliceFracionamento from "./ApoliceFracionamento";
import ApoliceItemSegurado from "./ApoliceItemSegurado";
import ApolicePagamento from "./ApolicePagamento";
import { formatDateToDDMMYYY } from "../../utils/helper";
import ApoliceCobertura from "./ApoliceCobertura";


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

function generataApoliceFracionamento(data: RowDataPacket): ApoliceFracionamento {
    let apoliceFracionamento: ApoliceFracionamento = {
        id: data['ID'],
        fracionado_em: data['FRACIONAMENTO_EM'],
        no_fracoes: data['APOLICE_FRACIONAMENTO_ID']
    }
    return apoliceFracionamento
    
}


function generateApoliceItemSegurado(data: RowDataPacket): ApoliceItemSegurado {
    let apoliceItemSegurado: ApoliceItemSegurado = {
        id: data['ID'],
        apolice_id: data['APOLICE_ID'],
        apolice_tipo_id: data['APOLICE_TIPO_ID'],
        item_id: data['ITEM_ID'],
    }
    return apoliceItemSegurado
}

function generateApolicePagamento(data: RowDataPacket): ApolicePagamento {
    let apolicePagamento: ApolicePagamento = {
        id: data['ID'],
        apolice_id: data['APOLICE_ID'], 
        descontos: data['DESCONTOS'],
        valor_pago: data['VALOR_PAGO'],
        data_insercao: formatDateToDDMMYYY(data['DATA_INSERCAO'])
    }
    return apolicePagamento
}

function generateApoliceCobertura(data:RowDataPacket): ApoliceCobertura {
    let apoliceCobertura: ApoliceCobertura = {
        id: data['ID'],
        apolice_tipo_id: data['APOLICE_TIPO_ID'],
        cobertura_base: data['COBERTURA_BASE'],
        sigla: data['SIGLA'],
        nome: data['NOME'],
        descricao: data['DESCRICAO'],
        inserido_por: data['INSERIDO_POR'],
        actualizado_por: data['ACTUALIZADO_POR'],
        removido_por: data['REMOVIDO_POR'],
        valor_a_pagar: data['VALOR_PAGAR'],
        desconto: data['DESCONTO']
    }
    return apoliceCobertura
}

export {
    generateApoliceTipo, generateApoliceEstado, 
    generateApolice, generataApoliceFracionamento, 
    generateApoliceItemSegurado, generateApolicePagamento,
    generateApoliceCobertura
}; 