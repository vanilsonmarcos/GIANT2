import Pessoa from "../Pessoa/Pessoa";
import ApoliceCobertura from "./ApoliceCobertura";
import ApoliceEstado from "./ApoliceEstado";
import ApoliceFracionamento from "./ApoliceFracionamento";
import ApolicePagamento from "./ApolicePagamento";
import ApoliceTipo from "./ApoliceTipo";

interface Apolice {
    id?: Number,
    apolice_tipo: ApoliceTipo,
    numero: String,
    segurado: Pessoa,
    tomador?: Pessoa[],
    data_inicio: Date,
    data_fim: Date,
    apolice_fracionamento: ApoliceFracionamento,
    apolice_coberturas?:ApoliceCobertura[],
    apolice_pagamento?: ApolicePagamento,
    apolice_estado: ApoliceEstado,
    valor_premio: Number,
    inserido_por?: Number,
    actualizado_por?: Number,
    removido_por?: Number,
}

export default Apolice;


