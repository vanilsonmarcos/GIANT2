import { Request, Response } from "express";
import PessoaService from "../services/PessoaService";
import Identifier from "../schema/Identifier";
import handleParsingError from "../utils/HandleParsingErrors";
import NbiSchema from "../schema/NbiSchema";
import EmailSchema from "../schema/EmailSchema";
import Pessoa from "../entities/Pessoa/Pessoa";
import CustomError from "../utils/CustomError";

class PessoaController {

    private pessoaService: PessoaService;

    constructor(pService: PessoaService) {
        this.pessoaService = pService;
    }

    async getAll(req: Request, res: Response) {
        try {
            const pessoas = await this.pessoaService.getAll();
            const response = {
                code: 200,
                message: "Dados das pessoas foram encontrados com sucesso",
                data: pessoas
            }
            return res.json(response);
        } catch (error) {
            const response = {
                code: 404,
                message: "Ocorreu um erro ao colectar dos dados das pessoas",
                data: {},
                error: error
            }
            if (error instanceof CustomError) {
                response.message = error.message;
            }
            return res.json(response);
        }

    }

    async getAllPessoaTipo(req: Request, res: Response) {
        try {
            const pessoas = await this.pessoaService.getAllPessoaTipo();
            const response = {
                code: 200,
                message: "Os tipos de pessoas carregados com sucesso",
                data: pessoas
            }
            return res.json(response);
        } catch (error) {
            const response = {
                code: 404,
                message: "Ocorreu um erro ao colectar dos dados dos tipos de pessoas",
                data: {},
                error: error
            }
            if (error instanceof CustomError) {
                response.message = error.message;
            }
            return res.json(response);
        }

    }

    async getAllClientes(req: Request, res: Response) {
        try {
            const pessoas = await this.pessoaService.getAll();
            const response = {
                code: 200,
                message: "Dados das clientes foram encontrados com sucesso",
                data: pessoas
            }
            return res.json(response);
        } catch (error) {
            const response = {
                code: 404,
                message: "Ocorreu um erro ao colectar dos dados dos Clientes",
                data: {},
                error: error
            }
            if (error instanceof CustomError) {
                response.message = error.message;
            }
            return res.json(response);
        }

    }

    async getByID(req: Request, res: Response) {
        const { id } = req.params;
        const parsedID = Identifier.safeParse(id);
        if (!parsedID.success) {
            return handleParsingError(res, parsedID.error);
        }
        const safeId = parsedID.data.toString();

        try {
            const pessoa = await this.pessoaService.getByID(safeId);
            const response = {
                code: 200,
                message: "Dados da pessoa foram encontrados com sucesso",
                data: pessoa
            }
            res.json(response);

        } catch (error) {
            const response = {
                code: 401,
                message: "Os dados da pessoa não foram encontrados usando o id de utilizador",
                data: {},
                error: error
            }
            if (error instanceof CustomError) {
                response.message = error.message;
            }
            res.json(response);
        }
    }

    async getByNBI(req: Request, res: Response) {
        const { nbi } = req.params;
        const parsedNbi = NbiSchema.safeParse(nbi);
        if (!parsedNbi.success) {
            return handleParsingError(res, parsedNbi.error);
        }
        const safeNbi = parsedNbi.data.toString();
        try {
            const pessoa = await this.pessoaService.getByNBI(safeNbi);

            const response = {
                code: 200,
                message: "Dados da pessoa foram encontrados com sucesso",
                data: pessoa
            }
            res.json(response);

        } catch (error) {
            const response = {
                code: 401,
                message: "Os dados da pessoa não foram encontrados usando o nbi",
                data: {},
                error: error
            }
            if (error instanceof CustomError) {
                response.message = error.message;
            }
            res.json(response);
        }
    }

    async getByNIF(req: Request, res: Response) {
        const { nif } = req.params;
        const parsedNif = NbiSchema.safeParse(nif);
        if (!parsedNif.success) {
            return handleParsingError(res, parsedNif.error);
        }
        const safeNif = parsedNif.data.toString();
        try {
            const pessoa = await this.pessoaService.getByNIF(safeNif);
            const response = {
                code: 200,
                message: "Dados da pessoa foram encontrados com sucesso",
                data: pessoa
            }
            res.json(response);

        } catch (error) {
            const response = {
                code: 401,
                message: "Os dados da pessoa não foram encontrados usando o nif",
                data: {},
                error: error
            }
            if (error instanceof CustomError) {
                response.message = error.message;
            }
            res.json(response);
        }
    }

