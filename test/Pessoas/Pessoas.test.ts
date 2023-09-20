import request from 'supertest';
import { faker } from '@faker-js/faker';
import app from "../../src/app";
import port from '../../src/port';
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
            .send(pessoa)
            .expect(200);

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
    });

    it("should get pessoa by id ", async () => {
        const id = pessoa.id
        const response = await request(app)
            .get(`${PESSOA_URL}${id}`)
            .expect('Content-Type', /json/)
            .expect(200);
    });

    it("should get pessoa by email", async () => {
        const email = pessoa.endereco.email;

        const response = await request(app)
            .get(`${PESSOA_URL}email/${email}`)
            .expect('Content-Type', /json/)
            .expect(200);
    });

    it("should get pessoa by phone number ", async () => {
        const telefone = pessoa.endereco.telefone;
        const response = await request(app)
            .get(`${PESSOA_URL}telefone/${telefone}`)
            .expect('Content-Type', /json/)
            .expect(200);
    });

    it("should get pessoa by nif ", async () => {
        const nif = pessoa.nif;
        const response = await request(app)
            .get(`${PESSOA_URL}nif/${nif}`)
            .expect('Content-Type', /json/)
            .expect(200);
    });

    it("should get pessoa by nbi ", async () => {
        const nbi = pessoa.nbi;
        const response = await request(app)
            .get(`${PESSOA_URL}nbi/${nbi}`)
            .expect('Content-Type', /json/)
            .expect(200);
    });

    it("should update an existent pessoa ", async () => {
        const novoNome = faker.person.firstName() + ' ' + faker.person.lastName();
        const updatedPessoa: Pessoa = { ...pessoa, nome: novoNome };

        await request(app)
            .put(`${PESSOA_URL}`)
            .send(updatedPessoa)
            .expect('Content-Type', /json/)
            .expect(200);
    });

    it("should delete en existent  pessoa ", async () => {
        const id = pessoa.id;
        const response = await request(app)
            .delete(`${PESSOA_URL}${id}`)
            .expect('Content-Type', /json/)
            .expect(200);
    });
});

