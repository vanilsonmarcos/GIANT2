import { RowDataPacket } from "mysql2/promise";
import fs from "fs"
import ApoliceFracionamento from "./ApoliceFracionamento";
import ApoliceItemSegurado from "./ApoliceItemSegurado";
import ApoliceCobertura from "./ApoliceCobertura";
import Cobertura from "../Cobertura";
import { apolice, cobertura } from "@prisma/client";
import Apolice from "./Apolice";


function generateApolice(data: apolice): Apolice {

    let apolice: Apolice = {
        id: data.ID,
        apolice_tipo_id: data.APOLICE_TIPO_ID,
        apolice_estado_id: data.APOLICE_ESTADO_ID,
        apolice_fracionamento_id: data.APOLICE_FRACIONAMENTO_ID,
        tomador_id: data.TOMADOR_ID,
        numero: data.NUMERO
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



function generateApoliceCobertura(data: RowDataPacket): ApoliceCobertura {
    let apoliceCobertura: ApoliceCobertura = {
        id: data['ID'],
        apolice_tipo_id: data['APOLICE_TIPO_ID'],
        cobertura_base: data['COBERTURA_BASE'],
        sigla: data['SIGLA'],
        nome: data['NOME'],
        descricao: data['DESCRICAO'],
        valor_a_pagar: data['VALOR_PAGAR'],
        desconto: data['DESCONTO']
    }
    return apoliceCobertura
}

function generateCobertura(data: cobertura): Cobertura {
    let cobertura: Cobertura = {
        id: data.ID,
        sigla: data.SIGLA,
        nome: data.NOME,
        descricao: data.DESCRICAO,
        apolice_tipo_id: data.APOLICE_TIPO_ID,
        valor_a_pagar: data.VALOR_A_PAGAR.toNumber(),
        desconto: data.DESCONTO.toNumber(),
        cobertura_base: data.COBERTURA_BASE
    };

    return cobertura;
}


function toBase64(filePath: string) {
    try {
        const img = fs.readFileSync(filePath);
        return Buffer.from(img).toString('base64');

    } catch (error) {
        throw new Error("Ocorreuum erro ao ler o ficheiro");
    }
}
function toBase64WithPreefix(filepath: string): string {
    const prefix = 'data:image/png;base64,';
    const result = prefix + toBase64(filepath);
    return result;
}

export {
    generateApolice,
    generataApoliceFracionamento, generateApoliceItemSegurado, generateApoliceCobertura,
    generateCobertura, toBase64, toBase64WithPreefix
}; 