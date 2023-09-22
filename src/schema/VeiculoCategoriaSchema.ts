import {z} from "zod";
const VeiculoCategoriaSchema = z.object({
    id: z.number(),
    nome: z.string(),
    descricao: z.string()
})

export default VeiculoCategoriaSchema;