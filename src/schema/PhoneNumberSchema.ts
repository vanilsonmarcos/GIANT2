import { z } from "zod";

const AngolanPhonePattern = /^\+244[29]\d{8}$/;

const PhoneNumberSchema = z.string({
    required_error: "Id é um campo obrigatório",
    invalid_type_error: "Id deve ser um número",
}).trim().regex(AngolanPhonePattern);

export default PhoneNumberSchema;