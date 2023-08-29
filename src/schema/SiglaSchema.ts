import { z } from "zod";

const SiglaSchema = z.string({
    required_error: "Sigla é um campo obrigatório",
    invalid_type_error: "Sigla deve ser do tipo string",
}).max(5, {
    message: "Sigla deve conter 5 caracteres"
}).min(2, {
    message: "Sigla deve conter 2 caracteres"
})

export default SiglaSchema;