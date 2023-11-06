import { Request, Response} from 'express'
import ApoliceGeneratePDFService from '../services/ApoliceGeneratePDFService';

class ApoliceGeneratePDFController {
    private apoliceGeneratePDF: ApoliceGeneratePDFService;
    constructor (agPDF: ApoliceGeneratePDFService) {
        this.apoliceGeneratePDF = agPDF;
    }

     get(req: Request, res: Response) {
        try {
            this.apoliceGeneratePDF.generatePDF();
        } catch (error) {
            const response = {
                code: 401,
                message: "Failed to generate apolice document",
                data:  {},
                error: error
            };
            res.json(response)
        }
    }
}


export default ApoliceGeneratePDFController;