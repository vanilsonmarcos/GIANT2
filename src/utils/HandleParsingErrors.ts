import { Response } from 'express';
import { ZodError } from 'zod';
const handleParsingError = (res: Response, error: Error) => {
    const response = {
        code: 401,
        message: error.message,
        data: {},
        error: error,
    };

    if (error instanceof ZodError) {
        response.message = "Email inválido"
      }
    return res.json(response);
}

export default handleParsingError;