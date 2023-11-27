import { Request, Response } from "express";
import ApoliceService from "../services/ApoliceService";
import handleParsingError from "../utils/HandleParsingErrors";
import { apolice } from "@prisma/client";
import CustomError from "../utils/CustomError";

class ApoliceController {
    private apoliceService: ApoliceService;
    constructor(vService: ApoliceService) {
        this.apoliceService = vService;
    }

    async getAll(req: Request, res: Response) { 
        try {
            const apolices = await this.apoliceService.getAll();
            const response = {
                code: 200,
                message: "Dados das apolices encontrados com sucesso",
                data: apolices
            };
            res.json(response)
        } catch (error) {
            const response = {
                code: 401,
                message: "Os dados das apolices não foram encontrados",
                data:  {},
                error: error
            };
            if (error instanceof CustomError) {
                response.message = error.message;
            }
            res.json(response)
        }
    }
    
    async getByID(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const apolice = await this.apoliceService.getByID(id);
            const response = {
                code: 200,
                message: "Dados da apólice foram encontrados com sucesso",
                data: apolice
            };
            res.json(response);
        } catch (error) {
            const response = {
                code: 401,
                message: "Ocorreu um erro ao carregar os dados da apólice",
                data: {},
                error: error
            };
            if (error instanceof CustomError) {
                response.message = error.message;
            }
            res.json(response);
        }
    }
    
    async criar(req: Request, res: Response) {
        const apolice: apolice = req.body; // parse body to person data
        try {
            const createdApolice = await this.apoliceService.criar(apolice);
            const response = {
                code: 200,
                message: "Dados da apólice inseridos com sucesso",
                data: createdApolice
            };
            res.json(response);
        } catch (error) {
            const response = {
                code: 401,
                message: "Ocorreu um erro ao inserir os dados da apólice",
                data: {},
                error: error
            };
            if (error instanceof CustomError) {
                response.message = error.message;
            }
            res.json(response);
        }
    }
    
    async actualizar(req: Request, res: Response) { 
        const apolice: apolice = req.body;

        if (apolice.ID === undefined){
            return handleParsingError(res, Error("O Id da apólice não foi definido"));
        }
        const id = apolice.ID.toString();

        try {
            const updatedApolice = await this.apoliceService.actualizar(id, apolice);
            const response = {
                code: 200,
                message: "Dados da apólice actualizados com sucesso",
                data: updatedApolice
            };
            res.json(response);
        } catch (error) {
            const response = {
                code: 401,
                message: "Ocorreu um erro ao actualizar os dados da apólice",
                data: {},
                error: error
            };
            if (error instanceof CustomError) {
                response.message = error.message;
            }
            res.json(response);
        }
    }
    
    async remover(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const apolice = await this.apoliceService.remover(id);
            if (apolice) {
                const response = {
                    code: 200,
                    message: "Dados da apólice foram removidos com sucesso",
                    data: apolice
                };
                res.json(response);
            }
        } catch (error) {
            const response = {
                code: 401,
                message: "Ocorreu um erro ao remover os dados da apólice",
                data: {},
                error: error
            };
            if (error instanceof CustomError) {
                response.message = error.message;
            }
            res.json(response);
        }
    }

    async getAllApoliceEstado(req: Request, res: Response) {
        try {
            const apolices = await this.apoliceService.getAllApoliceEstado();
            const response = {
                code: 200,
                message: "Dados dos estados das apolices encontrados com sucesso",
                data: apolices
            };
            res.json(response)
        } catch (error) {
            const response = {
                code: 401,
                message: "Os dados dos estados das apolices não foram encontrados",
                data:  {},
                error: error
            };
            if (error instanceof CustomError) {
                response.message = error.message;
            }
            res.json(response)
        }
    }
}

export default ApoliceController