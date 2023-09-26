import {z} from "zod";
import Identifier from "./Identifier";

const ApoliceEstadoSchema = z.object({
    id: Identifier.optional(),
    nome: z.string(),
    descricao:z.string().optional() 
});

export default ApoliceEstadoSchema; 