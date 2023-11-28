import { Request, Response } from "express";
import VeiculoService from "../services/VeiculoService";
import Identifier from "../schema/Identifier";
import handleParsingError from "../utils/HandleParsingErrors";
import { veiculo } from "@prisma/client";
import CustomError from "../utils/CustomError";

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
                data: {},
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
                message: "Ocorreu um erro ao carregar os dados do veículo",
                data: {},
                error: error
            };
            if (error instanceof CustomError) {
                response.message = error.message;
            }
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
                code: 401,
                message: "Os dados do veiculo não foram encontrados usando o a matricula",
                data: {},
                error: error
            };
            if (error instanceof CustomError) {
                response.message = error.message;
            }
            res.json(response);
        }
    }

    async getAllCategoria(req: Request, res: Response) {
        try {
            const veiculo_categoria = await this.veiculoService.getAllVeiculoCategoria();
            const response = {
                code: 200,
                message: "Dados das categorias de veiculos foram encontrados com sucesso",
                data: veiculo_categoria
            };
            res.json(response);
        } catch (error) {
            const response = {
                code: 401,
                message: "As categorias dos veiculos não foram encontrados",
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
        const veiculo: veiculo = req.body; // parse body to person data
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
            if (error instanceof CustomError) {
                response.message = error.message;
            }
            res.json(response);
        }
    }

    async actualizar(req: Request, res: Response) {
        const veiculo: veiculo = req.body;
        if (veiculo.ID === undefined) {
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
            if (error instanceof CustomError) {
                response.message = error.message;
            }
            res.json(response);
        }
    }

    async remover(req: Request, res: Response) {
        const { id } = req.params;
        const parsedID = Identifier.safeParse(id);
        if (!parsedID.success) {
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
                message: "Ocorreu um erro ao remover os dados do veiculo",
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

export default VeiculoController;