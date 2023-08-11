import { Request, Response } from "express";
import { successResponseService, errorResponseService } from "../services/HttpRequestService";

class PessoaController {

    // Read/Query a person 
    async getByID(req:Request, res:Response){
        try {
            const { person_id } = req.params;
            const resultSet = await getPersonByID();
            return successResponseService(res, resultSet);
        } catch (error) {
            return errorResponseService(res);
        }
    }

    // Create a new person 

    // Update an existent person

    // Delete a person 


}


export default PessoaController;