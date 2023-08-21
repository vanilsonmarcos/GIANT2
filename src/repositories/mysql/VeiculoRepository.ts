import { RowDataPacket } from "mysql2/promise";
import Veiculo from "../../entities/Apolice/Veiculo/Veiculo";
import IVeiculoReposiroty from "../IVeiculoRepository";
import { query } from './mysql';
import generateVeiculo from "../../entities/Apolice/Veiculo/Helper";
import IVeiculoCategoria from "../IVeiculoCategoria";
import VeiculoCategoria from "../../entities/Apolice/Veiculo/VeiculoCategoria";

class VeiculoRepository implements IVeiculoReposiroty<Veiculo>, IVeiculoCategoria<VeiculoCategoria>{
    private primeTable = 'veiculo';
    private secondTable = "veiculo_categoria";

    constructor() {
        
    }

    async getVeiculoByMatricula(matricula: String): Promise<Boolean | Veiculo> {
        const sql: string = `SELECT veiculo.* , veiculo_categoria.ID AS CATEGORIA_ID,
        veiculo_categoria.NOME AS CATEGORIA_NOME
        FROM veiculo
        INNER JOIN veiculo_categoria ON
        veiculo.VEICULO_CATEGORIA_ID = veiculo_categoria.ID 
        WHERE veiculo.MATRICULA = '${matricula}'
        LIMIT 1` ;
        const data: RowDataPacket[] = await query(sql) as  RowDataPacket[] ;
        if (data) {
            return generateVeiculo(data[0]);
        }

        return false;
       
    }
    
    async getAll(): Promise<Veiculo[]> {
        const sql: string = `SELECT veiculo.* , veiculo_categoria.ID AS CATEGORIA_ID,
        veiculo_categoria.NOME AS CATEGORIA_NOME
        FROM veiculo
        INNER JOIN veiculo_categoria ON
        veiculo.VEICULO_CATEGORIA_ID = veiculo_categoria.ID  LIMIT 100` ;

        const data: RowDataPacket[] = await query(sql) as  RowDataPacket[] ;
        let veiculos:Veiculo[] = [];
        if (data) {
            for (const item of data) {
                const veiculo:Veiculo = generateVeiculo(item);
                veiculos.push(veiculo);
            }
        }
        return veiculos;
    }

    async getByID(id: String): Promise<Boolean | Veiculo> {
        const data:RowDataPacket= await query(
            `SELECT ${this.primeTable}.* , ${this.secondTable}.ID AS CATEGORIA_ID,
            ${this.secondTable}.NOME AS CATEGORIA_NOME
            FROM ${this.primeTable}
            INNER JOIN ${this.secondTable} ON
            ${this.primeTable}.VEICULO_CATEGORIA_ID = ${this.secondTable}.ID 
            WHERE ${this.primeTable}.ID=${id} LIMIT 1`
        ) as RowDataPacket;
        if (data) {
            return generateVeiculo(data[0]);
        }

        return false;

    }
    async create(item: Veiculo): Promise<Veiculo | Boolean > {      
        const result = await query(
            `INSERT INTO ${this.primeTable}
            (VEICULO_CATEGORIA_ID, MATRICULA, MARCA, MODELO, ANO_AQUISICAO, CAPITAL_AQUISICAO,
            PESO_BRUTO, N_LOTACAO, ANO_FABRICO,CILINDRADA, REF_CHASSI, DESCRICAO)
            VALUES 
            (${item.veiculo_categoria.id}, '${item.matricula}', '${item.marca}', '${item.modelo}  '${item.ano_aquisicao}', '${item.capital_aquisicao}',
            '${item.peso_bruto}', '${item.n_lotacao}', '${item.ano_fabrico}', '${item.cilindrada}' '${item.ref_chassi}', '${item.descricao}')`
        ) as RowDataPacket;  
        if (result.affectedRows) {
            // Set the id to the object after insert in database
            item.id = result.insertId;
            return item;
        }
        return false;
    }


    async update(id: string, item: Veiculo): Promise<Veiculo | Boolean> {
        const result: RowDataPacket = await query(`
        UPDATE ${this.primeTable} SET
        VEICULO_CATEGORIA_ID = ${item.veiculo_categoria.id},
        MATRICULA = ${item.matricula},
        MARCA = ${item.marca},
        MODELO = ${item.modelo},
        ANO_AQUISICAO = ${item.ano_aquisicao},
        CAPITAL_AQUISICAO = ${item.capital_aquisicao},
        PESO_BRUTO = ${item.peso_bruto},
        N_LOTACAO = ${item.n_lotacao},
        ANO_FABRICO = ${item.ano_fabrico},
        CILINDRADA = ${item.cilindrada},
        REF_CHASSI = ${item.ref_chassi},
        DESCRICAO = ${item.descricao}
        WHERE ID=${id}`
        ) as RowDataPacket;

        if (result.affectedRows) {
            return item;
        }
        return false;
    }

    async delete(id: String): Promise<Boolean> {
        const result: RowDataPacket = await query(`DELETE FROM ${this.primeTable} WHERE id=${id}`) as RowDataPacket;
        if (result.affectedRows) {
            return true;
        }
        return false;
    }


    async getAllVeiculoCategoria(): Promise<VeiculoCategoria[]> {
        const sql: string = `SELECT * FROM ${this.secondTable} LIMIT 100` ;

        const data: RowDataPacket[] = await query(sql) as  RowDataPacket[] ;
        let veiculo_categorias:VeiculoCategoria[] = [];
        if (data) {
            for (const item of data) {
                const veiculo_categoria:VeiculoCategoria = {
                    id: item["ID"],
                    nome: item["NOME"],
                }
                veiculo_categorias.push(veiculo_categoria);
            }
        }
        return veiculo_categorias;
    }


    async getVeiculoCategoriaByID(id: String): Promise<VeiculoCategoria | Boolean> {
        const sql: string = `SELECT * FROM ${this.secondTable} WHERE ID =${id} LIMIT 1` ;

        const data : RowDataPacket[] = await query(sql) as  RowDataPacket[];
        if (data) {

                const veiculo_categoria:VeiculoCategoria = {
                    id: data[0]["ID"],
                    nome: data[0]["NOME"],
                }
                return veiculo_categoria;
        }
        return false;
    }

}


export default VeiculoRepository;