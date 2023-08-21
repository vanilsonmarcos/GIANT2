import { Request, Response } from "express";
import ApoliceRepository from "../repositories/mysql/ApoliceRepository";
import Apolice from "../entities/Apolice/Apolice";
import { addYearToDate } from "../utils/helper";


class ApoliceController {
    constructor() { }

    async getAllApolice(req: Request, res: Response) {
        try {
            const apolices: Apolice[] = await new ApoliceRepository().getAll();
            const code = 200;
            const message = "Dados das apólices foram encontrados com sucesso";
            const data = apolices;
            res.json({
                code,
                message,
                data
            })

        } catch (error) {
            const code = 404;
            const message = `Os dados das apólices não foram encontrados`;
            const data = {}
            res.json({
                code,
                message,
                data,
                error
            })
        }
    }

    async getApoliceByID(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const apolice: Apolice | Boolean = await new ApoliceRepository().getByID(id);
            if (typeof apolice === 'boolean') {
                const code = 200;
                const message = "Não foram encontrados os dados desta apólice";
                const data = {};
                res.json({
                    code,
                    message,
                    data
                })

            }
            const code = 200;
            const message = "Dados da apólice foram encontrados com sucesso";
            const data = apolice;
            res.json({
                code,
                message,
                data
            })

        } catch (error) {
            const code = 404;
            const message = `Os dados da apólice não foram encontrados`;
            const data = {}
            res.json({
                code,
                message,
                data,
                error
            })
        }
    }


    async criarApolice(req: Request, res: Response) {
        const apolice: Apolice = req.body;
        try {

            // validate the data that is inserted 
            const currentDate = new Date();
            const [userDay, userMonth, userYear] = apolice.data_inicio.split('/').map(Number);
            const userDate = new Date(userYear, userMonth - 1, userDay);

            if (userDate < currentDate) {
                let code = 401;
                let message = "A data de criação da apólcie não pode estar no passado";
                let data = {};
                res.json({
                    code,
                    message,
                    data
                });
            }
            //if date inserted is 16/11/2023 -> the result should be  16/11/2024 
            apolice.data_fim = addYearToDate(apolice.data_inicio);

            //end of data validation

            const result = await new ApoliceRepository().create(apolice);
            if (typeof result === 'boolean') {
                let code = 401;
                let message = "Ocorreu um erro ao criar a apólice";
                let data = apolice;
                res.json({
                    code,
                    message,
                    data
                });
            }
            let code = 200;
            let message = "A apólice foi criada com sucesso";
            let data = apolice;
            res.json({
                code,
                message,
                data
            });
        } catch (error) {
            let code = 401;
            let message = "Ocorreu um erro ao criar a apólice";
            let data = {}
            res.json({
                code,
                message,
                data,
                error
            })
        }
    }

    async actualizarApolice(req: Request, res: Response) {
        const { id } = req.params;
        const apolice: Apolice = req.body
        try {
            const result = await new ApoliceRepository().update(id, apolice);

            if (!result) {
                let code = 200;
                let message = "Ocorreu um erro ao actualizar os dados da apólice";
                let data = apolice;
                res.json({
                    code,
                    message,
                    data
                });
            }
            let code = 200;
            let message = "Dados da apolice foram  actualizados com sucesso";
            let data = apolice;
            res.json({
                code,
                message,
                data
            });
        } catch (error) {
            let code = 401;
            let message = "Ocorreu um erro ao actualizar os dados da apólice";
            let data = {}
            res.json({
                code,
                message,
                data,
                error
            })
        }
    }

    async removerApolice(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const result = await new ApoliceRepository().delete(id);

            if (result) {
                let code = 200; // this is ok code 
                let message = "Dados da aplólice foram removidos com sucesso";
                let data = {};
                res.json({
                    code,
                    message,
                    data,
                })
            }

        } catch (error) {
            let data = {};
            let message = "Ocorreu um erro ao remover os dados da apólice";
            let code = 401; // this is ok code 
            res.json({
                code,
                message,
                data
            })
        }

    }

}

export default ApoliceController;