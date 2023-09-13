import { faker } from '@faker-js/faker';
import Pessoa from '../../../src/entities/Pessoa/Pessoa';
import PessoaEndereco from '../../../src/entities/Pessoa/PessoaEndereco';
import PessoaTipo from '../../../src/entities/Pessoa/PessoaTipo';

const MockPessoaTipo: PessoaTipo = {
    id: faker.number.int({max: 2}),
    nome: faker.lorem.word(5)
};

const MockPessoaEndereco: PessoaEndereco = {
    id: faker.number.int({max: 2}),
    pessoa_id: faker.number.int({max: 2}).toString(),
    telefone: faker.phone.number("+ 244 932 677 988"),
    telefone_alt: faker.phone.number("+ 244 999 677 988"),
    email: faker.internet.email({provider: "giant.com"})
}

const MockPessoa: Pessoa = {
    nome: faker.person.fullName(), 
    pessoa_tipo: MockPessoaTipo,
    data_nascimento: new Date(1992, 1, 20),
    sexo:  Math.random() < 0.5 ? 'M' : 'F',
    nbi: faker.string.alpha(),
    nif: faker.string.alpha(),
    estado_civil: Math.random() < 0.5 ? 'S' : 'C',
    endereco: MockPessoaEndereco
};

export default MockPessoa;  