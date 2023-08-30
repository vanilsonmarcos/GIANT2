
import { faker } from '@faker-js/faker';

const MockCobertura = {
    sigla: faker.lorem.word(4).toUpperCase(),
    nome: faker.lorem.words(10),
    descricao: faker.lorem.sentence(),
    apolice_tipo: {
      id: faker.number.int({ min: 1, max: 4 }),
      sigla: faker.lorem.word(4).toUpperCase(),
      nome: faker.lorem.words(4),
      descricao: faker.lorem.paragraph()
    },
    valor_pagar: faker.number.float({ min: 0.00, max: 1000.00 }),
    desconto: faker.number.float({ min: 0.00, max: 100.00 }),
    cobertura_base: faker.datatype.boolean()
}

export default MockCobertura;