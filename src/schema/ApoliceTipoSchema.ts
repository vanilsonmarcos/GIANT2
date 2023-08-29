import { z } from "zod";
import SiglaSchema from "./SiglaSchema";

const ApoliceTipoSchema = z.object({
    id: z.number(),
    sigla: SiglaSchema,
    nome: z.string(),
    descricao: z.string(),
});

export default ApoliceTipoSchema;