import { Request, Response} from 'express'
import ApoliceGeneratePDFService from '../services/ApoliceGeneratePDFService';

class ApoliceGeneratePDFController {
    private apoliceGeneratePDF: ApoliceGeneratePDFService;
    constructor (agPDF: ApoliceGeneratePDFService) {
        this.apoliceGeneratePDF = agPDF;
    }

    async get(req: Request, res: Response) {
        try {
            await this.apoliceGeneratePDF.generatePDF();
        } catch (error) {
            const response = {
                code: 401,
                message: "Failed to generate apolice",
                data:  {},
                error: error
            };
            res.json(response)
        }
    }
}


export default ApoliceGeneratePDFController;