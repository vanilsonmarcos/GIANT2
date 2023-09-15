import { Request, Response } from "express";
import VeiculoRepository from "../repositories/mysql/VeiculoRepository";
import Veiculo from "../entities/Apolice/Veiculo/Veiculo";
import VeiculoService from "../services/VeiculoService";
import Identifier from "../schema/Identifier";
import handleParsingError from "../utils/HandleParsingErrors";

class VeiculoController {
    private veiculoService: VeiculoService;
    constructor(vService: VeiculoService) {
        this.veiculoService = vService;
    }

    async getAll(req: Request, res: Response) {
        try {
            const veiculo: Veiculo[] = await this.veiculoService.getAll();
            const response = {
                code: 200,
                message: "Dados dos veículos encontrados com sucesso",
                data: veiculo
            };
            res.json(response)
        } catch (error) {
            const response = {
                code: 401,
                message: "Os dados dos veículos não foram encontrados",
                data:  {},
                error: error
            };
            res.json(response)
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
            const veiculo = await new VeiculoRepository().getByID(id);
            const response = {
                code: 200,
                message: "Dados do veículo foram encontrados com sucesso",
                data: veiculo
            };
            res.json(response);
        } catch (error) {
            const response = {
                code: 401,
                message: "",
                data: {},
                error: error
            };
            res.json(response);
        }

    }
    
    async getByMatricula(req: Request, res: Response) {
        const { matricula } = req.params;
        try {
            const veiculo = await new VeiculoRepository().getVeiculoByMatricula(matricula);
            const response = {
                code: 200,
                message: "Dados do veículo foram encontrados com sucesso",
                data: veiculo
            };
            res.json(response);
        } catch (error) {
            const response = {
                code:401,
                message: "Os dados do veiculo não foram encontrados usando o a matricula",
                data: {},
                error: error
            };
            res.json(response);
        }

    }

    async criar(req: Request, res: Response) {
        const v: Veiculo = req.body; // parse body to person data
        try {
            const veiculo = await new VeiculoRepository().create(v);
            const response = {
                code: 200,
                message: "Dados da veículo inseridos com sucesso",
                data: veiculo
            };
            res.json(response);
        } catch (error) {
            const response = {
                code: 401,
                message: "Ocorreu um erro ao inserir os dados da veiculo",
                data: {},
                error: error
            }
            res.json(response);
        }
    }

    async actualizar(req: Request, res: Response) {
        const v: Veiculo = req.body;
        if (v.id === undefined){
            return handleParsingError(res, Error("O Id do veiculo não foi definido"));
        }
        const id = v.id.toString();

        try {
            const veiculo = await new VeiculoRepository().update(id, v);
            const response = {
                code: 200,
                message: "Dados do veículo actualizados com sucesso",
                data: veiculo
            };
            res.json(response);
        } catch (error) {
            const response = {
                code: 401,
                message: "Ocorreu um erro ao actualizar os dados da veículo",
                data: {},
                error: error
            }
            res.json(response);
        }
    }

    async remover(req: Request, res: Response) {
        const { unsafeId } = req.params;
        const parsedID = Identifier.safeParse(unsafeId); 
        if(!parsedID.success) {
            return handleParsingError(res, parsedID.error);
        }
        const id = parsedID.data.toString();
        try {
            const result = await new VeiculoRepository().delete(id);
            if (result) {
                const response = {
                    code: 200, 
                    message: "Dados do veiculo removidos com sucesso",
                    data: {}
                };
                res.json(response);
            }
        } catch (error) {
            const response = {
                code: 401,
                message:"Ocorreu um erro ao remover os dados do veiculo", 
                data: {},
                error: error
            };
            res.json(response);
        }
    }
}

export default VeiculoController;