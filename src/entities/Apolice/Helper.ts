import { RowDataPacket } from "mysql2/promise";
import ApoliceTipo from "./ApoliceTipo";
import ApoliceEstado from "./ApoliceEstado";


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
export {generateApoliceTipo, generateApoliceEstado};