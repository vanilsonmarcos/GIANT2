import { Request, Response } from 'express'
import { resolve } from 'path';
import ApoliceGeneratePDFService from '../services/ApoliceGeneratePDFService';
import puppeteer from 'puppeteer';
import PDFMerger from 'pdf-merger-js';
import ICertificado from '../entities/ICertificado';
import { buffer } from 'stream/consumers';

class ApoliceGeneratePDFController {
  private apoliceGeneratePDF: ApoliceGeneratePDFService;
  constructor(agPDF: ApoliceGeneratePDFService) {
    this.apoliceGeneratePDF = agPDF;
  }

  async getApolice(req: Request, res: Response) {
    const filePath = resolve(__dirname + '/../storage/downloads');
    const apoliceDocPath = filePath + '/apolice.pdf';
    const termosDocPath = filePath + '/termos.pdf';
    const merger = new PDFMerger();

    try {
      const browser = await puppeteer.launch({ headless: 'new' });
      const page = await browser.newPage();

      await page.goto(resolve(__dirname + '/../html/apolice.html'));


      
      const apolice = await page.pdf({
        path: apoliceDocPath,
        format: 'A4',
      });

      await page.goto(resolve(__dirname + '/../html/termos.html'));

      const termos = await page.pdf({
        path: termosDocPath,
        format: 'A4',
      });
      await browser.close();

      await merger.add(apolice);
      await merger.add(termos);
      const apoliceFinal = await merger.saveAsBuffer()

      res.setHeader('Content-Disposition', `attachment; filename="apolice.pdf"`);
      res.setHeader('Content-Type', 'application/pdf');
      return res.send(apoliceFinal);
    } catch (error) {
      const response = {
        code: 401,
        message: "Ocorreu um erro ao gerar o contracto da Apólice.",
        data: {},
        error: error
      };
      res.json(response)
    }
  }

  async getCertificado(req: Request, res: Response) {
    const filePath = resolve(__dirname + '/../storage/downloads') + '/certificado.pdf';
    try {
      const { id } = req.params;
      const certificados: ICertificado[] = await this.apoliceGeneratePDF.getCertificadosByAdendaID(id);
      const merger = new PDFMerger();
      console.log(certificados)
      for (const element of certificados) {
        const data = element;
        const browser = await puppeteer.launch({ headless: 'new' });
        const page = await browser.newPage();

        await page.goto(resolve(__dirname + '/../html/certificado.html'), { waitUntil: 'networkidle2' });

        await page.evaluate((data) => {
          //Inside the browser context, you can access 'args'
          const nome = document.getElementById('nome');
          if(nome) {
            nome.innerHTML = data.NOME_TOMADOR.trim() === '' ? '&nbsp;' : data.NOME_TOMADOR;
          }
          const n_carta_conducao = document.getElementById('n_carta_conducao');
          if(n_carta_conducao) {
            n_carta_conducao.innerHTML = data.N_CARTA_CONDUCAO.trim() === '' ? '&nbsp;' : data.N_CARTA_CONDUCAO;
            
          }
          const nome_titular = document.getElementById('nome_titular');
          if(nome_titular) {
            nome_titular.innerHTML = data.NOME_TITULAR.trim() === '' ? '&nbsp;' : data.NOME_TITULAR;
          }
        
          const morada = document.getElementById('morada');
          if(morada) {
            morada.innerHTML = data.MORADA;
          }
          const n_apolice = document.getElementById('n_apolice');
          if(n_apolice) {
            n_apolice.innerHTML = data.N_APOLICE.trim() === '' ? '&nbsp;' : data.N_APOLICE; 
          }
   
          const categoria_veiculo = document.getElementById('categoria_veiculo');
          if(categoria_veiculo) {
            categoria_veiculo.innerHTML = data.CATEGORIA_VEICULO.trim() === '' ? '&nbsp;' : data.CATEGORIA_VEICULO; 
          }

          const marca = document.getElementById('marca');
          if(marca) {
            marca.innerHTML = data.MARCA.trim() === '' ? '&nbsp;' : data.MARCA;;
          }

          const matricola = document.getElementById('matricola');
          if(matricola) {
            matricola.innerHTML = data.MATRICOLA.trim() === '' ? '&nbsp;' : data.MATRICOLA;
          }
          
          const modelo = document.getElementById('modelo');
          if(modelo) {
            modelo.innerHTML = data.MODELO.trim() === '' ? '&nbsp;' : data.MODELO;
          }

          const chassi = document.getElementById('chassi');
          if(chassi) {
            chassi.innerHTML = data.CHASSI.trim() === '' ? '&nbsp;' : data.CHASSI;
          }

          const data_inicio = document.getElementById('data_inicio');
          if(data_inicio) {
            data_inicio.innerHTML = data.DATA_INICIO.trim() === '' ? '&nbsp;' : data.DATA_INICIO;
          }

          const data_fim = document.getElementById('data_fim');
          if(data_fim) {
            data_fim.innerHTML = data.DATA_FIM.trim() === '' ? '&nbsp;' : data.DATA_FIM;
          }

          const limite_indemnizacao = document.getElementById('limite_indemnizacao');
          if(limite_indemnizacao) {
            limite_indemnizacao.innerHTML = data.LIMITE_INDEMNIZACAO.trim() === '' ? '&nbsp;' : data.LIMITE_INDEMNIZACAO;
          }
          // // info related about distico
          const distico = document.getElementById('distico');
          if(distico) {
            distico.innerHTML = data.DISTICO.trim() === '' ? '&nbsp;' : data.DISTICO;
          }
    
          const seguradora = document.getElementById('seguradora');
          if(seguradora) {
            seguradora.innerHTML = data.SEGURADORA.trim() === '' ? '&nbsp;' : data.SEGURADORA;
          }

          const n_apolice_2 = document.getElementById('n_apolice_2');
          if(n_apolice_2) {
            n_apolice_2.innerHTML = data.N_APOLICE_2.trim() === '' ? '&nbsp;' : data.N_APOLICE_2;
          }

          const matricola_2 = document.getElementById('matricola_2');
          if(matricola_2) {
            matricola_2.innerHTML = data.MATRICOLA_2.trim() === '' ? '&nbsp;' : data.MATRICOLA_2;
          }

          const data_inicio_2 = document.getElementById('data_inicio_2');
          if(data_inicio_2) {
            data_inicio_2.innerHTML = data.DATA_INICIO_2.trim() === '' ? '&nbsp;' : data.DATA_INICIO_2;
          }

          const data_fim_2 = document.getElementById('data_fim_2');
          if(data_fim_2) {
            data_fim_2.innerHTML = data.DATA_FIM_2.trim() === '' ? '&nbsp;' : data.DATA_FIM_2;
          }
        }, data);
       
        // page.pdf() is currently supported only in headless mode.
        // @see https://bugs.chromium.org/p/chromium/issues/detail?id=753118
        const fileBuffer = await page.pdf({
          path: filePath,
          format: 'A4',
          pageRanges: '1'
        });
        await browser.close();
        await merger.add(fileBuffer)
      }
      const mergedFile = await merger.saveAsBuffer();

      res.setHeader('Content-Disposition', `attachment; filename="certificado.pdf"`);
      res.setHeader('Content-Type', 'application/pdf');
      return res.send(mergedFile);
    } catch (error) {
      const response = {
        code: 401,
        message: "Ocorreu um erro ao gerar o certificado do(s) veiculo(s).",
        data: {},
        error: error
      };
      res.json(response)
    }
  }

  async generatePDF(htmlTemplate: string, fileOutput: string) {

  }
}


export default ApoliceGeneratePDFController;