    async getByEmail(req: Request, res: Response) {
        try {
            const { email } = req.params;
            const parsedEmail = EmailSchema.safeParse(email);
            if (!parsedEmail.success) {
                throw new CustomError("Email Inválido");
            }
            const safeEmail = parsedEmail.data.toString();
            const pessoa = await this.pessoaService.getByEmail(safeEmail);

            const response = {
                code: 200,
                message: "Dados da pessoa foram encontrados com sucesso",
                data: pessoa
            }
            return res.json(response);

        } catch (error) {
            const response = {
                code: 401,
                message: "Os dados da pessoa não foram encontrados usando o email",
                data: {},
                error: error
            }
            if (error instanceof CustomError) {
                response.message = error.message;
            }
            return res.json(response);
        }

    }

    async getByPhoneNumber(req: Request, res: Response) {
        try {
            const { telefone } = req.params;
            const pessoa = await this.pessoaService.getByPhoneNumber(telefone);
            const response = {
                code: 200,
                message: "Dados da pessoa foram encontrados com sucesso",
                data: pessoa
            }
            return res.json(response)

        } catch (error) {
            const response = {
                code: 401,
                message: "Os dados da pessoa não foram encontrados usando o numero de telefone",
                data: {},
                error: error
            }
            if (error instanceof CustomError) {
                response.message = error.message;
            }
            return res.json(response);
        }
    }


    async criar(req: Request, res: Response) {
        const pessoa: Pessoa = req.body;
        // const parsedPessoa = PessoaSchema.safeParse(pessoa);

        // if(!parsedPessoa.success) {
        //     return handleParsingError(res, parsedPessoa.error);
        // }
        // const safePessoa: Pessoa = parsedPessoa.data;

        try {
            const novaPessoa = await this.pessoaService.criar(pessoa);
            const response = {
                code: 200,
                message: "Dados da pessoa inseridos com sucesso",
                data: novaPessoa
            }
            return res.json(response);

        } catch (error) {
            const response = {
                code: 401,
                message: "Ocorreu um erro ao inserir os dados da Pessoa",
                data: {},
                error: error
            }
            if (error instanceof CustomError) {
                response.message = error.message;
            }
            return res.json(response);
        }
    }

    async actualizar(req: Request, res: Response) {
        const pessoa: Pessoa = req.body;
        // const parsedPessoa = PessoaSchema.safeParse(pessoa);
        // if(!parsedPessoa.success) {
        //     return handleParsingError(res, parsedPessoa.error);
        // }
        // const safePessoa: Pessoa = parsedPessoa.data;

        if (pessoa.ID === undefined) {
            return handleParsingError(res, Error("O Id da pessoa não foi fornecido"));
        }
        const id = pessoa.ID.toString();

        try {
            const novaPessoa = await this.pessoaService.actualizar(id, pessoa);

            const response = {
                code: 200,
                message: "Dados da pessoa actualizados com sucesso",
                data: novaPessoa
            }
            res.json(response);
        } catch (error) {
            const response = {
                code: 401,
                message: "Ocorreu um erro ao actualizar os dados da Pessoa",
                data: {},
                error: error
            }
            if (error instanceof CustomError) {
                response.message = error.message;
            }
            return res.json(response);
        }
    }

    async remover(req: Request, res: Response) {
        const { id } = req.params;
        const parsedID = Identifier.safeParse(id);
        if (!parsedID.success) {
            return handleParsingError(res, parsedID.error);
        }
        const safeId = parsedID.data.toString();

        try {
            const pessoa = await this.pessoaService.remover(safeId);

            if (pessoa) {
                const response = {
                    code: 200,
                    message: "Dados da Pessoa removidos com sucesso",
                    data: {}
                }
                return res.json(response);
            }

        } catch (error) {
            const response = {
                code: 401,
                message: "Ocorreu um erro ao remover os dados do sistema",
                data: {},
                error: error
            }
            if (error instanceof CustomError) {
                response.message = error.message;
            }
            return res.json(response);
        }

    }
}

export default PessoaController;