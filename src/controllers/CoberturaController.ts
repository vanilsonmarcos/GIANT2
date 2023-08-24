import { Request, Response } from "express";
import CoberturaRepository from "../repositories/mysql/CoberturaRepository";
import Cobertura from "../entities/Cobertura";
import CoberturaService from "../services/CoberturaService";
class CoberturaController {
    private coberturaService: CoberturaService;
    
    constructor(cService: CoberturaService) {
        this.coberturaService = cService;
    }

    // Read/Query  
     async getAll(req: Request, res: Response) {
        try {
            const coberturas: Cobertura[] =  await this.coberturaService.getAll();
            const response = {
                code: 200,
                message: "Dados das Coberturas foram encontrados com sucesso",
                data: coberturas
            };

            res.json(response);
    
        } catch (error) {
            const response = {
                code: 404,
                message: "Occoreu um erro ao colectar dos dados das Coberturas",
                data: {},
                error: error
            };
            res.json(response)
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
            res.json(response);
        } catch (error) {
            const response = {
                code: 400,
                message: "",
                data: {},
                error: error
            };
            res.json(response)
        }
    
    }
    
    async nova(req: Request, res: Response) {
        const cb: Cobertura = req.body;
        try {
            const cobertura: Cobertura = await this.coberturaService.criar(cb);
            const response = {
                code: 200,
                message: "Dados da Cobertura inseridos com sucesso",
                data: cobertura
            }
            res.json(response);
        } catch (error) {
            const response = {
                code: 404,
                message: "Ocorreu um erro ao inserir os dados da Cobertura",
                data: {},
                error: error
            }
            res.json(response);
        }
    
    }
    
    async actualizar(req: Request, res: Response) {
        const { id } = req.params;
        const c: Cobertura = req.body
        try {
            const cobertura: Cobertura = await this.coberturaService.actualizar(id, c);
            const response = {
                code: 200,
                message: "Dados da Cobertura actualizados com sucesso",
                data: cobertura
            }
            res.json(response);
        } catch (error) {
            const response = {
                code: 401,
                message: "Ocorreu um erro ao actualizar os dados da Cobertura",
                data: {},
                error: error
            };
            res.json(response);
        }
    }
    
    async remover(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const result: Boolean = await this.coberturaService.remover(id);
            if (result) {
                const response = {
                    code: 200,
                    message: "Dados da Cobertura removidos com sucesso",
                    data: {}
                }
                res.json(response);
            }
            
            const response = {
                code: 404,
                message: "Os dados da Cobertura não foram removidos do sistema",
                data: {},
            };
            res.json(response);
    
        } catch (error) {
            const response = {
                code: 401,
                message: "Ocorreu um erro ao remover os dados da Cobertura",
                data: {}
            }
            res.json(response);
        }
    }
    
}

export default CoberturaController;