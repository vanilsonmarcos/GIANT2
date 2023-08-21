import { Request, Response } from "express";
import CoberturaRepository from "../repositories/mysql/CoberturaRepository";
import Cobertura from "../entities/Cobertura";

class CoberturaController {
    constructor() {

    }

    // Read/Query  
    async getAll(req: Request, res: Response) {
        try {
            const coberturas: Cobertura[] = await new CoberturaRepository().getAll();
            const code = 200;
            const message = "Dados das Coberturas foram encontrados com sucesso";
            const data = coberturas;
            res.json({
                code,
                message,
                data
            })
    
        } catch (error) {
            const code = 404;
            const message = `Occoreu um erro ao colectar dos dados das Coberturas`;
            const data = {}
            res.json({
                code,
                message,
                data,
                error
            })
        }
    
    }
    
    async getByID(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const pessoa = await new CoberturaRepository().getByID(id);
            let code = 200;
            let message = "Dados da Cobertura foram encontrados com sucesso";
            let data = pessoa;
            res.json({
                code,
                message,
                data
            })
    
        } catch (error) {
            let code = 401;
            let message = `Os dados da Cobertura não foram encontrados usando o id da Cobertura : ${id}`;
            let data = {}
            res.json({
                code,
                message,
                data,
                error
            })
        }
    
    }
    
    // Create a
    async novaCobertura(req: Request, res: Response) {
        const cobertura: Cobertura = req.body; // parse body to cobertura data
        try {
            const result = await new CoberturaRepository().create(cobertura);
            let code = 200;
            let message = "Dados da Cobertura inseridos com sucesso";
            let data = cobertura;
            res.json({
                code,
                message,
                data
            })
    
        } catch (error) {
            let code = 401;
            let message = "Ocorreu um erro ao inserir os dados da Cobertura";
            let data = {}
            res.json({
                code,
                message,
                data,
                error
            })
        }
    
    }
    
    // Update
    async actualizarCobertura(req: Request, res: Response) {
        const { id } = req.params;
        const cobertura: Cobertura = req.body
        try {
            const result = await new CoberturaRepository().update(id, cobertura);
            let code = 200;
            let message = "Dados da Cobertura actualizados com sucesso";
            let data = cobertura;
            res.json({
                code,
                message,
                data
            });
        } catch (error) {
            let code = 401;
            let message = "Ocorreu um erro ao actualizar os dados da Cobertura";
            let data = {}
            res.json({
                code,
                message,
                data,
                error
            })
        }
    }
    
    // Delete  
    async removerCobertura(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const result = await new CoberturaRepository().delete(id);
    
            if (result) {
                let code = 200; // this is ok code 
                let message = "Dados da Cobertura removidos com sucesso";
                let data = {};
                res.json({
                    code,
                    message,
                    data,
                })
            }
    
        } catch (error) {
            let code = 401; // this is ok code 
            let message = "Ocorreu um erro ao remover os dados da Cobertura";
            let data = {};
            res.json({
                code,
                message,
                data
            })
        }
    }
    
}

export default CoberturaController;