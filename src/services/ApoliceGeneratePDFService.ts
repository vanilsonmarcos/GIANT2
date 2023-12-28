import { adenda } from '@prisma/client';
import { veiculo_categoria } from '@prisma/client';
import { veiculo } from '@prisma/client';
import { Service, Inject } from "typedi";
import ApoliceRepository from "../repositories/mysql/ApoliceRepository";
import AdendaRepository from '../repositories/mysql/AdendaRepository';
import VeiculoRepository from '../repositories/mysql/VeiculoRepository';
import CustomError from '../utils/CustomError';
import ICertificado from '../entities/ICertificado';
import PessoaRepository from '../repositories/mysql/PessoaRepository';
import moment from 'moment';

@Service()
class ApoliceGeneratePDFService {

  @Inject(()=> ApoliceRepository)
  private apolice_repo: ApoliceRepository;

  @Inject(()=> AdendaRepository)
  private adenda_repo: AdendaRepository;

  @Inject(()=> PessoaRepository)
  private pessoa_repo: PessoaRepository;
  
  @Inject(()=> VeiculoRepository)
  private veiculo_repo: VeiculoRepository;
  
  constructor(){}
  
  async generatePDF() {}

  async getCertificadosByAdendaID(adendaID: string): Promise<ICertificado[]> {
;
    const adenda = await this.adenda_repo.getByID(adendaID);
  
    const apoliceID = adenda.APOLICE_ID

    if(apoliceID === null || undefined) {
      throw new CustomError("A adenda definida não está associada a uma apólice.")
    }
    const apolice = await this.apolice_repo.getByID(apoliceID.toString());

    const pessoa = await this.pessoa_repo.getByID(apolice.TOMADOR_ID.toString());

    const veiculos = await this.adenda_repo.getAllItemSeguradoByAdenda(adenda);

    const certificados:ICertificado[] = veiculos.map((data) => {
      return {
        NOME_TOMADOR: pessoa.NOME,
        N_CARTA_CONDUCAO: '',
        NOME_TITULAR: '',
        MORADA: `${pessoa.ENDERECO?.BAIRRO}, ${pessoa.ENDERECO?.CIDADE}, ${pessoa.ENDERECO?.PROVINCIA}`,
        N_APOLICE: apolice.NUMERO ?? '',
        CATEGORIA_VEICULO: data.VEICULO_CATEGORIA_ID.toString(),
        MARCA: data.MARCA,
        MATRICOLA: data.MATRICULA,
        MODELO: data.MODELO,
        CHASSI: data.REF_CHASSI,
        DATA_INICIO: moment(adenda.DATA_INICIO).format("DD/MM/YYYY"), 
        DATA_FIM: moment(adenda.DATA_FIM).format("DD/MM/YYYY"), 
        LIMITE_INDEMNIZACAO: '13 376 000,00',
        DISTICO: '',
        SEGURADORA: 'GIANT SEGUROS',
        N_APOLICE_2: apolice.NUMERO ?? '',
        MATRICOLA_2: data.MATRICULA, 
        DATA_INICIO_2: moment(adenda.DATA_INICIO).format("DD/MM/YYYY"), 
        DATA_FIM_2: moment(adenda.DATA_FIM).format("DD/MM/YYYY"), 
      };
    }); 
    
    return certificados;
    
  }
}

export default ApoliceGeneratePDFService;