import { z } from "zod";
import Identifier from "./Identifier";
import EmailSchema from "./EmailSchema";
import PhoneNumberSchema from "./PhoneNumberSchema";

const PessoaEnderecoSchema = z.object({
    id: Identifier.optional(),
    pessoa_id: Identifier.optional(),
    telefone: PhoneNumberSchema,
    telefone_alt: PhoneNumberSchema,
    email: EmailSchema
});


export default PessoaEnderecoSchema;