import { Request, Response } from "express";
import ApoliceRepository from "../repositories/mysql/ApoliceRepository";
import ApolicePagamento from "../entities/Apolice/ApolicePagamento";


class ApolicePagamentoConttroller {
    constructor() { }


    async getApolicePagamentoByID(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const result = await new ApoliceRepository()
                .getApolicePagamentoByID(id);
            if (!result) {
                let code = 401;
                let message = "Não foi possivel encontrar o pagamanero associado a apólice";
                let data = {};
                res.json({
                    code,
                    message,
                    data
                })

            }

            let code = 200;
            let message = "Os pagamentos associados a apólice foram carregados com sucesso";
            let data = result;
            res.json({
                code,
                message,
                data
            })

        } catch (error) {
            let code = 401;
            let message = "Ocorreu um erro na pesquisa do(s) pagamento(s) associados a apólice";
            let data = {}
            res.json({
                code,
                message,
                data,
                error
            })
        }

    }


    async getAllApolicePagamentoByApoliceID(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const result = await new ApoliceRepository()
                .getAllApolicePagamentoByApoliceID(id);
            if (!result) {
                let code = 401;
                let message = "Não foi possivel encontrar um pagamanero associado a apólice";
                let data = {};
                res.json({
                    code,
                    message,
                    data
                })

            }

            let code = 200;
            let message = "Os pagamentos associados a apólice foram carregados com sucesso";
            let data = result;
            res.json({
                code,
                message,
                data
            })

        } catch (error) {
            let code = 401;
            let message = "Ocorreu um erro na pesquisa do(s) pagamento(s) associados a apólice";
            let data = {}
            res.json({
                code,
                message,
                data,
                error
            })
        }
    }


    async addApolicePagamentoByApoliceID(req: Request, res: Response) {
        const { id } = req.params;

        // TODO validate data before send to database...
        const apolicePagamento: ApolicePagamento = req.body;

        try {
            const result = await new ApoliceRepository()
                .addApolicePagamentoByApoliceID(id, apolicePagamento);
            if (!result) {
                let code = 401;
                let message = "O pagamento efectuado não foi adicionado/associado a apólice";
                let data = {};
                res.json({
                    code,
                    message,
                    data
                })

            }

            let code = 200;
            let message = `O pagamento efectuado foi adicionado/associado a apólice:  ${apolicePagamento.apolice_id}`;
            let data = apolicePagamento;
            res.json({
                code,
                message,
                data
            })

        } catch (error) {
            let code = 401;
            let message = "Ocorreu um erro ao  adicionar/associar o pagamento a apólice";
            let data = {}
            res.json({
                code,
                message,
                data,
                error
            })
        }


    }



}


export default ApolicePagamentoConttroller;