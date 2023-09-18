import { z } from "zod";

const Identifier = z.coerce.number({
    required_error: "Id é um campo obrigatório",
    invalid_type_error: "Id deve ser um número",
}).positive();

export default Identifier;