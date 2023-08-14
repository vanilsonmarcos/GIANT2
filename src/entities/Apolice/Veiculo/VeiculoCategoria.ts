import { DefaultSerializer } from "v8"

interface VeiculoCategoria {
    id: number,
    nome: String, 
    descrição?: String
}

export default VeiculoCategoria;