import request from 'supertest';

import app from "../../src/app";
import Cobertura from '../../src/entities/Cobertura';

const COBERTURA_URL = "/cobertura/";


describe("It should perform all operations about Coberturas", () => {
    let cobertura: Cobertura;
    beforeAll(() => {
        cobertura = {
            sigla: "CTES",
            nome: "Cobertura Teste",
            descricao: "",
            apolice_tipo: {
                id: 1,
                sigla: "AUTO",
                nome: "Apólice de Seguro Automóvel",
                descricao: "Considerado um seguro obrigatório em Angola, o Seguro Automóvel deve segurar a responsabilidade civil perante terceiros, transportados ou não, decorrente de lesões causadas por veículos terrestres a motor, seus reboques e semi-reboques, velocípedes e bicicletas. Adicionalmente pode ser contratado um seguro para danos próprios, que, de acordo com as condições gerais e específicas da apólice pode cobrir os riscos não previstos no âmbito do seguro obrigatório de responsabilidade civil automóvel, podendo abranger as seguintes coberturas: Responsabilidade Civil Facultativa; Choque, Colisão e Capotamento; Furto ou Roubo; Incêndio, Raio ou Explosão; Quebra Isolada de Vidros; Fenómenos da Natureza; Greves, Tumultos e Alterações da Ordem Pública; Privação de Uso; Ocupantes da Viatura; e outras garantias que venham a ser contratadas."
            },
            valor_pagar: 0,
            desconto: 0,
            cobertura_base: false
        };
    });

    it('should insert Cobertura into the database and get the id', async () => {
        const response = await request(app)
            .post(`${COBERTURA_URL}`)
            .send(cobertura);

        expect(response.body.code).toBe(200);
        const c: Cobertura = response.body.data;
        expect(c).toBeDefined();

        cobertura = c;
    });

    it('should get Cobertura by id', async () => {
        await request(app)
            .get(`${COBERTURA_URL}${cobertura.id}`)
            .expect('Content-Type', /json/)
            .expect(200)
            .expect((res) => {
                const c: Cobertura = res.body.data;
                expect(c.id).toEqual(cobertura.id);
            });
    });

    it('should get all Coberturas', async () => {
        await request(app)
            .get(COBERTURA_URL)
            .expect('Content-Type', /json/)
            .expect(200);
    });

    it('should update Cobertura in the database', async () => {
        const novoNome = 'TESTC';
        const updatedCobertura = { ...cobertura, nome: novoNome };

        await request(app)
            .put(`${COBERTURA_URL}`)
            .send(updatedCobertura)
            .expect('Content-Type', /json/)
            .expect(200)
            .expect((res) => {
                const c: Cobertura = res.body.data;
                expect(c.nome).toEqual(novoNome);
            });
    });


    it('should delete Cobertura from the database', async () => {
        const cobertura_id = cobertura.id;
        const result = await request(app)
            .delete(`${COBERTURA_URL}${cobertura_id}`)
            .expect('Content-Type', /json/)
            .expect(200);
    });

}); 