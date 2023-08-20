import { Request, Response } from "express";
import VeiculoRepository from "../repositories/mysql/VeiculoRepository";
import Veiculo from "../entities/Apolice/Veiculo/Veiculo";

class VeiculoController {

    constructor() {
       
    }

    // Read/Query a person 
    async getAll(req: Request, res: Response) {
        try {
            const veiculo: Veiculo[] = await new VeiculoRepository().getAll();
            const code = 200;
            const message = "Dados dos veiculos foram encontrados com sucesso";
            const data = veiculo;
            res.json({
                code,
                message,
                data
            })
    
        } catch (error) {
            const code = 401;
            const message = `Os dados dos veiculos não foram encontrados`;
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
            const veiculo = await new VeiculoRepository().getByID(id);
            let code = 200;
            let message = "Dados do veiculo foram encontrados com sucesso";
            let data = veiculo;
            res.json({
                code,
                message,
                data
            })
    
        } catch (error) {
            let code = 401;
            let message = `Os dados do veiculo não foram encontrados usando o id de utilizador : ${id}`;
            let data = {}
            res.json({
                code,
                message,
                data,
                error
            })
        }
    
    }
    async getByMatricula(req: Request, res: Response) {
        const { matricula } = req.params;
        try {
            const veiculo = await new VeiculoRepository().getVeiculoByMatricula(matricula);
            let code = 200;
            let message = "Dados do veiculo foram encontrados com sucesso";
            let data = veiculo;
            res.json({
                code,
                message,
                data
            })
    
        } catch (error) {
            let code = 401;
            let message = `Os dados do veiculo não foram encontrados usando o id de utilizador : ${matricula}`;
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
    async novoVeiculo(req: Request, res: Response) {
        const veiculo: Veiculo = req.body; // parse body to person data
        try {
            const result = await new VeiculoRepository().create(veiculo);
            let code = 200;
            let message = "Dados da veiculo inseridos com sucesso";
            let data = veiculo;
            res.json({
                code,
                message,
                data
            })
    
        } catch (error) {
            let code = 401;
            let message = "Ocorreu um erro ao inserir os dados da veiculo";
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
    
    async actualizarVeiculo(req: Request, res: Response) {
        const { id } = req.params;
        const veiculo: Veiculo = req.body
        try {
            const result = await new VeiculoRepository().update(id, veiculo);
            let code = 200;
            let message = "Dados da pessoa actualizados com sucesso";
            let data = veiculo;
            res.json({
                code,
                message,
                data
            });
        } catch (error) {
            let code = 401;
            let message = "Ocorreu um erro ao actualizar os dados da Pessoa";
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
    
    async removerVeiculo(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const result = await new VeiculoRepository().delete(id);
    
            if (result) {
                let code = 200; // this is ok code 
                let message = "Dados do veiculo removidos com sucesso";
                let data = {};
                res.json({
                    code,
                    message,
                    data,
                })
            }
    
        } catch (error) {
            let data = {};
            let message = "Ocorreu um erro ao remover os dados do veiculo";
            let code = 401; // this is ok code 
            res.json({
                code,
                message,
                data
            })
        }
    }
}

export default VeiculoController;