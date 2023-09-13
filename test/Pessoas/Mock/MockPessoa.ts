import { faker } from '@faker-js/faker';
import Pessoa from '../../../src/entities/Pessoa/Pessoa';
import PessoaEndereco from '../../../src/entities/Pessoa/PessoaEndereco';
import PessoaTipo from '../../../src/entities/Pessoa/PessoaTipo';

type MockPessoaEndereco = Omit<PessoaEndereco, "id" | "pessoa_id">;

const pTipoA:PessoaTipo = {
    id: 1,
    nome:'Pessoa Física'
} 
const pTipoB:PessoaTipo = {
    id: 2,
    nome:'Pessoa Ju´ridica'
}

const MockPessoaTipo: PessoaTipo = {
    id: Math.random() < 0.5 ? 1 : 2,
    nome: faker.lorem.word(5)
};

const MockPessoaEndereco: MockPessoaEndereco = {
    telefone: faker.phone.number("+ 244 932 677 988"),
    telefone_alt: faker.phone.number("+ 244 999 677 988"),
    email: faker.internet.email({provider: "giant.com"})
}

const MockPessoa: Pessoa = {
    nome: faker.person.fullName(), 
    pessoa_tipo: Math.random() < 0.5 ? pTipoA: pTipoB,
    data_nascimento: new Date(1992, 10, 20),
    sexo:  Math.random() < 0.5 ? 'M' : 'F',
    nbi: faker.string.alpha(10),
    nif: faker.string.alpha(10),
    estado_civil: Math.random() < 0.5 ? 'S' : 'C',
    endereco: MockPessoaEndereco
};

export default MockPessoa;  