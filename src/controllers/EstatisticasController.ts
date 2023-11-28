import { Request, Response } from "express";
import EstatisticasService from "../services/EstatisticasService";
import CustomError from "../utils/CustomError";
import { isValidInterval } from "../utils/helper";

class EstatisticasController {
    private estatService: EstatisticasService;

    constructor(estatService: EstatisticasService) {
        this.estatService = estatService;
    }


    async getAll(req: Request, res: Response) {
        try {
            const allStats = this.estatService.getAll()
            const response = {
                code: 200,
                message: "Dados estatisticos carregados com sucesso",
                data: allStats
            };
            return res.json(response);
        } catch (error) {
            const response = {
                code: 404,
                message: "Ocorreu um erro ao carregar dos dados estatisticos",
                data: {},
                error: error
            };
            if (error instanceof CustomError) {
                response.message = error.message;
            }
            return res.json(response)
        }
    }

    async getAllByInterval(req: Request, res: Response) {
        const { inicio, fim }  = req.params;
        try {
            // Parse the Date parameters
            const data_inicio = new Date(inicio);
            const data_fim = new Date(fim);

            isValidInterval(data_inicio, data_fim);

  
            const allStats = this.estatService.getAllByInterval(data_inicio, data_fim)
            const response = {
                code: 200,
                message: "Dados estatisticos carregados com sucesso",
                data: allStats
            };
            return res.json(response);
        } catch (error) {
            const response = {
                code: 404,
                message: "Ocorreu um erro ao carregar dos dados estatisticos",
                data: {},
                error: error
            };
            if (error instanceof CustomError) {
                response.message = error.message;
            }
            return res.json(response)
        }
    }



    async getAllApolice (req: Request, res: Response) {
        try {
            const allApoliceStats = this.estatService.getAllApolice()

            const response = {
                code: 200,
                message: "Dados estatisticos das apólices carregados com sucesso",
                data: allApoliceStats
            }
            return res.json(response);
        } catch (error) {
            const response = {
                code: 404,
                message: "Ocorreu um erro ao carregar dos dados estatisticos das apólices",
                data: {},
                error: error
            };
            if (error instanceof CustomError) {
                response.message = error.message;
            }
            return res.json(response)
        }
    }

    async getAllClients (req: Request, res: Response) {
        try {
            const allClientStats = await this.estatService.getAllCliente();
            const response = {
                code: 200,
                message: "Dados estatisticos dos clientes carregados com sucesso",
                data: allClientStats
            }
            return res.json(response);
        } catch (error) {
            const response = {
                code: 404,
                message: "Ocorreu um erro ao carregar dos dados estatisticos das apólices",
                data: {},
                error: error
            };
            if (error instanceof CustomError) {
                response.message = error.message;
            }
            return res.json(response)
        }
    }
}

export default EstatisticasController;