import { Request, Response, response } from "express";
import PrecoCilindrada from "../entities/PrecoCilindrada";
import PrecoCilindradaRepository from "../repositories/mysql/PrecoCilindradaRepository";
import Identifier from "../schema/Identifier";
import handleParsingError from "../utils/HandleParsingErrors";
import PrecoCilindradaService from "../services/PrecoCilindradaService";

class PrecoCilindradaController {

    private precoCilindradaService: PrecoCilindradaService;

    constructor(pcService: PrecoCilindradaService) {
       this.precoCilindradaService = pcService;
    }

    // Read/Query a person 
    async getAll(req: Request, res: Response) {
        try {
            const precoCilindradas: PrecoCilindrada[] = await this.precoCilindradaService.getAll();
            
            const response = {
                code: 200,
                message: "Dados dos preços por cilindrada foram encontrados com sucesso",
                data: precoCilindradas
            }
            res.json(response);
    
        } catch (error) {
            const response = {
                code: 404,
                message: "Ocorreu um erro ao colectar os dados  dos preços por cilindrada",
                data: {},
                error: error
            }
            res.json(response);
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
            const precoCilindrada = await this.precoCilindradaService.getByID(id);
            const message = {
                code: 200,
                message: "Dados dos preços por cilindrada foram encontrados com sucesso",
                data: precoCilindrada
            }
            res.json(message);
        } catch (error) {
            const response = {
                code: 404,
                message: "Ocorreu um erro ao colectar os dados  dos preços por cilindrada",
                data: {},
                error: error
            }
            res.json(response);
        }
    }
    
    async criar(req: Request, res: Response) {
        const pc: PrecoCilindrada = req.body;
        if (pc.id === undefined){
            return handleParsingError(res, Error("O Id do preço cilindrada não foi definido"));
        }
        
        try {
            const precoCilindrada = await this.precoCilindradaService.criar(pc);
            const message = {
                code: 200,
                message: "Dados do preço por cilindrada inseridos com sucesso",
                data: precoCilindrada
            }
            res.json(message);
        } catch (error) {
            const response = {
                code: 404,
                message: "Ocorreu um erro ao colectar os dados  dos preços por cilindrada",
                data: {},
                error: error
            }
            res.json(response);
        }
    }
    
    async actualizar(req: Request, res: Response) {
        const pc: PrecoCilindrada = req.body;
        if (pc.id === undefined){
            return handleParsingError(res, Error("O Id do preço cilindrada não foi definido"));
        }
        const id = pc.id.toString();
        try {
            const precoCilindrada = await this.precoCilindradaService.actualizar(id, pc);
            const response = {
                code: 200,
                message: "Dados do preço cilindrada actualizados com sucesso",
                data: precoCilindrada
            }
            res.json(response);
        } catch (error) {
            const response = {
                code: 401,
                message: "Ocorreu um erro ao actualizar os dados do preço cilindrada",
                data: {},
                error: error
            }
            res.json(response);
        }
    }
        
    async remover(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const result = await this.precoCilindradaService.remover(id);
    
            if (result) {
                const response = {
                    code: 200,
                    message: "Dados do preço cilindrada removidos com sucesso",
                    data: {}
                }
                res.json(response);
            }
    
        } catch (error) {
            const response = {
                code: 401,
                message: "Ocorreu um erro ao remover os dados do preço cilindrada",
                data: {},
                error: error
            }
            res.json(response);
        }
    }
}

export default PrecoCilindradaController;