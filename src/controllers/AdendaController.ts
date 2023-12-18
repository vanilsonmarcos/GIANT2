import { Request, Response } from "express";
import { adenda } from "@prisma/client";
import AdendaService from "../services/AdendaService";
import handleParsingError from "../utils/HandleParsingErrors";
import CustomError from "../utils/CustomError";
import IAdendaItems from "../entities/IAdendaItems";
import IAdendaSegurados from "../entities/IAdendaSegurados";

class AdendaController {
    private adendaService: AdendaService;
    constructor(aService: AdendaService) {
        this.adendaService = aService;
    }

    async getAll(req: Request, res: Response) { 
        try {
            const adendas = await this.adendaService.getAll();
            const response = {
                code: 200,
                message: "Dados das adendas encontrados com sucesso",
                data: adendas
            };
            res.json(response)
        } catch (error) {
            const response = {
                code: 401,
                message: "Os dados das adendas não foram encontrados",
                data:  {},
                error: error
            };
            if (error instanceof CustomError) { 
                response.message = error.message
            }
            res.json(response)
        }
    }
    
    async getByID(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const adenda = await this.adendaService.getByID(id);
            const response = {
                code: 200,
                message: "Dados da adenda foram encontrados com sucesso",
                data: adenda
            };
            res.json(response);
        } catch (error) {
            const response = {
                code: 401,
                message: "Ocorreu um erro ao carregar os dados da adenda",
                data: {},
                error: error
            };
            if (error instanceof CustomError) { 
                response.message = error.message
            }
            res.json(response);
        }
    }

    async getByApoliceID(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const adenda = await this.adendaService.getByApoliceID(id);
            const response = {
                code: 200,
                message: "Dados da adenda foram encontrados com sucesso",
                data: adenda
            };
            res.json(response);
        } catch (error) {
            const response = {
                code: 401,
                message: "Ocorreu um erro ao carregar os dados da adenda",
                data: {},
                error: error
            };
            if (error instanceof CustomError) { 
                response.message = error.message
            }
            res.json(response);
        }
    }

    async getSeguradosByAdendaID(req: Request, res:Response) {
        const { id } = req.params;
        try {
            const segurados = await this.adendaService.getSeguradosByAdendaID(id);
            const response = {
                code: 200,
                message: "Dados dos segurados da adenda foram encontrados com sucesso",
                data: segurados
            };
            res.json(response);
        } catch (error) {
            const response = {
                code: 401,
                message: "Ocorreu um erro ao carregar os dados dos segurados da adenda",
                data: {},
                error: error
            };
            if (error instanceof CustomError) { 
                response.message = error.message
            }
            res.json(response);
        }
    }

    async getVeiculosByAdendaID(req: Request, res:Response) {
        const { id } = req.params;
        try {
            const veiculos = await this.adendaService.getVeiculosByAdendaID(id);
            const response = {
                code: 200,
                message: "Dados dos veículos da adenda foram encontrados com sucesso",
                data: veiculos
            };
            res.json(response);
        } catch (error) {
            const response = {
                code: 401,
                message: "Ocorreu um erro ao carregar os dados veículos da adenda",
                data: {},
                error: error
            };
            if (error instanceof CustomError) { 
                response.message = error.message
            }
            res.json(response);
        }
    }
    
    async criar(req: Request, res: Response) {
        const adenda: adenda = req.body; // parse body to person data
        try {
            const createdAdenda = await this.adendaService.criar(adenda);
            const response = {
                code: 200,
                message: "Dados da adenda inseridos com sucesso",
                data: createdAdenda
            };
            res.json(response);
        } catch (error) {
            const response = {
                code: 401,
                message: "Ocorreu um erro ao inserir os dados da adenda",
                data: {},
                error: error
            }
            if (error instanceof CustomError) { 
              response.message = error.message
            }
            res.json(response);
        }
    }
    
    async actualizar(req: Request, res: Response) { 
        const adenda: adenda = req.body;

        if (adenda.ID === undefined){
            return handleParsingError(res, Error("O Id da adenda não foi definido"));
        }

        try {
            const updatedAdenda = await this.adendaService.actualizar(adenda.ID.toString(), adenda);
            const response = {
                code: 200,
                message: "Dados da adenda actualizados com sucesso",
                data: updatedAdenda
            };
            res.json(response);
        } catch (error) {
            const response = {
                code: 401,
                message: "Ocorreu um erro ao actualizar a adenda",
                data: {},
                error: error
            }
            if (error instanceof CustomError) { 
                response.message = error.message
            }
            res.json(response);
        }
    }
    
    async remover(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const adenda = await this.adendaService.remover(id);
            if (adenda) {
                const response = {
                    code: 200,
                    message: "Adenda removida com sucesso",
                    data: adenda
                };
                res.json(response);
            }
        } catch (error) {
            const response = {
                code: 401,
                message: "Ocorreu um erro ao remover a adenda",
                data: {},
                error: error
            };
            if (error instanceof CustomError) { 
                response.message = error.message
            }
            res.json(response);
        }
    }

    async calculatePremio(req: Request, res: Response) {
        const adenda: adenda = req.body;
        const adenda_premio = await this.adendaService.calculateAdendaPremio(adenda.ID.toString());
        try {
            const response = {
                code: 200,
                message: "O premio da adenda foi calculado e adicionado com sucesso",
                data: adenda_premio
            };
            res.json(response);
        } catch (error) {
            const response = {
                code: 401,
                message: "Ocorreu um ao efectuar os calculos do premio da adenda",
                data: {},
                error: error
            }
            if (error instanceof CustomError) { 
              response.message = error.message
            }
            res.json(response);
        }
    }

    async adicionarItemsSegurado(req: Request, res:Response) {
        const data:IAdendaItems = req.body; 
        try {
            const createdAdenda = await this.adendaService.adicionarItemsSegurado(data.adenda.ID.toString(), data.items);
            const response = {
                code: 200,
                message: "Items da adenda inseridos com sucesso",
                data: createdAdenda
            };
            res.json(response);
        } catch (error) {
            const response = {
                code: 401,
                message: "Ocorreu um erro ao inserir os items a adenda",
                data: {},
                error: error
            }
            if (error instanceof CustomError) { 
              response.message = error.message
            }
            res.json(response);
        }
    }

    async adicionarSegurados(req: Request, res:Response) {
        const data: IAdendaSegurados = req.body; 
        try {
            const createdAdenda = await this.adendaService.adicionarSegurados(data.adenda.ID.toString(), data.segurados);
            const response = {
                code: 200,
                message: "Segurados adicionados a adenda com sucesso",
                data: createdAdenda
            };
            res.json(response);
        } catch (error) {
            const response = {
                code: 401,
                message: "Ocorreu um erro ao adicionar os segurados a adenda",
                data: {},
                error: error
            }
            if (error instanceof CustomError) { 
              response.message = error.message
            }
            res.json(response);
        }
    }
}

export default AdendaController;