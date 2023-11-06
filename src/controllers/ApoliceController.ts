import { Request, Response } from "express";
import ApoliceService from "../services/ApoliceService";
import Identifier from "../schema/Identifier";
import handleParsingError from "../utils/HandleParsingErrors";
import Apolice from "../entities/Apolice/Apolice";

class ApoliceController {
    private apoliceService: ApoliceService;
    constructor(vService: ApoliceService) {
        this.apoliceService = vService;
    }

    async getAll(req: Request, res: Response) { 
        try {
            const apolice: Apolice[] = await this.apoliceService.getAll();
            const response = {
                code: 200,
                message: "Dados das apolices encontrados com sucesso",
                data: apolice
            };
            res.json(response)
        } catch (error) {
            const response = {
                code: 401,
                message: "Os dados das apolices não foram encontrados",
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
            const veiculo = await this.apoliceService.getByID(id);
            const response = {
                code: 200,
                message: "Dados da apólice foram encontrados com sucesso",
                data: veiculo
            };
            res.json(response);
        } catch (error) {
            const response = {
                code: 401,
                message: "Ocorreu um erro ao inserir os dados da apólice",
                data: {},
                error: error
            };
            res.json(response);
        }
    }
    
    async criar(req: Request, res: Response) {
        // const apolice: Apolice = req.body; // parse body to person data
        // const parsedApolice = ApoliceSchema.safeParse(apolice);
        // if(!parsedApolice.success) {
        //     return handleParsingError(res, parsedApolice.error);
        // }
        // const safeApolice:Apolice = parsedApolice.data;
        // try {
        //     const veiculo = await this.apoliceService.criar(safeApolice);
        //     const response = {
        //         code: 200,
        //         message: "Dados da apólice inseridos com sucesso",
        //         data: veiculo
        //     };
        //     res.json(response);
        // } catch (error) {
        //     const response = {
        //         code: 401,
        //         message: "Ocorreu um erro ao inserir os dados da apólice",
        //         data: {},
        //         error: error
        //     }
        //     res.json(response);
        // }
    }
    
    async actualizar(req: Request, res: Response) { 
        // const apolice: Apolice = req.body;
        // const parsedApolice = ApoliceSchema.safeParse(apolice);
        // if(!parsedApolice.success) {
        //     return handleParsingError(res, parsedApolice.error);
        // }
        // const safeApolice:Apolice = parsedApolice.data;

        // if (safeApolice.id === undefined){
        //     return handleParsingError(res, Error("O Id da apólice não foi definido"));
        // }
        // const id = safeApolice.id.toString();

        // try {
        //     const veiculo = await this.apoliceService.actualizar(id, safeApolice);
        //     const response = {
        //         code: 200,
        //         message: "Dados da apólice actualizados com sucesso",
        //         data: veiculo
        //     };
        //     res.json(response);
        // } catch (error) {
        //     const response = {
        //         code: 401,
        //         message: "Ocorreu um erro ao actualizar os dados da apólice",
        //         data: {},
        //         error: error
        //     }
        //     res.json(response);
        // }
    }
    
    async remover(req: Request, res: Response) {
        // const { id } = req.params;
        // const parsedID = Identifier.safeParse(id);
        // if (!parsedID.success) {
        //     return handleParsingError(res, parsedID.error);
        // }
        // const safeId = parsedID.data.toString();
        // try {
        //     const result = await this.apoliceService.remover(safeId);
        //     if (result) {
        //         const response = {
        //             code: 200,
        //             message: "Dados da apólice foram removidos com sucesso",
        //             data: {}
        //         };
        //         res.json(response);
        //     }
        // } catch (error) {
        //     const response = {
        //         code: 401,
        //         message: "Ocorreu um erro ao remover os dados da apólice",
        //         data: {},
        //         error: error
        //     };
        //     res.json(response);
        // }
    }
}

export default ApoliceController