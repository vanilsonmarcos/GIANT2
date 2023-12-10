import { Service } from "typedi";
import IPessoaRepository from "../IPessoaRepository";
import prisma from '../PrismaClient';
import CustomError from '../../utils/CustomError';
import Pessoa from '../../entities/Pessoa/Pessoa';
import { generatePessoa, generatePessoas } from '../../entities/Pessoa/PessoaHelper';
import { isArrayEmpty } from "../../utils/helper";

@Service()
class PessoaRepository implements IPessoaRepository<Pessoa> {
    async getAllClientes(): Promise<Pessoa[]> {
        const clientes_id = await prisma.apolice.findMany({
            select:{
                TOMADOR_ID: true
            },
            distinct: ["TOMADOR_ID"]

        });
        const ids = clientes_id.map((item) => item.TOMADOR_ID);

        const pessoas = await prisma.pessoa.findMany({
            where: {
                ID: {
                    in: ids
                }
            },
            include: { 
                pessoa_tipo: true,
                pessoa_endereco: true,
            },
            take: 100
        });
        if (isArrayEmpty(pessoas) || pessoas === null || pessoas === undefined) {
            throw new CustomError("Não foram encontrados clientes registadas no sistema");
        }
        return generatePessoas(pessoas);
    }

    async getAll(): Promise<Pessoa[]> {
        const pessoas = await prisma.pessoa.findMany({
            include: { 
                pessoa_tipo: true,
                pessoa_endereco: true
            },
            take: 100
        });
        if (isArrayEmpty(pessoas)|| pessoas === null || pessoas === undefined) {
            throw new CustomError("Não foram encontradas pessoas registadas no sistema");
        }
        return generatePessoas(pessoas);
    }

    async getByID(id: string): Promise<Pessoa> {
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
        return generatePessoa(pessoa);
    }

    async create(item: Pessoa): Promise<Pessoa> {

        const pessoa_endereco = await prisma.pessoa_endereco.create({
            data: {
                TELEFONE: item.ENDERECO?.TELEFONE,
                TELEFONE_ALTERNATIVO: item.ENDERECO?.TELEFONE,
                EMAIL: item.ENDERECO?.EMAIL,
                BAIRRO: item.ENDERECO?.BAIRRO,
                CIDADE: item.ENDERECO?.CIDADE,
                PROVINCIA: item.ENDERECO?.PROVINCIA,
            }
        });

        if(pessoa_endereco=== null || undefined) {
            throw new CustomError("Não foi possivel adicionar os dados da pessoa ao sistema");
        }

        const pessoa = await prisma.pessoa.create({
            data: {
                NOME: item.NOME,
                DATA_NASCIMENTO: new Date(item.DATA_NASCIMENTO),
                SEXO: item.SEXO,
                NBI: item.NBI,
                NIF: item.NIF,
                ESTADO_CIVIL: item.ESTADO_CIVIL,
                ENDERECO_ID: pessoa_endereco.ID,
                PESSOA_TIPO_ID: item.PESSOA_TIPO.ID
            },
            include: {
                pessoa_endereco: true,
                pessoa_tipo: true
            }
        });

        if (pessoa === null) {
            throw Error("Ocorreu um erro inserir os dados da pessoa");
        }
        return generatePessoa(pessoa);
    }

    async update(id: string, item: Pessoa): Promise<Pessoa> {
        const pessoa = await prisma.pessoa.update({
            where: {
                ID: parseInt(id)
            },
            data: {
                NOME: item.NOME,
                DATA_NASCIMENTO: new Date(item.DATA_NASCIMENTO),
                SEXO: item.SEXO,
                NBI: item.NBI,
                NIF: item.NIF,
                ESTADO_CIVIL: item.ESTADO_CIVIL,
                pessoa_tipo: {
                    connect: { 
                       ID : item.PESSOA_TIPO.ID
                   }
                },
                pessoa_endereco: {
                    update: {
                        TELEFONE: item.ENDERECO?.TELEFONE,
                        TELEFONE_ALTERNATIVO:item.ENDERECO?.TELEFONE,
                        EMAIL: item.ENDERECO?.EMAIL,
                        BAIRRO: item.ENDERECO?.BAIRRO,
                        CIDADE: item.ENDERECO?.CIDADE,
                        PROVINCIA: item.ENDERECO?.PROVINCIA,
                    }
                }
            },
            include: {
                pessoa_endereco: true,
                pessoa_tipo: true
            }
        });

        if (pessoa === null) {
            throw new CustomError("Ocorreu um erro ao actualizar os dados da pessoa");
        }
        return generatePessoa(pessoa);
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
        if (pessoa !== null) {
            return true;
        }
        return false;
    }

    async getPersonByPhoneNumber(phoneNumber: string): Promise<Pessoa> {
        const pessoa_endereco = await prisma.pessoa_endereco.findUnique({
            where: {
                TELEFONE: phoneNumber
            }
        });

        const pessoa = await prisma.pessoa.findUnique({
            where: {
                ENDERECO_ID: pessoa_endereco?.ID
            },
            include: {
                pessoa_endereco: true,
                pessoa_tipo: true
            }
        });
        if (pessoa === undefined || pessoa === null ) {
            throw new CustomError("Não foram encontrados os dados da pessoa");
        }

        return generatePessoa(pessoa);
    }

    async getPersonByEmail(email: string): Promise<Pessoa> {
        const pessoa_endereco = await prisma.pessoa_endereco.findUnique({
            where: {
                EMAIL: email
            }
        });

        const pessoa = await prisma.pessoa.findUnique({
            where: {
                ENDERECO_ID: pessoa_endereco?.ID
            },
            include: {
                pessoa_endereco: true,
                pessoa_tipo: true
            }
        });
   
        if (pessoa === null || pessoa=== undefined) {
            throw new CustomError("Não foram encontrados os dados da pessoa");
        }
        return generatePessoa(pessoa);
    }

    async getPersonByNIF(nif: string): Promise<Pessoa> {
        
        const pessoa = await prisma.pessoa.findFirst({
            include: {
                pessoa_endereco: true,
                pessoa_tipo: true
            },
            where: {
                NIF: {
                    equals: nif
                }
            }
        });

        if (pessoa === null || pessoa === undefined) {
            throw new CustomError("Não foram encontrados os dados da pessoa");
        }
        return generatePessoa(pessoa);
    }

    async getPersonByNBI(nbi: string): Promise<Pessoa> {
        const pessoa = await prisma.pessoa.findFirst({
            where: {
                NBI: {
                    equals: nbi
                }
            },
            include: {
                pessoa_endereco: true,
                pessoa_tipo: true
            }
        });

        if (pessoa === null || pessoa === undefined) {
            throw new CustomError("Não foram encontrados os dados da pessoa");
        }
        return generatePessoa(pessoa);
    }
}


export default PessoaRepository