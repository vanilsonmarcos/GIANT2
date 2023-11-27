import { adenda, pessoa } from "@prisma/client";

interface IAdendaSegurados {
    adenda: adenda,
    segurados: pessoa[]
}

export default IAdendaSegurados;