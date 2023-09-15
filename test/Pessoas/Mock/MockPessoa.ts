import { faker } from '@faker-js/faker';
import Pessoa from '../../../src/entities/Pessoa/Pessoa';
import PessoaEndereco from '../../../src/entities/Pessoa/PessoaEndereco';
import PessoaTipo from '../../../src/entities/Pessoa/PessoaTipo';
import generateFakePhoneNumber from '../GenerateFakePhoneNumber';

type MockPessoaEndereco = Omit<PessoaEndereco, "id" | "pessoa_id">;

const pTipoA:PessoaTipo = {
    id: 1,
    nome:'Pessoa Física'
} 
const pTipoB:PessoaTipo = {
    id: 2,
    nome:'Pessoa Jurídica'
}

const MockPessoaEndereco: MockPessoaEndereco = {
    telefone: generateFakePhoneNumber(),
    telefone_alt: generateFakePhoneNumber(),
    email: faker.internet.email({provider: "giant.com"})
}

const MockPessoa: Pessoa = {
    nome: faker.person.fullName(), 
    pessoa_tipo: Math.random() < 0.5 ? pTipoA: pTipoB,
    data_nascimento: '1992-10-20',
    sexo:  Math.random() < 0.5 ? 'M' : 'F',
    nbi: faker.string.alpha(10),
    nif: faker.string.alpha(10),
    estado_civil: Math.random() < 0.5 ? 'S' : 'C',
    endereco: MockPessoaEndereco
};

export default MockPessoa;  