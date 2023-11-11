import { Request, Response } from "express";
import { adenda, apolice } from "@prisma/client";
import AdendaService from "../services/AdendaService";
import handleParsingError from "../utils/HandleParsingErrors";

class AdendaController {
    private adendaService: AdendaService;
    constructor(aService: AdendaService) {
        this.adendaService = aService;
    }

    async getAll(req: Request, res: Response) { 
        try {
            const adendas = await this.adendaService.getAll();
            const response = {
                code: 200,
                message: "Dados das adendas encontrados com sucesso",
                data: adendas
            };
            res.json(response)
        } catch (error) {
            const response = {
                code: 401,
                message: "Os dados das adendas não foram encontrados",
                data:  {},
                error: error
            };
            res.json(response)
        }
    }
    
    async getByID(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const adenda = await this.adendaService.getByID(id);
            const response = {
                code: 200,
                message: "Dados da adenda foram encontrados com sucesso",
                data: adenda
            };
            res.json(response);
        } catch (error) {
            const response = {
                code: 401,
                message: "Ocorreu um erro ao carregar os dados da apólice",
                data: {},
                error: error
            };
            res.json(response);
        }
    }
    
    async criar(req: Request, res: Response) {
        const adenda: adenda = req.body; // parse body to person data
        try {
            const createdAdenda = await this.adendaService.criar(adenda);
            const response = {
                code: 200,
                message: "Dados da adenda inseridos com sucesso",
                data: createdAdenda
            };
            res.json(response);
        } catch (error) {
            const response = {
                code: 401,
                message: "Ocorreu um erro ao inserir os dados da adenda",
                data: {},
                error: error
            }
            res.json(response);
        }
    }
    
    async actualizar(req: Request, res: Response) { 
        const adenda: adenda = req.body;

        if (adenda.ID === undefined){
            return handleParsingError(res, Error("O Id da adenda não foi definido"));
        }
        const id = adenda.ID.toString();

        try {
            const updatedAdenda = await this.adendaService.actualizar(id, adenda);
            const response = {
                code: 200,
                message: "Dados da adenda actualizados com sucesso",
                data: updatedAdenda
            };
            res.json(response);
        } catch (error) {
            const response = {
                code: 401,
                message: "Ocorreu um erro ao actualizar os dados da adenda",
                data: {},
                error: error
            }
            res.json(response);
        }
    }
    
    async remover(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const adenda = await this.adendaService.remover(id);
            if (adenda) {
                const response = {
                    code: 200,
                    message: "Dados da apólice foram removidos com sucesso",
                    data: adenda
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
            res.json(response);
        }
    }
}

export default AdendaController;