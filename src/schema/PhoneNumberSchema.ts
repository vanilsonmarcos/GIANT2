import { z } from "zod";
import validator from "validator"

const PhoneNumberSchema = z.string({
    required_error: "Id é um campo obrigatório",
    invalid_type_error: "Id deve ser um numero",
}).refine(
    (val) => validator.isMobilePhone(val, 'pt-AO'), 
    (val) => ({ message: `O número ${val} não é válido`})
);

export default PhoneNumberSchema;