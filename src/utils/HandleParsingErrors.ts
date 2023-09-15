import { Response } from 'express';
const handleParsingError = (res: Response, error: Error) => {
    const response = {
        code: 401,
        message: error.message,
        data: {},
        error: error,
    };
    return res.json(response);
}

export default handleParsingError;