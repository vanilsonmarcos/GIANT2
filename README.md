## DEFINIÇÕES

UMA APOLICE TEM VARIOS ELEMENTOS QUE SÂO:

- TIPO(Apólice, automovel, saúde e multiriscos e outros).
- Estado(Descreve em que estádo está a apólice, Activa, Desactiva, Cancelada, Expirada e outros).
- Pagamantos(São os pagamentos feitos dentro de uma apólice, que dependem do fracionamento).
- Fracionamento(É a a divisão dos pagamentos de uma apólice que podem ser (3,6 e 12 meses)).
- Coberturas(Coberturas são os termos que a apólice contempla) OBS: O preço da apólice pode variar de acordo as coberturas adicionadas.
- Segurado(s)(Pessoa) é/são as pessoas que se beneficiam da apólice que são pessoas.
- Tomador(Pessoa) é a pessoa que adjudica a apólice que pode ser pessoa físisca ou jurídica.

#### A apólice

É um contracto estabelecido entre uma entidade seguradora e uma entidade pessoal.

### Adenda

São os anexos ou ratificações que uma apólice tem.

#### TIPO

o tipo representa os variações de uma apolice.

#### Estado

O estado são as etapas em que uma apólice se encontra que podem ser(Activa/ Inactiva, Candelada, Em Processamento)

#### Pagamento

o pagamento é a tentidade que resepresta o mesmo dentro de uma apólice.

#### Fracionamento

O fracionamento é a divisão dos pagamentos efectuados em uma apólice.

#### Cobertura

A cobertura
são os items que a apolice de seguro cobrem,

#### Tomador

O tomador é a entidade(pessoa fisica ou juridica) que adjudica ou requisita os serviços da seguradora

#### Segurado

O segurado é o beneficiario da apolice de seguro.

## INSTALATION

Para instalar a base de dados mysql abre o ficheiro giant_db.sql na pasta MODELS e execute.

No ficheiro src\repositories\mysql\config.ts adicionar o as credeciais da abase de dados como nome da base de dados, utilizador e password

## ENDPOINTS

BASE: <http://localhost/>
FORMATO: JSON
RETORNO: CODIGO SUCCESSO (200) OU MENSAGEM ALTERNATIVA COM DESCRICAO DO ERRO, DO REGISTO INSERIDO

Todas a requisições retornam um objecto json com o codigo http de retorno, a menssagem e os dados que pode ser um objecto ou um array de objectos

```json
{
    code,  
    message,
    data
}
```

## Veiculo

O veiculo é uma entidade que faz parte dos items a serem segurados dentro de uma apolice de seguro automóvel e um veiculo possui uma categoria que define o preço na qual o veiculo deve ser cobrado.

Visualizar Veiculos
Metodo: GET
URL: /veiculo/
Resposta:
em caso de sucesso retorna:

```json
{
    code: 200,
    message: "Dados dos veiculos foram encontrados com sucesso",
    data: [
        {veiculo 1 }, {veiculo 2}, {...}
    ]
}
```

em caso de erro retorna:

```json
{
    code: 401,
    message: "Os dados dos veiculos não foram encontrados",
    data: {}, 
    error: {erro}
}
```

Veiculo pelo id na base de dados
Metodo: GET
URL: /veiculo/:id
Resposta:
em caso de sucesso retorna:

```json
{
    code: 200,
    message: "Dados dos veiculo foram encontrados com sucesso",
    data: {veiculo 1 }
}
```

em caso de erro retorna:

```json
{
    code: 401,
    message: "Os dados do veiculo não foram encontrados",
    data: {}, 
    error: {error}
}
```

Veiculo pela matricola
Metodo GET:
URL: veiculo/matricola/:matricula
Resposta:
em caso de sucesso:

```json
{
    code: 200,
    message: "Dados dos veiculo foram encontrados com sucesso",
    data: {veiculo 1 }
}
```

em caso de erro:

```json
{
    code: 401,
    message: "Dados dos veiculo não foram encontrados",
    data: {},
    error: {error}
}
```

Adicionar novo veiculo
Metodo POST:
URL: /veiculo/
Body:

```json
{
    id?: Number,
    veiculo_categoria: VeiculoCategoria ,
    matricula: String,
    marca: String,
    modelo: String,
    ano_aquisicao: Number,
    capital_aquisicao: Number,
    peso_bruto: Number,
    n_lotacao: Number,
    ano_fabrico: Number,
    cilindrada: number,
    ref_chassi: String,
    descricao: String,
    inserido_por?: Number,
    actualizado_por?: Number 
}
```

