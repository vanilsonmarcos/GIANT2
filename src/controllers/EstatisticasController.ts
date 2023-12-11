import { Request, Response } from "express";
import EstatisticasService from "../services/EstatisticasService";
import CustomError from "../utils/CustomError";
import { isValidDateFormat,  } from "../utils/helper";

class EstatisticasController {
    private estatService: EstatisticasService;

    constructor(estatService: EstatisticasService) {
        this.estatService = estatService;
    }


    async getAll(req: Request, res: Response) {
        try {
            const allStats = await this.estatService.getAll()
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
            if (!isValidDateFormat(inicio)) {
                throw new CustomError("O formato da data de início deve ser (YYYY-MM-DD)");
            }

            if(!isValidDateFormat(fim)) {
                throw new CustomError("O formato da data do fim deve ser (YYYY-MM-DD)");
            }
            
            const data_inicio = new Date(inicio);
            const data_fim = new Date(fim);
            const allStats = await this.estatService.getAllByInterval(data_inicio, data_fim)
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
            const allApoliceStats = await this.estatService.getAllApolice()

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

    async getAllApoliceByInterval (req: Request, res: Response) {
        const { inicio, fim }  = req.params;
        try {
            if (!isValidDateFormat(inicio)) {
                throw new CustomError("O formato da data de início deve ser (YYYY-MM-DD)");
            }

            if(!isValidDateFormat(fim)) {
                throw new CustomError("O formato da data do fim deve ser (YYYY-MM-DD)");
            }
            
            const data_inicio = new Date(inicio);
            const data_fim = new Date(fim);
            const allApoliceStats = await this.estatService.getAllApoliceByInterval(data_inicio, data_fim);

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

    async getAllClientsByInterval (req: Request, res: Response) {
        const { inicio, fim }  = req.params;
        try {
            if (!isValidDateFormat(inicio)) {
                throw new CustomError("O formato da data de início deve ser (YYYY-MM-DD)");
            }

            if(!isValidDateFormat(fim)) {
                throw new CustomError("O formato da data do fim deve ser (YYYY-MM-DD)");
            }

            const data_inicio = new Date(inicio);
            const data_fim = new Date(fim);
            
            const allClientStats = await this.estatService.getAllClienteByInterval(data_inicio, data_fim);
            const response = {
                code: 200,
                message: "Dados estatisticos dos clientes carregados com sucesso",
                data: allClientStats
            }
            return res.json(response);
        } catch (error) {
            const response = {
                code: 404,
                message: "Ocorreu um erro ao carregar dos dados estatisticos dos clientes",
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