## DEFINIÇÕES

UMA APOLICE TEM VARIOS ELEMENTOS QUE SÂO:

- TIPO(Apólice, automovel, saúde e multiriscos e outros).
- Estado(Descreve em que estádo está a apólice, Activa, Desactiva, Cancelada, Expirada e outros).
- Pagamantos(São os pagamentos feitos dentro de uma apólice, que dependem do fracionamento).
- Fracionamento(É a a divisão dos pagamentos de uma apólice que podem ser (3,6 e 12 meses)).
- Coberturas(Coberturas são os termos que a apólice contempla) OBS: O preço da apólice pode variar de acordo as coberturas adicionadas.
- Tomador(es) é/são as pessoas que se beneficiam da apólice que são pessoas.
- Segurado é a pessoa que adjudica a apólice que pode ser pessoa físisca ou jurídica.

#### A apólice

É um contracto estabelecido entre uma entidade seguradora e uma entidade pessoal.


#### TIPO

o tipo representa os variações de uma apolice.

#### Estado

O estádo são as etapas em que uma apólice se encontra que podem ser(Activa/ Inactiva, Candelada, Em Processamento)

#### Pagamento

o pagamento é a tentidade que resepresta o mesmo dentro de uma apólice.

#### Fracionamento

O fracionamento é a divisão dos pagamentos efectuados em uma apólice.

#### Cobertura

A cobertura
são os items que a apolice de seguro cobrem,

#### Tomador

O tomador é o beneficiario da apolice de seguro.

#### Segurado

O segurado é a entidade(pessoa fisica ou juridica) que adjudica ou requisita os serviços da seguradora

## INSTALATION

Para instalar a base de dados mysql abre o ficheiro giant_db.sql na pasta MODELS e execute.


No ficheiro src\repositories\mysql\config.ts adicionar o as credeciais da abase de dados como nome da base de dados, utilizador e password




## ENDPOINTS


BASE: http://localhost/
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

## Veiculos

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
em caso de sucesso:

em caso de sucesso retorna o objecto inserido com o id definido.

```json
{
    code: 200,
    message: "Dados da veiculo inseridos com sucesso",
    data: {
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


