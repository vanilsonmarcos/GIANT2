import { adenda_pagamento } from '@prisma/client';
import { Request, Response } from "express";
import AdendaPagamentoService from "../services/AdendaPagamentoService";
import handleParsingError from '../utils/HandleParsingErrors';
import CustomError from '../utils/CustomError';

class AdendaPagamentoController {
    private adendaPService: AdendaPagamentoService;

    constructor(apService: AdendaPagamentoService) {
        this.adendaPService = apService;

    }

    async getAll(req: Request, res: Response) {
        try {
            const adenda_pagamentos = await this.adendaPService.getAll();
            const response = {
                code: 200,
                message: "Dados dos pagamentos das adendas encontrados com sucesso",
                data: adenda_pagamentos
            };
            res.json(response)
        } catch (error) {
            const response = {
                code: 401,
                message: "Os dados dos  pagamentos das adendas não foram encontrados",
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
            const adenda_pagamento = await this.adendaPService.getByID(id);
            const response = {
                code: 200,
                message: "Dados do pagamento da adenda foram encontrados com sucesso",
                data: adenda_pagamento
            };
            res.json(response);
        } catch (error) {
            const response = {
                code: 401,
                message: "Ocorreu um erro ao carregar os dados do pagamento da adenda",
                data: {},
                error: error
            };
            if (error instanceof CustomError) {
                response.message = error.message;
            }
            res.json(response);
        }
    }

    
    async getByAdendaID(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const adenda_pagamento = await this.adendaPService.getByAdendaID(id.toString());
            const response = {
                code: 200,
                message: "Dados do pagamento da adenda foram encontrados com sucesso",
                data: adenda_pagamento
            };
            res.json(response);
        } catch (error) {
            const response = {
                code: 401,
                message: "Ocorreu um erro ao carregar os dados do pagamento da adenda",
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
        const adenda_pagamento: adenda_pagamento = req.body; // parse body to person data
        try {
            const createdAdenda = await this.adendaPService.criar(adenda_pagamento);
            const response = {
                code: 200,
                message: "Dados do pagamento da adenda inseridos com sucesso",
                data: createdAdenda
            };
            res.json(response);
        } catch (error) {
            const response = {
                code: 401,
                message: "Ocorreu um erro ao inserir os dados dõ pagamento da adenda",
                data: {},
                error: error
            };
            if (error instanceof CustomError) {
                response.message = error.message;
            }
            res.json(response);
        }
    }

    async actualizar(req: Request, res: Response) {
        const adenda_pagamento: adenda_pagamento = req.body;

        if (adenda_pagamento.ID === undefined) {
            return handleParsingError(res, Error("O Id do pagamento da adenda não foi definido"));
        }
        const id = adenda_pagamento.ID.toString();

        try {
            const updatedAdenda = await this.adendaPService.actualizar(id, adenda_pagamento);
            const response = {
                code: 200,
                message: "Dados do pagamento da adenda foram actualizados com sucesso",
                data: updatedAdenda
            };
            res.json(response);
        } catch (error) {
            const response = {
                code: 401,
                message: "Ocorreu um erro ao actualizar os dados do pagamento da adenda",
                data: {},
                error: error
            };
            if (error instanceof CustomError) {
                response.message = error.message;
            }
            res.json(response);
        }
    }

    async remover(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const adenda_pagamento = await this.adendaPService.remover(id);
            if (adenda_pagamento) {
                const response = {
                    code: 200,
                    message: "Dados do pagamento da adenda foram removidos com sucesso",
                    data: adenda_pagamento
                };
                res.json(response);
            }
        } catch (error) {
            const response = {
                code: 401,
                message: "Ocorreu um erro ao remover os dados do pagamento da adenda",
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

export default AdendaPagamentoController;