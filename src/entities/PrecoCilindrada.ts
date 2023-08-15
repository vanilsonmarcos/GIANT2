import VeiculoCategoria from "./Apolice/Veiculo/VeiculoCategoria";

interface PrecoCilindrada {
    id: Number,
    nome: String,
    lotacao: Number,
    veiculo_categoria_id: VeiculoCategoria,
    premio_trimestral: Number,
    premio_semestral:Number,
    pemio_anual: Number,
    peso_kg: Number,
    cilindrada_min: Number,
    cilindrada_max: Number,
}

export default PrecoCilindrada;