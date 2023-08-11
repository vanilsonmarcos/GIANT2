import { Response} from 'express';
import IEntity from '../entities/IEntity';


const successResponseService = async (res:Response, resultSet:IEntity) => {
    return res.status(res.statusCode).json({
        response: { 
            statusCode: res.statusCode,
            statusMessage: "Success",
        },
        data: resultSet// return an empty object is better than null
    });
}

const errorResponseService = async (res:Response) => {
    return res.status(res.statusCode).json({
        response: { 
            statusCode: res.statusCode,
            statusMessage: res.statusMessage,
        },
        data: {  } // return an empty object is better than null
    });
}


export {successResponseService, errorResponseService };


