import { RowDataPacket } from "mysql2/promise";
import fs from "fs"
import ApoliceTipo from "./ApoliceTipo";
import ApoliceEstado from "./ApoliceEstado";
import Apolice from "./Apolice";
import ApoliceFracionamento from "./ApoliceFracionamento";
import ApoliceItemSegurado from "./ApoliceItemSegurado";
import ApolicePagamento from "./ApolicePagamento";
import ApoliceCobertura from "./ApoliceCobertura";
import Cobertura from "../Cobertura";




function generateApoliceEstado(data: RowDataPacket): ApoliceEstado {
    let apoliceEstado: ApoliceEstado = {
        id: data['ID'],
        nome: data['NOME'],
        descricao: data['DESCRICAO']
    }
    return apoliceEstado;
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
        data_insercao: data['DATA_INSERCAO']
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

function generateCobertura(data:RowDataPacket): Cobertura { 
    let cobertura: Cobertura = {
        id: data['ID'],
        sigla: data['SIGLA'],
        nome: data['NOME'],
        descricao: data['DESCRICAO'],
        apolice_tipo: {
            id: data['APOLICE_TIPO_ID'],
            sigla: data['APOLICE_TIPO_SIGLA'],
            nome: data['APOLICE_TIPO_NOME'],
            descricao:data['APOLICE_TIPO_DESCRICAO']
        },
        data_criacao: data['DATA_CRIACAO'],
        data_actualizacao: data['DATA_ACTUALIZACAO'],
        valor_pagar: data['VALOR_PAGAR'],
        desconto: data['DESCONTO'],
        cobertura_base: data['COBERTURA_BASE']=== 1 //
    };
    
    return cobertura;
}


function toBase64(filePath:string) {
    try {
        const img = fs.readFileSync(filePath);
        return Buffer.from(img).toString('base64');

    } catch(error) {
        throw new Error("Ocorreuum erro ao ler o ficheiro");
    }
}
function toBase64WithPreefix(filepath: string): string {
    const prefix = 'data:image/png;base64,';
    const result = prefix + toBase64(filepath);
    return result; 
}

export {
     generateApoliceEstado, generataApoliceFracionamento, 
    generateApoliceItemSegurado, generateApolicePagamento,
    generateApoliceCobertura, generateCobertura, toBase64, toBase64WithPreefix
}; 