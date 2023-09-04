import request from 'supertest';
import { faker } from '@faker-js/faker';
import app from "../../src/app";
import Cobertura from '../../src/entities/Cobertura';
import MockCobertura from './mock/MockCobertura';

const COBERTURA_URL = "/cobertura/";

describe("It should perform all operations related with Coberturas", () => {
    let cobertura: Cobertura ;
    beforeAll(() => {
        cobertura = MockCobertura;
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
        const novoNome = faker.lorem.words(10);
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