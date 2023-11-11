import { Request, Response } from "express";
import ApoliceTipoService from "../services/ApoliceTipoService";
import { apolice_tipo } from "@prisma/client";
import handleParsingError from "../utils/HandleParsingErrors";

class ApoliceTipoController {
    private apoliceTipoService: ApoliceTipoService;
    constructor(aTService: ApoliceTipoService) {
        this.apoliceTipoService = aTService;
    }

    async getAll(req: Request, res: Response) { 
        try {
            const apoliceTipos = await this.apoliceTipoService.getAll();
            const response = {
                code: 200,
                message: "Dados dos tipos de apólice encontrados com sucesso",
                data: apoliceTipos
            };
            res.json(response)
        } catch (error) {
            const response = {
                code: 401,
                message: "Os dados das apolices não foram encontrados",
                data:  {},
                error: error
            };
            res.json(response)
        }
    }
    
    async getByID(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const apoliceTipo = await this.apoliceTipoService.getByID(id);
            const response = {
                code: 200,
                message: "Dados do tipo de apólice foram encontrados com sucesso",
                data: apoliceTipo
            };
            res.json(response);
        } catch (error) {
            const response = {
                code: 401,
                message: "Ocorreu um erro ao carregar os dados do tipo de apólice",
                data: {},
                error: error
            };
            res.json(response);
        }
    }
    
    async criar(req: Request, res: Response) {
        const apolice_tipo: apolice_tipo = req.body; // parse body to person data
        try {
            const createdApolice = await this.apoliceTipoService.criar(apolice_tipo);
            const response = {
                code: 200,
                message: "Dados do tipo de apólice inseridos com sucesso",
                data: createdApolice
            };
            res.json(response);
        } catch (error) {
            const response = {
                code: 401,
                message: "Ocorreu um erro ao inserir os dados do tipo de apólice",
                data: {},
                error: error
            }
            res.json(response);
        }
    }
    
    async actualizar(req: Request, res: Response) { 
        const apolice_tipo: apolice_tipo = req.body;

        if (apolice_tipo.ID === undefined){
            return handleParsingError(res, Error("O Id da apólice não foi definido"));
        }
        const id = apolice_tipo.ID.toString();

        try {
            const updatedApolice = await this.apoliceTipoService.actualizar(id, apolice_tipo);
            const response = {
                code: 200,
                message: "Dados do tipo de apólice actualizados com sucesso",
                data: updatedApolice
            };
            res.json(response);
        } catch (error) {
            const response = {
                code: 401,
                message: "Ocorreu um erro ao actualizar os dados do tipo de apólice",
                data: {},
                error: error
            }
            res.json(response);
        }
    }
    
    async remover(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const apolice_tipo = await this.apoliceTipoService.remover(id);
            if (apolice_tipo) {
                const response = {
                    code: 200,
                    message: "Dados do tipo de apólice foram removidos com sucesso",
                    data: apolice_tipo
                };
                res.json(response);
            }
        } catch (error) {
            const response = {
                code: 401,
                message: "Ocorreu um erro ao remover os dados do tipo de apólice",
                data: {},
                error: error
            };
            res.json(response);
        }
    }
}

export default ApoliceTipoController