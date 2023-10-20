import { pessoa, pessoa_endereco } from './../../../node_modules/.prisma/client/index.d';
import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { Service } from "typedi";
import { query, getConnection, queryWithValues, queryWithConnectionAndValues } from "./mysql";
import IPessoaRepository from "../IPessoaRepository";
import Pessoa from "../../entities/Pessoa/Pessoa";
import generatePessoa from "../../entities/Pessoa/Helper";
import prisma from '../PrismaClient';

@Service()
class PessoaRepository implements IPessoaRepository<Pessoa> {
    async getAll(): Promise<Pessoa[]> {
        const ps = await prisma.pessoa.findMany({
            take: 100,
            include: {
                pessoa_tipo: true,
                pessoa_endereco: true
            }
        });
        let pessoas:Pessoa[] = [];
        if (pessoas !== null) {
            for (const item of ps) {
                const pessoa:Pessoa = generatePessoa(item);
                pessoas.push(pessoa);
            }
        }
        return pessoas;
    }

    async getByID(id: string): Promise<Pessoa> {
        const ps = await prisma.pessoa.findUnique({
            where: {
                ID: parseInt(id)
            },
            include: {
                pessoa_tipo: true,
                pessoa_endereco: true
            }
        });
        if (ps === null) {
            throw Error("Não foi possivel encontrar os dados da pessoa");
        }
        return generatePessoa(ps);
    }

    async create(item: Pessoa): Promise<Pessoa> {
        const ps = await prisma.pessoa.create({
            data: {
                PESSOA_TIPO_ID: (item.pessoa_tipo.id),
                NOME: item.nome,
                DATA_NASCIMENTO: item.data_nascimento,
                SEXO: item.sexo,
                NBI: item.nbi,
                NIF: item.nif,
                ESTADO_CIVIL: item.estado_civil,
                pessoa_endereco: {
                    create: {
                        TELEFONE: item.endereco.telefone,
                        TELEFONE_ALTERNATIVO:item.endereco.telefone_alt,
                        EMAIL: item.endereco.email,
                    }
                }    
            }
        });
        if(ps === null) {
            throw Error("Ocorreu um erro inserir os dados da pessoa");
        }
        item.id = ps.ID;
        return item;
    }

    async update(id: string, item: Pessoa): Promise<Pessoa> {
        const ps = await prisma.pessoa.update({
            where: {
                ID: parseInt(id)
            },
            data: {
                PESSOA_TIPO_ID: item.pessoa_tipo.id,
                NOME: item.nome, 
                DATA_NASCIMENTO: item.data_nascimento, 
                SEXO: item.sexo, 
                NBI: item.nbi, 
                NIF: item.nif, 
                ESTADO_CIVIL: item.estado_civil,
                pessoa_endereco: {
                    update: {
                        where: {
                            ID: parseInt(id)
                        },
                        data: {
                            TELEFONE: item.endereco.telefone,
                            TELEFONE_ALTERNATIVO:item.endereco.telefone_alt,
                            EMAIL: item.endereco.email,
                        }
                    }
                }
            }
        });

        if (ps === null) {
            throw Error("Ocorreu um erro ao actualizar os dados da pessoa");
        }
        item.id =  ps.ID;
        return item;
    }

    async delete(id: string): Promise<Boolean> {
        const ps = await prisma.pessoa.delete({
            where: {
                ID: parseInt(id)
            },
            include: {
                pessoa_endereco: true,
                pessoa_tipo: true
            }
        });
        if(ps !== null){
            return true;
        }
        return false;
    }

    async getPersonByPhoneNumber(phoneNumber: string): Promise<Pessoa> {
        const ps = await prisma.pessoa.findFirst({
            where: {
                pessoa_endereco: {
                    some: {
                        TELEFONE: phoneNumber
                    }
                }
            },
            include: {
                pessoa_endereco: true,
                pessoa_tipo: true
            }
        });
       
        if (ps === null) {
            throw Error("Não foram encontrados os dados da pessoa");
        }
        return generatePessoa(ps);
    }

    async getPersonByEmail(email: string): Promise<Pessoa> {
        const ps = await prisma.pessoa.findFirst({
            where: {
                pessoa_endereco: {
                    some: {
                        EMAIL:email
                    } 
                }
            },
            include: {
                pessoa_endereco: true,
                pessoa_tipo: true
            }
        });
       
        if (ps === null) {
            throw Error("Não foram encontrados os dados da pessoa");
        }
        return generatePessoa(ps);
    }

    async getPersonByNIF(nif: string): Promise<Pessoa> {
        const ps = await prisma.pessoa.findFirst({
            where: {
                NIF:nif 
            },
            include: {
                pessoa_endereco: true,
                pessoa_tipo: true
            }
        });
       
        if (ps === null) {
            throw Error("Não foram encontrados os dados da pessoa");
        }
        return generatePessoa(ps);
    }

    async getPersonByNBI(nbi: string): Promise<Pessoa>{
        const ps = await prisma.pessoa.findFirst({
            where: {
                NBI: nbi 
            },
            include: {
                pessoa_endereco: true,
                pessoa_tipo: true
            }
        });
       
        if (ps === null) {
            throw Error("Não foram encontrados os dados da pessoa");
        }
        return generatePessoa(ps);
    }
}


export default PessoaRepository