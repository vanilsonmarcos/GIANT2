import { z } from "zod";
import EmailSchema from "./EmailSchema";
import PhoneNumberSchema from "./PhoneNumberSchema";

const PessoaEnderecoSchema = z.object({
    telefone: PhoneNumberSchema,
    telefone_alt: PhoneNumberSchema,
    email: EmailSchema
});


export default PessoaEnderecoSchema;