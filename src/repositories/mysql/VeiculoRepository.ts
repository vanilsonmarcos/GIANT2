import { Service } from "typedi";
import IVeiculoRepository from "../IVeiculoRepository";
import IVeiculoCategoria from "../IVeiculoCategoria";
import { veiculo, veiculo_categoria } from "@prisma/client";
import prisma from "../PrismaClient";
import CustomError from "../../utils/CustomError";
import { isArrayEmpty } from "../../utils/helper";

@Service()
class VeiculoRepository implements IVeiculoRepository<veiculo>, IVeiculoCategoria<veiculo_categoria>{
    
    async getVeiculoByMatricula(matricula: string): Promise<veiculo> {
        const veiculo = await prisma.veiculo.findUnique({
            where: {
                MATRICULA: matricula
            },
            include: {
              veiculo_categoria: true  
            }
        });    

        if (veiculo === null) {
            throw new CustomError("Não Foi encontrado um veiculo com a matricula referenciada");
        }
        return veiculo;
    
    }
    
    async getAll(): Promise<veiculo[]> {
        const veiculos = await prisma.veiculo.findMany({
            include:{
                veiculo_categoria: true
            },
            take: 100
        });
        if(isArrayEmpty(veiculos) || veiculos === null || veiculos === undefined) {
            throw new CustomError("Não foram encontrados veiculos registados");
        }
        return veiculos;
    }

    async getByID(id: string): Promise<veiculo> {
        const veiculo = await prisma.veiculo.findUnique({
            where: {
                ID: parseInt(id)
            },
            include: {
                veiculo_categoria: true
            }
        });
        if (veiculo === null || veiculo === undefined)  {
            throw new CustomError("Não Foi encontrado um veiculo com a matricula referenciada");
        }
        
        return veiculo;
    }

    async create(item: veiculo): Promise<veiculo> {       
        const veiculo = await prisma.veiculo.create({
            data: {
                VEICULO_CATEGORIA_ID: item.VEICULO_CATEGORIA_ID,
                MATRICULA: item.MATRICULA,
                MARCA: item.MARCA,
                MODELO: item.MODELO,
                ANO_AQUISICAO: item.ANO_AQUISICAO,
                CAPITAL_AQUISICAO: item.CAPITAL_AQUISICAO,
                PESO_BRUTO: item.PESO_BRUTO,
                N_LOTACAO: item.N_LOTACAO,
                ANO_FABRICO: item.ANO_FABRICO,
                CILINDRADA: item.CILINDRADA,
                REF_CHASSI: item.REF_CHASSI,
                DESCRICAO: item.DESCRICAO
            },
        }); 
        if (veiculo === null || veiculo === undefined) {
            throw new CustomError("Ocorreu um erro ao criar o veiculo"); // Set the id to the object after insert in database
        }
        return veiculo;

    }


    async update(id: string, item: veiculo): Promise<veiculo> {
        const veiculo = await prisma.veiculo.update({   
             where: {
                ID: parseInt(id)
            },
            data: {
                VEICULO_CATEGORIA_ID : item.VEICULO_CATEGORIA_ID,
                MATRICULA : item.MATRICULA,
                MARCA : item.MARCA,
                MODELO : item.MODELO,
                ANO_AQUISICAO : item.ANO_AQUISICAO,
                CAPITAL_AQUISICAO : item.CAPITAL_AQUISICAO,
                PESO_BRUTO : item.PESO_BRUTO,
                N_LOTACAO : item.N_LOTACAO,
                ANO_FABRICO : item.ANO_FABRICO,
                CILINDRADA : item.CILINDRADA,
                REF_CHASSI : item.REF_CHASSI,
                DESCRICAO : item.DESCRICAO
            },
         
        });
        if (veiculo === null || veiculo === undefined) {
            throw new CustomError("Ocorreu um erro ao actualizar os dados do veiculo");
        }
        return veiculo;
    }

    async delete(id: string): Promise<boolean> {
        const veiculo = await prisma.veiculo.delete({
            where: {
               ID: parseInt(id) 
            }    
        });
        if (veiculo !== null) {
            return true;
        }
        return false;
    }


    async getAllVeiculoCategoria(): Promise<veiculo_categoria[]> {
        const veiculo_categorias = await prisma.veiculo_categoria.findMany({
            take: 10
        });
        return veiculo_categorias;
    }

    async getVeiculoCategoriaByID(id: string): Promise<veiculo_categoria> {
        const veiculo_categoria = await prisma.veiculo_categoria.findUnique({
            where: {
                ID: parseInt(id)
            }
        });
        if(veiculo_categoria === null || veiculo_categoria === undefined) {
            throw new CustomError("Ocorreu um erro ao carregar a categoria do veiculo")
        }
        return veiculo_categoria;
    }
}
export default VeiculoRepository;