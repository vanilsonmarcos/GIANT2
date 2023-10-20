import VeiculoCategoria from "./Veiculo/VeiculoCategoria";

interface PrecoCilindrada {
    id?: number,
    nome: string,
    lotacao: number,
    veiculo_categoria_id: number,
    premio_trimestral: number,
    premio_semestral:number,
    premio_anual: number,
    peso_kg: number,
    cilindrada_min: number,
    cilindrada_max: number,
}

export default PrecoCilindrada;