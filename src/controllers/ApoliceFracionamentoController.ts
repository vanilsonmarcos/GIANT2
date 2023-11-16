import { apolice_fracionamento } from '@prisma/client';

import { Request, Response } from "express";
import ApoliceFracionamentoService from "../services/ApoliceFracionamentoService";
import CustomError from '../utils/CustomError';

class ApoliceFracionamentoController {
    private apoliceFracService: ApoliceFracionamentoService;
    constructor(aService: ApoliceFracionamentoService) {
        this.apoliceFracService = aService;
    }

    async getAll(req: Request, res: Response) { 
        try {
            const apolice_fracionamentos = await this.apoliceFracService.getAll();
            const response = {
                code: 200,
                message: "Dados dos fracionamentos encontrados com sucesso",
                data: apolice_fracionamentos
            };
            res.json(response)
        } catch (error) {
            const response = {
                code: 401,
                message: "Os dados dos fracionamentos não foram encontrados",
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
            const apolice_fracionamento = await this.apoliceFracService.getByID(id);
            const response = {
                code: 200,
                message: "Dados do fracionamento foram encontrados com sucesso",
                data: apolice_fracionamento
            };
            res.json(response);
        } catch (error) {
            const response = {
                code: 401,
                message: "Ocorreu um erro ao carregar os dados do fracionamento",
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
        const apolice_fracionamento: apolice_fracionamento = req.body; // parse body to person data
        try {
            const saved_ap = await this.apoliceFracService.criar(apolice_fracionamento);
            const response = {
                code: 200,
                message: "Dados do fracionamento da apólice inseridos com sucesso",
                data: saved_ap
            };
            res.json(response);
        } catch (error) {
            const response = {
                code: 401,
                message: "Ocorreu um erro ao inserir os dados do fracionamento da apólice",
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
    

        try {
            const ap_fracionamento: apolice_fracionamento = req.body;

            if (ap_fracionamento.ID === undefined){
                throw new CustomError("O Id do fracionamento não é valido");
            }
            const id = ap_fracionamento.ID.toString();
            const updated_ap_fracionamento = await this.apoliceFracService.actualizar(id, ap_fracionamento);
            const response = {
                code: 200,
                message: "Dados do fracionamento actualizados com sucesso",
                data: updated_ap_fracionamento
            };
            
            res.json(response);
        } catch (error) {
            const response = {
                code: 401,
                message: "Ocorreu um erro ao actualizar os dados do fracionamento da apólice.",
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
            const updated_ap_fracionamento = await this.apoliceFracService.remover(id);
            if (updated_ap_fracionamento) {
                const response = {
                    code: 200,
                    message: "Dados do fracionamento foram removidos com sucesso",
                    data: updated_ap_fracionamento
                };
                res.json(response);
            }
        } catch (error) {
            const response = {
                code: 401,
                message: "Ocorreu um erro ao remover os dados do fracionamento da apólice",
                data: {},
                error: error
            };
            if (error instanceof CustomError) {
                response.message = error.message;
            }
            res.json(response);
        }
    }
}

export default ApoliceFracionamentoController;