Resposta:
em caso de sucesso retorna o objecto inserido com o id definido.

```json
{
    code: 200,
    message: "Dados da veiculo inseridos com sucesso",
    data: {
        ID: number
        VEICULO_CATEGORIA_ID: number
        MATRICULA: string
        MARCA: string
        MODELO: string
        ANO_AQUISICAO: number
        CAPITAL_AQUISICAO: Prisma.Decimal
        PESO_BRUTO: number
        N_LOTACAO: number
        ANO_FABRICO: number
        CILINDRADA: number
        REF_CHASSI: string
        DESCRICAO: string
        INSERIDO_POR: number | null
        ACTUALIZADO_POR: number | null
        REMOVIDO_POR: number | null
        DATA_INSERCAO: Date | null
        DATA_ACTUALIZACAO: Date | null
        DATA_REMOCAO: Date | null
    }
}
```

em caso de erro retorna:

```json
{
    code: 401,
    message: "Ocorreu um erro ao inserir os dados da veiculo",
    data: {},
    error: {error}
}
```

Actualizar o veiculo
Metodo PUT:
URL: /veiculo/:id
Body:

```json
{
    ID: number
    VEICULO_CATEGORIA_ID: number
    MATRICULA: string
    MARCA: string
    MODELO: string
    ANO_AQUISICAO: number
    CAPITAL_AQUISICAO: Prisma.Decimal
    PESO_BRUTO: number
    N_LOTACAO: number
    ANO_FABRICO: number
    CILINDRADA: number
    REF_CHASSI: string
    DESCRICAO: string
    INSERIDO_POR: number | null
    ACTUALIZADO_POR: number | null
    REMOVIDO_POR: number | null
    DATA_INSERCAO: Date | null
    DATA_ACTUALIZACAO: Date | null
    DATA_REMOCAO: Date | null
}
```

Resposta:
em caso de sucesso:

em caso de sucesso retorna o objecto actualizado

