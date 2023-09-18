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
        pessoa = p;
        expect(p).toBeDefined();
    });

    it("should get all pessoas", async () => {
         const response = await request(app)
            .get(PESSOA_URL)
            .expect('Content-Type', /json/)
            .expect(200);
            expect(response.body.data).toBeDefined();
    });

    it("should get pessoa by id ", async () => {
        const id = pessoa.id
        const response = await request(app)
            .get(`${PESSOA_URL}${id}`)
            .expect('Content-Type', /json/)
            .expect(200);
        expect(response.body.data).toBeDefined();
    });

    it("should get pessoa by email", async () => {
        const email = pessoa.endereco.email;

        const response = await request(app)
        .get(`${PESSOA_URL}email/${email}`)
        .expect('Content-Type', /json/)
        .expect(200);
        expect(response.body.data).toBeDefined();
        // .expect((res) => {
        //     const p: Pessoa = res.body.data;
        //     expect(p.endereco).toEqual(pessoa.endereco.email);
        // });
    });

    it("should get pessoa by phone number ", async () => {
        const telefone = pessoa.endereco.telefone;
        const response = await request(app)
        .get(`${PESSOA_URL}telefone/${telefone}`)
        .expect('Content-Type', /json/)
        .expect(200);
        expect(response.body.data).toBeDefined();
        // .expect((res) => {
        //     const p: Pessoa = res.body.data;
        //     expect(p.endereco.telefone).toEqual(pessoa.endereco.telefone);
        // });
    });

    it("should get pessoa by nif ", async () => {
        const nif = pessoa.nif;
        const response = await request(app)
        .get(`${PESSOA_URL}nif/${nif}`)
        .expect('Content-Type', /json/)
        .expect(200);
        expect(response.body.data).toBeDefined();

    });

    it("should get pessoa by nbi ", async () => {
        const nbi = pessoa.nbi;
        const response = await request(app)
        .get(`${PESSOA_URL}nbi/${nbi}`)
        .expect('Content-Type', /json/)
        .expect(200);
        expect(response.body.data).toBeDefined();
        // .expect((res) => {
        //     const p: Pessoa = res.body.data;
        //     expect(p.id).toEqual(pessoa.id);
        // });
    });

    it("should update an existent pessoa ", async () => {
        const novoNome = faker.lorem.words(10);
        const updatedPessoa: Pessoa = { ...pessoa, nome: novoNome };

        await request(app)
            .put(`${PESSOA_URL}`)
            .send(updatedPessoa)
            .expect('Content-Type', /json/)
            .expect(200)
            // .expect((res) => {
            //     const p: Pessoa = res.body.data;
            //     expect(p.nome).toEqual(novoNome);
            // });
    });

    it("should delete en existent  pessoa ", async () => {
        const pessoa_id = pessoa.id;
        const response = await request(app)
            .delete(`${PESSOA_URL}${pessoa_id}`)
            .expect('Content-Type', /json/)
            .expect(200);
    });
});

