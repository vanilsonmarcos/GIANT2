import { z } from "zod";
import Identifier from "./Identifier";
import ApoliceTipoSchema from "./ApoliceTipoSchema";
import ApoliceFracionamentoSchema from "./ApoliceFracionamentoSchema";
import ApoliceEstadoSchema from "./ApoliceEstadoSchema";
import PessoaSchema from "./PessoaSchema";

const ApoliceSchema = z.object({
    id: Identifier.optional(),
    apolice_tipo: ApoliceTipoSchema,
    tomador: PessoaSchema,
    apolice_fracionamento: ApoliceFracionamentoSchema,
    apolice_estado: ApoliceEstadoSchema
 });


export default ApoliceSchema;