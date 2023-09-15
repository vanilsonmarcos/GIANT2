import {z} from "zod";
const VeiculoCaategoriaSchema = z.object({
    id: z.number(),
    nome: z.string(),
    descricao: z.string()
})

export default VeiculoCaategoriaSchema;