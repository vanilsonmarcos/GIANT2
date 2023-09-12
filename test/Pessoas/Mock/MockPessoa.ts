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
    email: faker.internet.email({provider: "giant"})

}
const MockPessoa: Pessoa = {
    nome: faker.person.fullName(),
    pessoa_tipo: MockPessoaTipo,
    data_nascimento: faker.date.past({years: 28}),
    sexo: faker.person.sex(),
    nbi: faker.string.alpha(),
    nif: faker.string.alpha(),
    estado_civil: faker.string.alpha(1),
    endereco: MockPessoaEndereco
};

export default MockPessoa;