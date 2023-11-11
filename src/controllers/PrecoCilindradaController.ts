import { Request, Response } from "express";
import PrecoCilindrada from "../entities/PrecoCilindrada";
import Identifier from "../schema/Identifier";
import handleParsingError from "../utils/HandleParsingErrors";
import PrecoCilindradaService from "../services/PrecoCilindradaService";
import PrecoCilindradaSchema from "../schema/PrecoCilindradaSchema";
import { preco_cilindrada } from "@prisma/client";

class PrecoCilindradaController {

    private precoCilindradaService: PrecoCilindradaService;

    constructor(pcService: PrecoCilindradaService) {
       this.precoCilindradaService = pcService;
    }

    // Read/Query a person 
    async getAll(req: Request, res: Response) {
        try {
            const precoCilindradas: preco_cilindrada[] = await this.precoCilindradaService.getAll();
            
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
        const preco_cilindrada: preco_cilindrada = req.body;
        // const parsedPc = PrecoCilindradaSchema.safeParse(pc);
        // if(!parsedPc.success) {
        //     return handleParsingError(res, parsedPc.error);
        // }
        // const safePc:PrecoCilindrada = parsedPc.data;
        try {
            const newPrecoCilindrada = await this.precoCilindradaService.criar(preco_cilindrada);
            const message = {
                code: 200,
                message: "Dados do preço por cilindrada inseridos com sucesso",
                data: newPrecoCilindrada
            }
            res.json(message);
        } catch (error) {
            const response = {
                code: 404,
                message: "Ocorreu um erro ao colectar os dados dos preços por cilindrada",
                data: {},
                error: error
            }
            res.json(response);
        }
    }
    
    async actualizar(req: Request, res: Response) {
        const preco_cilindrada: preco_cilindrada = req.body;
        // const parsedPc = PrecoCilindradaSchema.safeParse(preco_cilindrada);
        // if(!parsedPc.success) {
        //     return handleParsingError(res, parsedPc.error);
        // }
        // const safePc:PrecoCilindrada = parsedPc.data;

        if (preco_cilindrada.ID === undefined){
            return handleParsingError(res, Error("O Id do preço cilindrada não foi definido"));
        }
        const id = preco_cilindrada.ID.toString();
        try {
            const updatedPrecoCilindrada = await this.precoCilindradaService.actualizar(id, preco_cilindrada);
            const response = {
                code: 200,
                message: "Dados do preço cilindrada actualizados com sucesso",
                data: updatedPrecoCilindrada
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
        const parsedID = Identifier.safeParse(id); 
        if(!parsedID.success) {
            return handleParsingError(res, parsedID.error);
        }
        const safeId = parsedID.data.toString();
        try {
            const preco_cilindrada = await this.precoCilindradaService.remover(safeId);
            if (preco_cilindrada) {
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