```json
{
    code: 200,
    message: "Dados da veiculo inseridos com sucesso",
    data: {
        ID: number
        VEICULO_CATEGORIA_ID: number
        MATRICULA: string
        MARCA: string
        MODELO: string
        ANO_AQUISICAO: number
        CAPITAL_AQUISICAO: Prisma.Decimal
        PESO_BRUTO: number
        N_LOTACAO: number
        ANO_FABRICO: number
        CILINDRADA: number
        REF_CHASSI: string
        DESCRICAO: string
        INSERIDO_POR: number | null
        ACTUALIZADO_POR: number | null
        REMOVIDO_POR: number | null
        DATA_INSERCAO: Date | null
        DATA_ACTUALIZACAO: Date | null
        DATA_REMOCAO: Date | null
    }
}

Remover o veiculo
Metodo DELETE:
URL: /veiculo/:id
Resposta:
em caso de sucesso retorna:

```json
{
    code: 200,
    message: "Dados da veiculo inseridos com sucesso",
    data: {
        ID: number
        VEICULO_CATEGORIA_ID: number
        MATRICULA: string
        MARCA: string
        MODELO: string
        ANO_AQUISICAO: number
        CAPITAL_AQUISICAO: Prisma.Decimal
        PESO_BRUTO: number
        N_LOTACAO: number
        ANO_FABRICO: number
        CILINDRADA: number
        REF_CHASSI: string
        DESCRICAO: string
        INSERIDO_POR: number | null
        ACTUALIZADO_POR: number | null
        REMOVIDO_POR: number | null
        DATA_INSERCAO: Date | null
        DATA_ACTUALIZACAO: Date | null
        DATA_REMOCAO: Date | null
    }
}
```

em caso de error retorna:

```json
{
    code: 401,
    message: "Ocorreu um erro ao remover os dados da veiculo",
    data: {},
    error: {error}
}
```

## Veiculo Categoraia

Metodo: GET
URL: /veiculo/categoria/
Resposta:
em caso de sucesso retorna:

```json
{
      ID: number
      NOME: string
      REMOVIDO_POR: number | null
      DATA_INSERCAO: Date | null
      DATA_ACTUALIZACAO: Date | null
      DATA_REMOCAO: Date | null
}
```

## Apolice


## Adenda Pagamento

Visualizar "Pagamento de uma adenda" adenda pagamento pelo id da adenda
Metodo: GET
URL: /adenda_pagamento/:id
Resposta:
em caso de sucesso retorna:

```json
{
    code: 200,
    message: "Os pagamentos associados a adenda foram carregados com sucesso",
    data: { ApolicePagamento 1 }, 
    
}
```

em caso de erro
 ```json
 {
    code: 401,
    message:"Ocorreu um erro na pesquisa do(s) pagamento(s) associados a adenda",
    data: {},
    error: {error}
 }
 ```

Visualizar "Pagamentos de uma adenda" adenda pagamento pelo id da adenda
Metodo: GET
URL: /adenda_pagamento/adenda/:id
Resposta:
em caso de sucesso retorna:

```json
{
    code: 200,
    message: "Os pagamentos associados a adenda foram carregados com sucesso",
    data: [
        { AdendaPagamento 1 }, { AdendaPagamento 2}
    ] 
    
}
```

em caso de erro
 ```json
 {
    code: 401,
    message:"Ocorreu um erro na pesquisa do(s) pagamento(s) associados a adenda",
    data: {},
    error: {error}
 }
 ```

Adicionar  "Pagamentos de uma adenda" apolice pagamento pelo id da adenda
Metodo: POST
URL: /adenda_pagamento/
Body: 
```json
{
    ID: number
    ADENDA_ID: number | null
    DESCONTOS: Prisma.Decimal
    VALOR_PAGO: Prisma.Decimal
    DATA_INSERCAO: Date | null
    DATA_ACTUALIZACAO: Date | null
    DATA_REMOCACAO: Date | null
    INSERIDO_POR: number | null
    ACTUALIZADO_POR: number | null
}
```

Resposta:
em caso de sucesso retorna:

```json
{
    ID: number
    ADENDA_ID: number | null
    DESCONTOS: Prisma.Decimal
    VALOR_PAGO: Prisma.Decimal
    DATA_INSERCAO: Date | null
    DATA_ACTUALIZACAO: Date | null
    DATA_REMOCACAO: Date | null
    INSERIDO_POR: number | null
    ACTUALIZADO_POR: number | null
}
```

em caso de erro
 ```json
 {
    code: 401,
    message: "Ocorreu um erro ao  adicionar/associar o pagamento a apólice",
    data: {},
    error: {error}
 }
 ```


## Preço Cilindrada

Visualizar preco_cilindrada
Metodo: GET
URL: /preco_cilindrada/
Resposta:
em caso de sucesso retorna:

```json
{
    code: 200,
    message: "Dados dos preços por cilindrada foram encontrados com sucesso",
    data: [
        {precoCilindrada 1 }, {precoCilindrada 2}, {...}
    ]
}
```

em caso de erro retorna:

```json
{
    code: 401,
    message: "Ocorreu um erro ao colectar os dados  dos preços por cilindrada",
    data: {}, 
    error: {erro}
}
```

Visualizar preco_cilindrada pelo id 
Metodo: GET
URL: /preco_cilindrada/:id
Resposta:
em caso de sucesso retorna:

```json
{
    code: 200,
    message: "Dados dos preços por cilindrada foram encontrados com sucesso",
    data: { precoCilindrada 1 }
    
}
```

em caso de erro retorna:

```json
{
    code: 401,
    message: "Ocorreu um erro ao inserir os dados preço por cilindrada",
    data: {}, 
    error: {erro}
}
```

Adicionar novo Preço por cilindrada
Metodo POST:
URL: /preco_cilindrada/
Body:

```json
{
    ID: number
    NOME: string
    LOTACAO: number
    VEICULO_CATEGORIA_ID: number
    PREMIO_TRIMESTRAL: Prisma.Decimal
    PREMIO_SEMESTRAL: Prisma.Decimal
    PREMIO_ANUAL: Prisma.Decimal
    PESO_KG: number
    CILINDRADA_MIN: number
    CILINDRADA_MAX: number
    INSERIDO_POR: number | null
    ACTUALIZADO_POR: number | null
    DATA_CRIACAO: Date | null
    DATA_ACTUALIZACAO: Date | null
}
```

Resposta:
em caso de sucesso retorna o objecto inserido com o id definido.

```json
{
    code: 200,
    message: "Dados do preço por cilindrada inseridos com sucesso",
    data: {
        ID: number
        NOME: string
        LOTACAO: number
        VEICULO_CATEGORIA_ID: number
        PREMIO_TRIMESTRAL: Prisma.Decimal
        PREMIO_SEMESTRAL: Prisma.Decimal
        PREMIO_ANUAL: Prisma.Decimal
        PESO_KG: number
        CILINDRADA_MIN: number
        CILINDRADA_MAX: number
        INSERIDO_POR: number | null
        ACTUALIZADO_POR: number | null
        DATA_CRIACAO: Date | null
        DATA_ACTUALIZACAO: Date | null
    }
}
```

em caso de erro retorna:

```json
{
    code: 401,
    message: "Ocorreu um erro ao inserir os dados preço por cilindrada",
    data: {},
    error: {error}
}
```

Actualizar Preço por cilindrada
Metodo PUT:
URL: /preco_cilindrada/:id
Body:

```json
{
    ID: number
      NOME: string
      LOTACAO: number
      VEICULO_CATEGORIA_ID: number
      PREMIO_TRIMESTRAL: Prisma.Decimal
      PREMIO_SEMESTRAL: Prisma.Decimal
      PREMIO_ANUAL: Prisma.Decimal
      PESO_KG: number
      CILINDRADA_MIN: number
      CILINDRADA_MAX: number
      INSERIDO_POR: number | null
      ACTUALIZADO_POR: number | null
      DATA_CRIACAO: Date | null
      DATA_ACTUALIZACAO: Date | null
}
```

Resposta:
em caso de sucesso retorna o objecto inserido com o id definido.

```json
{
    code: 200,
    message: "Dados do preço por cilindrada actualizados com sucesso",
    data: {
        ID: number
        NOME: string
        LOTACAO: number
        VEICULO_CATEGORIA_ID: number
        PREMIO_TRIMESTRAL: Prisma.Decimal
        PREMIO_SEMESTRAL: Prisma.Decimal
        PREMIO_ANUAL: Prisma.Decimal
        PESO_KG: number
        CILINDRADA_MIN: number
        CILINDRADA_MAX: number
        INSERIDO_POR: number | null
        ACTUALIZADO_POR: number | null
        DATA_CRIACAO: Date | null
        DATA_ACTUALIZACAO: Date | null
    }
}
```

em caso de erro retorna:

```json
{
    code: 401,
    message: "Ocorreu um erro ao actualizar os dados do preço cilindrada",
    data: {},
    error: {error}
}
```

Remover Preço por Cilindrada
Metodo DELETE:
URL: /preco_cilindrada/:id
Resposta:
em caso de sucesso retorna:

```json
{
    code: 200,
    message: "Dados do preço cilindrada removidos com sucesso",
    data: {
        ID: number
        NOME: string
        LOTACAO: number
        VEICULO_CATEGORIA_ID: number
        PREMIO_TRIMESTRAL: Prisma.Decimal
        PREMIO_SEMESTRAL: Prisma.Decimal
        PREMIO_ANUAL: Prisma.Decimal
        PESO_KG: number
        CILINDRADA_MIN: number
        CILINDRADA_MAX: number
        INSERIDO_POR: number | null
        ACTUALIZADO_POR: number | null
        DATA_CRIACAO: Date | null
        DATA_ACTUALIZACAO: Date | null
    }
}
```

em caso de error retorna:

```json
{
    code: 401,
    message: "Ocorreu um erro ao remover os dados do preço cilindrada",
    data: {},
    error: {error}
}
```

## Pessoa

Visualizar Pessoas
Metodo: GET
URL: /pessoa/
Resposta:
em caso de sucesso retorna:

```json
{
    code: 200,
    message: "Dados das pessoas foram encontrados com sucesso",
    data: [
        {pessoa 1 }, {pessoa 2}, {...}
    ]
}
```

em caso de erro retorna:

```json
{
    code: 401,
    message: "Occoreu um erro ao colectar dos dados das pessoas",
    data: {}, 
    error: {erro}
}
```

Vissualizar pesssoa pelo id
Metodo: GET
URL: /pessoa/:id
Resposta:
em caso de sucesso retorna:

```json
{
    code: 200,
    message: "Dados da pessoa foram encontrados com sucesso",
    data: {    
        ID: number
        PESSOA_TIPO_ID: number
        ENDERECO_ID: number | null
        NOME: string
        DATA_NASCIMENTO: Date
        SEXO: string
        NBI: string | null
        NIF: string
        ESTADO_CIVIL: string
        DATA_CRIACAO: Date | null
        DATA_ACTUALIZACAO: Date | null
    }
}
```

em caso de erro retorna:

```json
{
    code: 401,
    message: "Os dados da pessoa não foram encontrados usando o id de utilizador : X",
    data: {}, 
    error: {error}
}
```

Visualizar pessoa pelo numero do bilhete de identidade(NBI)
Metodo GET:
URL: /pessoa/nbi/:nbi
Resposta:
em caso de sucesso:

```json
{
    code: 200,
    message: "Dados da pessoa foram encontrados com sucesso",
    data: {
        ID: number
        PESSOA_TIPO_ID: number
        ENDERECO_ID: number | null
        NOME: string
        DATA_NASCIMENTO: Date
        SEXO: string
        NBI: string | null
        NIF: string
        ESTADO_CIVIL: string
        DATA_CRIACAO: Date | null
        DATA_ACTUALIZACAO: Date | null
    }
}
```

em caso de erro:

```json
{
    code: 401,
    message: "Os dados da pessoa não foram encontrados usando o id de utilizador : X",
    data: {},
    error: {error}
}
```

Visualizar pessoa pelo E-mail registrado no sistema
Metodo GET:
URL: /pessoa/email/:email
Resposta:
em caso de sucesso:

```json
{
    code: 200,
    message: "Dados da foram encontrados com sucesso",
    data: {pessoa 1 }
}
```

em caso de erro:

```json
{
    code: 401,
    message: "Os dados da pessoa não foram encontrados usando o E-mail: X",
    data: {},
    error: {error}
}
```

Visualizar pessoa pelo numero de telefone
Metodo GET:
URL: /pessoa/telefone/:telefone
Resposta:
em caso de sucesso:

```json
{
    code: 200,
    message: "Dados da pedssoa foram encontrados com sucesso",
    data: {pessoa 1 }
}
```

em caso de erro:

```json
{
    code: 401,
    message: "Os dados da pessoa não foram encontrados usando o numero de telefone: X",
    data: {},
    error: {error}
}
```

Adicionar nova pessoa
Metodo POST:
URL: /pessoa/
Body:

```json
{
    ID: number
    PESSOA_TIPO_ID: number
    ENDERECO_ID: number | null
    NOME: string
    DATA_NASCIMENTO: Date
    SEXO: string
    NBI: string | null
    NIF: string
    ESTADO_CIVIL: string
    DATA_CRIACAO: Date | null
    DATA_ACTUALIZACAO: Date | null
}
```

Resposta:
em caso de sucesso retorna o objecto inserido com o id definido.

```json
{
    code: 200,
    message: "Dados da pessoa inseridos com sucesso",
    data: {
        ID: number
        PESSOA_TIPO_ID: number
        ENDERECO_ID: number | null
        NOME: string
        DATA_NASCIMENTO: Date
        SEXO: string
        NBI: string | null
        NIF: string
        ESTADO_CIVIL: string
        DATA_CRIACAO: Date | null
        DATA_ACTUALIZACAO: Date | null
    }
}
```

em caso de erro retorna:

```json
{
    code: 401,
    message: "Ocorreu um erro ao inserir os dados da pessoa",
    data: {},
    error: {error}
}
```

Actualizar pessoa
Metodo PUT:
URL: /pessoa/:id
Body:

```json
{
    ID: number
    PESSOA_TIPO_ID: number
    ENDERECO_ID: number | null
    NOME: string
    DATA_NASCIMENTO: Date
    SEXO: string
    NBI: string | null
    NIF: string
    ESTADO_CIVIL: string
    DATA_CRIACAO: Date | null
    DATA_ACTUALIZACAO: Date | null
}
```

Resposta:
em caso de sucesso:

em caso de sucesso retorna o objecto actualizado

```json
{
    code: 200,
    message: "Dados da veiculo inseridos com sucesso",
    data: {
        ID: number
        PESSOA_TIPO_ID: number
        ENDERECO_ID: number | null
        NOME: string
        DATA_NASCIMENTO: Date
        SEXO: string
        NBI: string | null
        NIF: string
        ESTADO_CIVIL: string
        DATA_CRIACAO: Date | null
        DATA_ACTUALIZACAO: Date | null
    }
}

Remover o pessoa
Metodo DELETE:
URL: /pessoa/:id
Resposta:
em caso de sucesso retorna:

```json
{
    code: 200,
    message: "Dados da veiculo inseridos com sucesso",
    data: {
        ID: number
        PESSOA_TIPO_ID: number
        ENDERECO_ID: number | null
        NOME: string
        DATA_NASCIMENTO: Date
        SEXO: string
        NBI: string | null
        NIF: string
        ESTADO_CIVIL: string
        DATA_CRIACAO: Date | null
        DATA_ACTUALIZACAO: Date | null
    }
}
```

em caso de error retorna:

```json
{
    code: 401,
    message: "Ocorreu um erro ao remover os dados da pessoa",
    data: {},
    error: {error}
}
```