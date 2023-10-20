import { Service } from "typedi";
import Veiculo from "../../entities/Veiculo/Veiculo";
import IVeiculoReposiroty from "../IVeiculoRepository";
import generateVeiculo from "../../entities/Veiculo/Helper";
import IVeiculoCategoria from "../IVeiculoCategoria";
import VeiculoCategoria from "../../entities/Veiculo/VeiculoCategoria";
import { veiculo } from "@prisma/client";
import prisma from "../PrismaClient";

@Service()
class VeiculoRepository implements IVeiculoReposiroty<Veiculo>, IVeiculoCategoria<VeiculoCategoria>{
    async getVeiculoByMatricula(matricula: string): Promise<Veiculo> {
        const v: veiculo | null = await prisma.veiculo.findUnique({
            where: {
                MATRICULA: matricula
            },
            include: {
              veiculo_categoria: true  
            }
        });    

        if (v === null) {
            throw Error("Não Foi encontrado um veiculo com a matricula referenciada");
        }
        return generateVeiculo(v);     
    }
    
    async getAll(): Promise<Veiculo[]> {
        const v = await prisma.veiculo.findMany({
            include:{
                veiculo_categoria: true
            },
            take: 100
        });

        let veiculos:Veiculo[] = [];
        if (v !== null) {
            for (const item of v) {
                const veiculo:Veiculo = generateVeiculo(item);
                veiculos.push(veiculo);
            }
        }
        return veiculos;
    }

    async getByID(id: string): Promise<Veiculo> {
        const v = await prisma.veiculo.findUnique({
            where: {
                ID: parseInt(id)
            },
            include: {
                veiculo_categoria: true
            }
        });
        if (v === null) {
            throw Error("Não Foi encontrado um veiculo com a matricula referenciada");
        }
        
        return generateVeiculo(v);
    }
    async create(item: Veiculo): Promise<Veiculo> {      
        const v = await prisma.veiculo.create({
            data: {
                VEICULO_CATEGORIA_ID: item.veiculo_categoria_id,
                MATRICULA: item.matricula,
                MARCA: item.marca,
                MODELO: item.modelo,
                ANO_AQUISICAO: item.ano_aquisicao,
                CAPITAL_AQUISICAO: item.capital_aquisicao,
                PESO_BRUTO: item.peso_bruto,
                N_LOTACAO: item.n_lotacao,
                ANO_FABRICO: item.ano_fabrico,
                CILINDRADA: item.cilindrada,
                REF_CHASSI: item.ref_chassi,
                DESCRICAO: item.descricao
            },
        }); 
        if (v !== null) {
            // Set the id to the object after insert in database
            item.id = v.ID;
            return item;
        }
        throw Error("Ocorreu um erro ao criar o veiculo");
    }


    async update(id: string, item: Veiculo): Promise<Veiculo> {

        const v = await prisma.veiculo.update({   
             where: {
                ID: parseInt(id)
            },
            data: {
                VEICULO_CATEGORIA_ID : item.veiculo_categoria_id,
                MATRICULA : item.matricula,
                MARCA : item.marca,
                MODELO : item.modelo,
                ANO_AQUISICAO : item.ano_aquisicao,
                CAPITAL_AQUISICAO : item.capital_aquisicao,
                PESO_BRUTO : item.peso_bruto,
                N_LOTACAO : item.n_lotacao,
                ANO_FABRICO : item.ano_fabrico,
                CILINDRADA : item.cilindrada,
                REF_CHASSI : item.ref_chassi,
                DESCRICAO : item.descricao
            },
         
        });
        if (v !== null) {
            return item;
        }
        throw Error("Ocorreu um erro ao actualizar od dados do veiculo")
    }

    async delete(id: string): Promise<Boolean> {
        const v = await prisma.veiculo.delete({
            where: {
               ID: parseInt(id) 
            }    
        });
        if (v !== null) {
            return true;
        }
        return false;
    }


    async getAllVeiculoCategoria(): Promise<VeiculoCategoria[]> {
        const v_cat = await prisma.veiculo_categoria.findMany({
            take: 100
        });

        let veiculo_categorias:VeiculoCategoria[] = [];
        if (v_cat !== null) {
            for (const item of v_cat) {
                const veiculo_categoria:VeiculoCategoria = {
                    id: item.ID,
                    nome: item.NOME,
                }
                veiculo_categorias.push(veiculo_categoria);
            }
        }
        return veiculo_categorias;
    }


    async getVeiculoCategoriaByID(id: string): Promise<VeiculoCategoria> {
        const v_cat = await prisma.veiculo_categoria.findUnique({
            where: {
                ID: parseInt(id)
            }
        });
        if (v_cat !== null) {
                const veiculo_categoria:VeiculoCategoria = {
                    id: v_cat.ID,
                    nome: v_cat.NOME,
                }
                return veiculo_categoria;
        }
        throw Error("Ocorreu um erro ao carregar a categoria do veiculo")
    }
}
export default VeiculoRepository;