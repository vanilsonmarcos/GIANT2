import { pessoa } from '@prisma/client';
import { Service } from "typedi";
import IPessoaRepository from "../IPessoaRepository";
import prisma from '../PrismaClient';

@Service()
class PessoaRepository implements IPessoaRepository<pessoa> {
    async getAll(): Promise<pessoa[]> {
        const pessoas = await prisma.pessoa.findMany({
            include: {
                pessoa_tipo: true,
                pessoa_endereco: true
            },
            take: 100
        });

        return pessoas;
    }

    async getByID(id: string): Promise<pessoa> {
        const pessoa = await prisma.pessoa.findUnique({
            where: {
                ID: parseInt(id)
            },
            include: {
                pessoa_tipo: true,
                pessoa_endereco: true
            }
        });
        if (pessoa === null) {
            throw Error("Não foi possivel encontrar os dados da pessoa");
        }
        return pessoa;
    }

    async create(item: pessoa): Promise<pessoa> {
        const pessoa = await prisma.pessoa.create({
            data: {
                PESSOA_TIPO_ID: item.PESSOA_TIPO_ID,
                NOME: item.NOME,
                DATA_NASCIMENTO: item.DATA_NASCIMENTO,
                SEXO: item.SEXO,
                NBI: item.NBI,
                NIF: item.NIF,
                ESTADO_CIVIL: item.ESTADO_CIVIL,   
            }
        });
        if(pessoa === null) {
            throw Error("Ocorreu um erro inserir os dados da pessoa");
        }
        return pessoa;
    }

    async update(id: string, item: pessoa): Promise<pessoa> {
        const pessoa = await prisma.pessoa.update({
            where: {
                ID: parseInt(id)
            },
            data: {
                PESSOA_TIPO_ID: item.PESSOA_TIPO_ID,
                NOME: item.NOME, 
                DATA_NASCIMENTO: item.DATA_NASCIMENTO, 
                SEXO: item.SEXO, 
                NBI: item.NBI, 
                NIF: item.NIF, 
                ESTADO_CIVIL: item.ESTADO_CIVIL,
                ENDERECO_ID: item.ENDERECO_ID
            },
            include: {
                pessoa_endereco: true,
                pessoa_tipo: true
            }
        });

        if (pessoa === null) {
            throw Error("Ocorreu um erro ao actualizar os dados da pessoa");
        }
        return pessoa;
    }

    async delete(id: string): Promise<boolean> {
        const pessoa = await prisma.pessoa.delete({
            include: {
                pessoa_endereco: true,
                pessoa_tipo: true
            },
            where: {
                ID: parseInt(id)
            }
        });
        if(pessoa !== null){
            return true;
        }
        return false;
    }

    async getPersonByPhoneNumber(phoneNumber: string): Promise<pessoa> {
        const pessoa = await prisma.pessoa_endereco.findUnique({ 
            where: {
                TELEFONE: phoneNumber
            }
        }).pessoa();
       
        if (pessoa === null) {
            throw Error("Não foram encontrados os dados da pessoa");
        }
        return pessoa;
    }

    async getPersonByEmail(email: string): Promise<pessoa> {
        const pessoa = await prisma.pessoa_endereco.findUnique({ 
            where: {
                EMAIL: email
            }
        }).pessoa();
       
        if (pessoa === null) {
            throw Error("Não foram encontrados os dados da pessoa");
        }
        return pessoa;
    }

    async getPersonByNIF(nif: string): Promise<pessoa> {
        const pessoa = await prisma.pessoa.findUnique({
            include: {
                pessoa_endereco: true,
                pessoa_tipo: true
            }, 
            where: {
               NIF : nif
            }
        });
       
        if (pessoa === null) {
            throw Error("Não foram encontrados os dados da pessoa");
        }
        return pessoa;
    }

    async getPersonByNBI(nbi: string): Promise<pessoa>{
        const pessoa = await prisma.pessoa.findFirst({
            where: {
                NBI: nbi 
            },
            include: {
                pessoa_endereco: true,
                pessoa_tipo: true
            }
        });
       
        if (pessoa === null) {
            throw Error("Não foram encontrados os dados da pessoa");
        }
        return pessoa;
    }
}


export default PessoaRepository