import { Request, Response } from "express";
import VeiculoService from "../services/VeiculoService";
import Identifier from "../schema/Identifier";
import handleParsingError from "../utils/HandleParsingErrors";
import { veiculo } from "@prisma/client";

class VeiculoController {
    private veiculoService: VeiculoService;
    constructor(vService: VeiculoService) {
        this.veiculoService = vService;
    }

    async getAll(req: Request, res: Response) {
        try {
            const veiculos: veiculo[] = await this.veiculoService.getAll();
            const response = {
                code: 200,
                message: "Dados dos veículos encontrados com sucesso",
                data: veiculos
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
            const veiculo = await this.veiculoService.getByID(id);
            const response = {
                code: 200,
                message: "Dados do veículo foram encontrados com sucesso",
                data: veiculo
            };
            res.json(response);
        } catch (error) {
            const response = {
                code: 401,
                message: "Ocorreu um erro ao inserir os dados do veículo",
                data: {},
                error: error
            };
            res.json(response);
        }

    }
    
    async getByMatricula(req: Request, res: Response) {
        const { matricula } = req.params;
        try {
            const veiculo = await this.veiculoService.getByMatricola(matricula);
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
        const veiculo: veiculo = req.body; // parse body to person data
        // const parsedVeiculo = VeiculoSchema.safeParse(veiculo);
        // if(!parsedVeiculo.success) {
        //     return handleParsingError(res, parsedVeiculo.error);
        // }
        // const safeVeiculo:Veiculo = parsedVeiculo.data;
        try {
            const createdVeiculo = await this.veiculoService.criar(veiculo);
            const response = {
                code: 200,
                message: "Dados do veículo inseridos com sucesso",
                data: createdVeiculo
            };
            res.json(response);
        } catch (error) {
            const response = {
                code: 401,
                message: "Ocorreu um erro ao inserir os dados do veiculo",
                data: {},
                error: error
            }
            res.json(response);
        }
    }

    async actualizar(req: Request, res: Response) {
        const veiculo: veiculo = req.body;
        // const parsedVeiculo = VeiculoSchema.safeParse(veiculo);
        // if(!parsedVeiculo.success) {
        //     return handleParsingError(res, parsedVeiculo.error);
        // }
        // const safeVeiculo:Veiculo = parsedVeiculo.data;

        if (veiculo.ID === undefined){
            return handleParsingError(res, Error("O Id do veiculo não foi definido"));
        }
        const id = veiculo.ID.toString();

        try {
            const updatedVeiculo = await this.veiculoService.actualizar(id, veiculo);
            const response = {
                code: 200,
                message: "Dados do veículo actualizados com sucesso",
                data: updatedVeiculo
            };
            res.json(response);
        } catch (error) {
            const response = {
                code: 401,
                message: "Ocorreu um erro ao actualizar os dados do veículo",
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
            const veiculo = await this.veiculoService.remover(safeId);
            if (veiculo) {
                const response = {
                    code: 200, 
                    message: "Dados do veiculo removidos com sucesso",
                    data: veiculo
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