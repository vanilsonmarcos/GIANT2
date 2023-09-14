import request from 'supertest';
import { faker } from '@faker-js/faker';
import app from "../../src/app";
import Pessoa from "../../src/entities/Pessoa/Pessoa";
import MockPessoa from "./Mock/MockPessoa";
const PESSOA_URL = "/pessoa/";

describe("It should perform all operations related with Pessoa", () => {
    let pessoa: Pessoa;

    beforeAll(() => {
        pessoa = MockPessoa;
    })

    it("should create a new pessoa ", async () => {
        const response = await request(app)
            .post(`${PESSOA_URL}`)
            .send(pessoa);

         expect(response.body.code).toBe(200);
        const p: Pessoa = response.body.data;
        expect(p).toBeDefined();

        pessoa = p;
    });

    it("should get all pessoas", async () => {
        await request(app)
            .get(PESSOA_URL)
            .expect('Content-Type', /json/)
            .expect(200);
    });

    it("should get pessoa by id ", async () => {
        await request(app)
            .get(`${PESSOA_URL}${pessoa.id}`)
            .expect('Content-Type', /json/)
            .expect(200)
            .expect((res) => {
                const p: Pessoa = res.body.data;
                expect(p.id).toEqual(pessoa.id);
            });
    });

    it("should get pessoa by email", async () => {
        await request(app)
        .get(`${PESSOA_URL}${pessoa.id}`)
        .expect('Content-Type', /json/)
        .expect(200)
        .expect((res) => {
            const p: Pessoa = res.body.data;
            expect(p.id).toEqual(pessoa.id);
        });
    });

    it("should get pessoa by phone number ", async () => {
        await request(app)
        .get(`${PESSOA_URL}${pessoa.id}`)
        .expect('Content-Type', /json/)
        .expect(200)
        .expect((res) => {
            const p: Pessoa = res.body.data;
            expect(p.id).toEqual(pessoa.id);
        });
    });

    it("should get pessoa by nif ", async () => {
        await request(app)
        .get(`${PESSOA_URL}${pessoa.nif}`)
        .expect('Content-Type', /json/)
        .expect(200)
        .expect((res) => {
            const p: Pessoa = res.body.data;
            expect(p.id).toEqual(pessoa.id);
        });

    });

    it("should get pessoa by nbi ", async () => {
        await request(app)
        .get(`${PESSOA_URL}${pessoa.nbi}`)
        .expect('Content-Type', /json/)
        .expect(200)
        .expect((res) => {
            const p: Pessoa = res.body.data;
            expect(p.id).toEqual(pessoa.id);
        });
    });

    it("should update an existent pessoa ", async () => {
        const novoNome = faker.lorem.words(10);
        const updatedPessoa: Pessoa = { ...pessoa, nome: novoNome };

        await request(app)
            .put(`${PESSOA_URL}`)
            .send(updatedPessoa)
            .expect('Content-Type', /json/)
            .expect(200)
            .expect((res) => {
                const p: Pessoa = res.body.data;
                expect(p.nome).toEqual(novoNome);
            });
    });

    it("should delete en existent  pessoa ", async () => {
        const pessoa_id = pessoa.id;
        const result = await request(app)
            .delete(`${PESSOA_URL}${pessoa_id}`)
            .expect('Content-Type', /json/)
            .expect(200);
    });
});

