import request from 'supertest';

import app from "../../src/app";
import Cobertura from '../../src/entities/Cobertura';

const COBERTURA_URL = "/cobertura/";


describe("It should get all Coberturas", () => {
    test(`GET ${COBERTURA_URL}`,  async() => {
        request(app)
        .get(COBERTURA_URL)
        .expect("Content-Type", /json/)
        .expect(200);
    });
});

describe("It should get Cobertura by id", () => {
    test("GET /", () => {
        const cobertura_id = 1;
        request(app)
        .get(`${COBERTURA_URL}`)
        .expect("Content-Type", /json/)
        .expect((res) => {
            const c: Cobertura = res.body.data;
            return expect(c.id).toContainEqual(cobertura_id)
        })
        .expect(200);
    });
});

// describe("It should insert Cobertura at the database", () => {
//     test("GET /", () => {
        
//     });
// });

// describe("It should update Cobertura at the database", () => {
//     test("GET /", () => {
        
//     });
// });

// describe("It should delete Cobertura at the database", () => {
//     test("GET /", () => {
        
//     });
// });