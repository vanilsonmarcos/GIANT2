import { Request, Response } from "express";
import PrecoCilindrada from "../entities/PrecoCilindrada";
import PrecoCilindradaRepository from "../repositories/mysql/PrecoCilindradaRepository";

class PrecoCilindradaController {

    constructor() {
       
    }

    // Read/Query a person 
    async getAll(req: Request, res: Response) {
        try {
            const precoCilindradas: PrecoCilindrada[] = await new PrecoCilindradaRepository().getAll();
            const code = 200;
            const message = "Dados dos preços por cilindrada foram encontrados com sucesso";
            const data = precoCilindradas;
            res.json({
                code,
                message,
                data
            });
    
        } catch (error) {
            const code = 404;
            const message = `Ocorreu um erro ao colectar os dados  dos preços por cilindrada`;
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
            const precoCilindrada = await new PrecoCilindradaRepository().getByID(id);
            let code = 200;
            let message = "Dados dos preços por cilindrada foram encontrados com sucesso";
            let data = precoCilindrada;
            res.json({
                code,
                message,
                data
            })
    
        } catch (error) {
            let code = 401;
            let message = `Ocorreu um erro ao colectar os dados dos preço por cilindrada usando o id de utilizador : ${id}`;
            let data = {}
            res.json({
                code,
                message,
                data,
                error
            })
        }
    
    }
    
    // Create a new person 
    async novoPrecoCilindrada(req: Request, res: Response) {
        const rprecoCilindrada: PrecoCilindrada = req.body; // parse body to person data
        try {
            const result = await new PrecoCilindradaRepository().create(rprecoCilindrada);
            let code = 200;
            let message = "Dados do preço por cilindrada inseridos com sucesso";
            let data = rprecoCilindrada;
            res.json({
                code,
                message,
                data
            })
    
        } catch (error) {
            let code = 401;
            let message = "Ocorreu um erro ao inserir os dados preço por cilindrada";
            let data = {}
            res.json({
                code,
                message,
                data,
                error
            })
        }
    
    }
    // Update an existent person
    
    async actualizarPrecoCilindrada(req: Request, res: Response) {
        const { id } = req.params;
        const precoCilindrada: PrecoCilindrada = req.body
        try {
            const result = await new PrecoCilindradaRepository().update(id, precoCilindrada);
            let code = 200;
            let message = "Dados do preço cilindrada actualizados com sucesso";
            let data = precoCilindrada;
            res.json({
                code,
                message,
                data
            });
        } catch (error) {
            let code = 401;
            let message = "Ocorreu um erro ao actualizar os dados do preço cilindrada";
            let data = {}
            res.json({
                code,
                message,
                data,
                error
            })
        }
    }
    
    // Delete a person 
    
    async removerPrecoCilindrada(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const result = await new PrecoCilindradaRepository().delete(id);
    
            if (result) {
                let code = 200; // this is ok code 
                let message = "Dados do preço cilindrada removidos com sucesso";
                let data = {};
                res.json({
                    code,
                    message,
                    data,
                })
            }
    
        } catch (error) {
            let data = {};
            let message = "Ocorreu um erro ao remover os dados do preço cilindrada";
            let code = 401; // this is ok code 
            res.json({
                code,
                message,
                data
            })
        }
    }
      

}

export default PrecoCilindradaController;