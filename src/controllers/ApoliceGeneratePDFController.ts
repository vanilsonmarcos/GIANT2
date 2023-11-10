import { Request, Response } from 'express'
import { resolve } from 'path';
import ApoliceGeneratePDFService from '../services/ApoliceGeneratePDFService';
import puppeteer from 'puppeteer';
import PDFMerger from 'pdf-merger-js';

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
        message: "Ocorreu um erro ao gerar a apólice.",
        data: {},
        error: error
      };
      res.json(response)
    }
  }

  async getCertificado(req:Request, res: Response) {
    const filePath = resolve(__dirname + '/../storage/downloads') + '/certificado.pdf';
    try {
      const browser = await puppeteer.launch({ headless: 'new' });
      const page = await browser.newPage();
      await page.goto(resolve(__dirname + '/../html/certificado.html'), {
        waitUntil: 'networkidle2',
      });
      // page.pdf() is currently supported only in headless mode.
      // @see https://bugs.chromium.org/p/chromium/issues/detail?id=753118
      const fileBuffer = await page.pdf({
        path: filePath,
        format: 'A4',
        pageRanges: '1'
      });
      await browser.close();

      res.setHeader('Content-Disposition', `attachment; filename="certificado.pdf"`);
      res.setHeader('Content-Type', 'application/pdf');
      return res.send(fileBuffer);
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
}

export default ApoliceGeneratePDFController;