import { pessoa } from '@prisma/client';
import Pessoa from "./Pessoa";

function generatePessoa(pessoa: { 
    pessoa_tipo: { ID: number; NOME_TIPO: string | null; DATA_CRIACAO: Date | null; DATA_ACTUALIZACAO: Date | null; }; 
    pessoa_endereco: { ID: number; TELEFONE: string | null; TELEFONE_ALTERNATIVO: string | null; EMAIL: string | null; BAIRRO: string | null; CIDADE: string | null; PROVINCIA: string | null; DATA_CRIACAO: Date | null; DATA_ACTUALIZACAO: Date | null; } | null; } & 
    { ID: number; PESSOA_TIPO_ID: number; ENDERECO_ID: number | null; NOME: string; DATA_NASCIMENTO: Date; SEXO: string; NBI: string | null; NIF: string; ESTADO_CIVIL: string; DATA_INSERCAO: Date | null; DATA_ACTUALIZACAO: Date | null; }): Pessoa {
    return  {
        ID: pessoa.ID,
        NOME: pessoa.NOME,
        PESSOA_TIPO: {
            ID: pessoa.pessoa_tipo.ID,
            NOME: pessoa.pessoa_tipo.NOME_TIPO!
        },
        DATA_NASCIMENTO: pessoa.DATA_NASCIMENTO.toISOString().slice(0, 10),
        SEXO: pessoa.SEXO,
        NBI: pessoa.NBI!,
        NIF: pessoa.NIF,
        ESTADO_CIVIL: pessoa.ESTADO_CIVIL,
        ENDERECO: pessoa.pessoa_endereco ? {
            ID: pessoa.pessoa_endereco?.ID,
            TELEFONE: pessoa.pessoa_endereco?.TELEFONE!,
            TELEFONE_ALT: pessoa.pessoa_endereco?.TELEFONE_ALTERNATIVO!,
            BAIRRO: pessoa.pessoa_endereco?.BAIRRO!,
            CIDADE: pessoa.pessoa_endereco?.CIDADE!,
            PROVINCIA: pessoa.pessoa_endereco?.PROVINCIA!,
            EMAIL: pessoa.pessoa_endereco?.EMAIL!
        }: undefined

    } 
}

function generatePessoas(pessoas:Array<{ 
    pessoa_tipo: { ID: number; NOME_TIPO: string | null; DATA_CRIACAO: Date | null; DATA_ACTUALIZACAO: Date | null; }; 
    pessoa_endereco: { ID: number; TELEFONE: string | null; TELEFONE_ALTERNATIVO: string | null; EMAIL: string | null; BAIRRO: string | null; CIDADE: string | null; PROVINCIA: string | null; DATA_CRIACAO: Date | null; DATA_ACTUALIZACAO: Date | null; } | null; } & 
    { ID: number; PESSOA_TIPO_ID: number; ENDERECO_ID: number | null; NOME: string; DATA_NASCIMENTO: Date; SEXO: string; NBI: string | null; NIF: string; ESTADO_CIVIL: string; DATA_INSERCAO: Date | null; DATA_ACTUALIZACAO: Date | null; }>): Pessoa [] {
        return pessoas.map(p=> generatePessoa(p));

}

export { generatePessoa, generatePessoas };