import { Request, Response } from "express";
import Pessoa from "../entities/Pessoa/Pessoa";
import PessoaRepository from "../repositories/mysql/PessoaRepository";
import PessoaService from "../services/PessoaService";
import Identifier from "../schema/Identifier";
import handleParsingError from "../utils/HandleParsingErrors";

class PessoaController {

    private pessoaService: PessoaService;

    constructor(pService: PessoaService) {
        this.pessoaService = pService;
    }

    async getAll(req: Request, res: Response) {
        try {
            const pessoas: Pessoa[] = await this.pessoaService.getAll();
            const response = {
                code: 200,
                message: "Dados das pessoas foram encontrados com sucesso",
                data: pessoas
            }
            return res.json(response);
        } catch (error) {
            const response = {
                code: 404,
                message: "Occoreu um erro ao colectar dos dados das pessoas",
                data: {},
                error: error
            }
            return res.json(response);
        }

    }

    async getByID(req: Request, res: Response) {
        const { unsafeId } = req.params;
        const parsedID = Identifier.safeParse(unsafeId); 
        if(!parsedID.success) {
            return handleParsingError(res, parsedID.error);
        }
        const id = parsedID.data.toString();

        try {
            const pessoa = await this.pessoaService.getByID(id);
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
            res.json(response);
        }
    }

    async getByNBI(req: Request, res: Response) {
        const { nbi } = req.params;
        try {
            const pessoa = await this.pessoaService.getByNBI(nbi);

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
            res.json(response);
        }
    }

    async getByNIF(req: Request, res: Response) {
        const { nif } = req.params;
        try {
            const pessoa = await this.pessoaService.getByNIF(nif);

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
            res.json(response);
        }
    }

    async getByEmail(req: Request, res: Response) {
        const { email } = req.params;
        try {
            const pessoa = await this.pessoaService.getByEmail(email);

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
            return res.json(response);
        }

    }

    async getByPhoneNumber(req: Request, res: Response) {
        const { numero_telefone } = req.params
        try {
            const pessoa = await new PessoaRepository().getPersonByPhoneNumber(numero_telefone);
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
                data: {}
            }
            return res.json(response);
        }
    }


    async criar(req: Request, res: Response) {
        const pessoa: Pessoa = req.body; // parse body to person data
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
            return res.json(response);
        }
    }

    async actualizar(req: Request, res: Response) {
        const pessoa: Pessoa = req.body;

        if (pessoa.id === undefined){
            return handleParsingError(res, Error("O Id da cobertura não foi criado"));
        }
        const id = pessoa.id.toString();

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
            return res.json(response);
        }
    }

    async remover(req: Request, res: Response) {

        const { unsafeId } = req.params;
        const parsedID = Identifier.safeParse(unsafeId); 
        if(!parsedID.success) {
            return handleParsingError(res, parsedID.error);
        }
        const id = parsedID.data.toString();

        try {
            const result = await this.pessoaService.remover(id);

            if (result) {
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
                data: {}
            }
            return res.json(response);
        }

    }
}




export default PessoaController;