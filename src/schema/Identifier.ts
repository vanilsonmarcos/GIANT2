import { z } from "zod";

const Identifier = z.number({
    required_error: "Id é um campo obrigatório",
    invalid_type_error: "Id deve ser um numero",
}).positive();

export default Identifier;