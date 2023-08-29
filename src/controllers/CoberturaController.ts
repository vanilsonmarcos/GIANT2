import { Request, Response } from "express";
import Cobertura from "../entities/Cobertura";
import CoberturaService from "../services/CoberturaService";
import CoberturaSchema from "../schema/CoberturaSchema";
class CoberturaController {
    private coberturaService: CoberturaService;

    constructor(cService: CoberturaService) {
        this.coberturaService = cService;
    }

    // Read/Query  
    async getAll(req: Request, res: Response) {
        try {
            const coberturas: Cobertura[] = await this.coberturaService.getAll();
            const response = {
                code: 200,
                message: "Dados das Coberturas foram encontrados com sucesso",
                data: coberturas
            };
            return res.json(response);
        } catch (error) {
            const response = {
                code: 404,
                message: "Occoreu um erro ao colectar dos dados das Coberturas",
                data: {},
                error: error
            };
            return res.json(response)
        }
    }

    async getByID(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const cobertura: Cobertura = await this.coberturaService.getByID(id);
            const response = {
                code: 200,
                message: "Dados da Cobertura foram encontrados com sucesso",
                data: cobertura
            }
            return res.json(response);
        } catch (error) {
            const response = {
                code: 400,
                message: "",
                data: {},
                error: error
            };
            return res.json(response)
        }
    }

    async criar(req: Request, res: Response) {
        const c: Cobertura = req.body;
        const parsedData = CoberturaSchema.safeParse(c);
        if (!parsedData.success) {
            return handleParsingError(res, parsedData.error);
        }

        try {
            const cobertura: Cobertura = await this.coberturaService.criar(parsedData.data);
            const response = {
                code: 200,
                message: "Dados da Cobertura inseridos com sucesso",
                data: cobertura
            }
            return res.json(response);
        } catch (error) {
            const response = {
                code: 404,
                message: "Ocorreu um erro ao inserir os dados da Cobertura",
                data: {},
                error: error
            }
            return res.json(response);
        }
    }

    async actualizar(req: Request, res: Response) {
        const c: Cobertura = req.body
        const parsedData = CoberturaSchema.safeParse(c);
        if (!parsedData.success) {
            return handleParsingError(res, parsedData.error);
        }
        
        if (parsedData.data.id === undefined){
            return handleParsingError(res, new Error("O Id da cobertura não foi criado"));
        }

        try {
            const cobertura: Cobertura = await this.coberturaService.actualizar(parsedData.data.id.toString(), parsedData.data);
            const response = {
                code: 200,
                message: "Dados da Cobertura actualizados com sucesso",
                data: cobertura
            }
            return res.json(response);
        } catch (error) {
            const response = {
                code: 401,
                message: "Ocorreu um erro ao actualizar os dados da Cobertura",
                data: {},
                error: error
            };
            return res.json(response);

        }
        
    }

    async remover(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const result: Boolean = await this.coberturaService.remover(id);
            if (!result) {
                const response = {
                    code: 404,
                    message: "Os dados da Cobertura não foram removidos do sistema",
                    data: {},
                };
                return res.json(response);
            }
            const response = {
                code: 200,
                message: "Dados da Cobertura removidos com sucesso",
                data: {}
            }
            return res.json(response);
        } catch (error) {
            const response = {
                code: 401,
                message: "Ocorreu um erro ao remover os dados da Cobertura",
                data: {}
            }
            return res.json(response);
        }
    }
}

const handleParsingError = (res: Response, error: any) => {
    const response = {
        code: 401,
        message: "Ocorreu um erro ao validar os dados da cobertura inseridos",
        data: {},
        error: error,
    };
    return res.json(response);
}


export default CoberturaController;