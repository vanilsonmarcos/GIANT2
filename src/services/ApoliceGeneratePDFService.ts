import { Service, Inject } from "typedi";
import puppeteer from 'puppeteer-core';

@Service()
class ApoliceGeneratePDFService {
    constructor () {}

    async generatePDF() {
        (async () => {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto('../html/apolice.html', {
              waitUntil: 'networkidle2',
            });
            // page.pdf() is currently supported only in headless mode.
            // @see https://bugs.chromium.org/p/chromium/issues/detail?id=753118
            await page.pdf({
              path: 'apolice.pdf',
              format: 'letter',
            });
          
            await browser.close();
          })();

    }
}

export default ApoliceGeneratePDFService;