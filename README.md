## DEFINIÇÕES

UMA APOLICE TEM VARIOS ELEMENTOS QUE SÂO:

- TIPO(Apólice, automovel, saúde e multiriscos e outros).
- Estado(Descreve em que estádo está a apólice, Activa, Desactiva, Cancelada, Expirada e outros).
- Pagamantos(São os pagamentos feitos dentro de uma adenda, que dependem do fracionamento da apólice).
- Fracionamento(É a a divisão dos pagamentos de uma apólice que podem ser (3,6 e 12 meses)).
- Coberturas(Coberturas são os termos que a apólice contempla) OBS: O preço da apólice pode variar de acordo as coberturas adicionadas.
- Segurado(s)(Pessoa) é/são as pessoas que se beneficiam da apólice que são pessoas.
- Tomador(Pessoa) é a pessoa que adjudica a apólice que pode ser pessoa física ou jurídica.

### A apólice

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
    "code": 200,
    "message": "Dados dos veiculos foram encontrados com sucesso",
    "data": [veiculo 1, veiculo 2, ...]
}
```

em caso de erro retorna:

```json
{
    "code": 401,
    "message": "Os dados dos veiculos não foram encontrados",
    "data": {}, 
    "error": {erro}
}
```

Veiculo pelo id na base de dados
Metodo: GET
URL: /veiculo/1
Resposta:
em caso de sucesso retorna:

```json
{
    "code": 200,
    "message": "Dados dos veiculo foram encontrados com sucesso",
    "data": { veiculo 1 }
}
```

em caso de erro retorna:

```json
{
   "code": 401,
   "message": "Os dados do veiculo não foram encontrados",
   "data": {}, 
   "error": {error}
}
```

Veiculo pela matricola
Metodo GET:
URL: veiculo/matricola/:matricula
Resposta:
em caso de sucesso:

```json
{
    "code": 200,
    "message": "Dados dos veiculo foram encontrados com sucesso",
    "data": {veiculo 1 }
}
```

em caso de erro:

```json
{
    "code": 401,
    "message": "Dados dos veiculo não foram encontrados",
    "data": {},
    "error": {error}
}
```

Adicionar novo veiculo
Metodo POST:
URL: /veiculo/
Body:

```json
{
      "VEICULO_CATEGORIA_ID": 1,
      "MATRICULA": "LD-14-15-AD",
      "MARCA": "Kia",
      "MODELO": "Sportage",
      "ANO_AQUISICAO": 2014,
      "CAPITAL_AQUISICAO": 6700000,
      "PESO_BRUTO": 23567,
      "N_LOTACAO": 4,
      "ANO_FABRICO": 2014,
      "CILINDRADA": 1243,
      "REF_CHASSI": "287632BMVSV03",
      "DESCRICAO": "Simples descrição do veiculo"
}
```

Resposta:
em caso de sucesso retorna o objecto inserido com o id definido.

```json
{
    "code": 200,
    "message": "Dados da veiculo inseridos com sucesso",
    "data": {
        "ID": 1,
        "VEICULO_CATEGORIA_ID": 1,
        "MATRICULA": "",
        "MARCA": "Kia",
        "MODELO": "",
        "ANO_AQUISICAO": 2014,
        "CAPITAL_AQUISICAO": 6700000,
        "PESO_BRUTO": 23567,
        "N_LOTACAO": 4,
        "ANO_FABRICO": 2014,
        "CILINDRADA": 1243,
        "REF_CHASSI": "287632BMVSV03",
        "DESCRICAO": "Simples descrição do veiculo",
        "INSERIDO_POR": null,
        "ACTUALIZADO_POR": null,
        "REMOVIDO_POR": null,
        "DATA_INSERCAO": "2023-11-12T00:18:56.000Z",
        "DATA_ACTUALIZACAO": "2023-11-12T00:18:56.000Z",
        "DATA_REMOCAO": "2023-11-12T00:18:56.000Z"
    }
}
```

em caso de erro retorna:

```json
{
    "code": 401,
    "message": "Ocorreu um erro ao inserir os dados da veiculo",
    "data": {},
    "error": {error}
}
```

Actualizar o veiculo
Metodo PUT:
URL: /veiculo/:id
Body:

```json
{
    "ID": 1,
    "VEICULO_CATEGORIA_ID": 1,
    "MATRICULA": "",
    "MARCA": "Kia",
    "MODELO": "",
    "ANO_AQUISICAO": 2009,
    "CAPITAL_AQUISICAO": 10700000,
    "PESO_BRUTO": 23567,
    "N_LOTACAO": 5,
    "ANO_FABRICO": 2008,
    "CILINDRADA": 1243,
    "REF_CHASSI": "287632BMVSV03",
    "DESCRICAO": "Simples descrição do veiculo",
    "INSERIDO_POR": null,
    "ACTUALIZADO_POR": null,
    "REMOVIDO_POR": null,
    "DATA_INSERCAO": "2023-11-12T00:18:56.000Z",
    "DATA_ACTUALIZACAO": "2023-11-12T00:18:56.000Z",
    "DATA_REMOCAO": "2023-11-12T00:18:56.000Z"
}
```

Resposta:
em caso de sucesso:

em caso de sucesso retorna o objecto actualizado

```json
{
    "code": 200,
    "message": "Dados da veiculo inseridos com sucesso",
    "data": {
        "ID": 1,
        "VEICULO_CATEGORIA_ID": 1,
        "MATRICULA": "",
        "MARCA": "Kia",
        "MODELO": "",
        "ANO_AQUISICAO": 2009,
        "CAPITAL_AQUISICAO": 10700000,
        "PESO_BRUTO": 23567,
        "N_LOTACAO": 5,
        "ANO_FABRICO": 2008,
        "CILINDRADA": 1243,
        "REF_CHASSI": "287632BMVSV03",
        "DESCRICAO": "Simples descrição do veiculo",
        "INSERIDO_POR": null,
        "ACTUALIZADO_POR": null,
        "REMOVIDO_POR": null,
        "DATA_INSERCAO": "2023-11-12T00:18:56.000Z",
        "DATA_ACTUALIZACAO": "2023-11-12T00:18:56.000Z",
        "DATA_REMOCAO": "2023-11-12T00:18:56.000Z"
    }
}

Remover o veiculo
Metodo DELETE:
URL: /veiculo/:id
Resposta:
em caso de sucesso retorna:

```json
{
    "code": 200,
    "message": "Dados da veiculo inseridos com sucesso",
    "data": {
        "ID": 1,
        "VEICULO_CATEGORIA_ID": 1,
        "MATRICULA": "",
        "MARCA": "Kia",
        "MODELO": "",
        "ANO_AQUISICAO": 2009,
        "CAPITAL_AQUISICAO": 10700000,
        "PESO_BRUTO": 23567,
        "N_LOTACAO": 5,
        "ANO_FABRICO": 2008,
        "CILINDRADA": 1243,
        "REF_CHASSI": "287632BMVSV03",
        "DESCRICAO": "Simples descrição do veiculo",
        "INSERIDO_POR": null,
        "ACTUALIZADO_POR": null,
        "REMOVIDO_POR": null,
        "DATA_INSERCAO": "2023-11-12T00:18:56.000Z",
        "DATA_ACTUALIZACAO": "2023-11-12T00:18:56.000Z",
        "DATA_REMOCAO": "2023-11-12T00:18:56.000Z"
    }
}
```

em caso de error retorna:

```json
{
    "code": 401,
    "message": "Ocorreu um erro ao remover os dados da veiculo",
    "data": {},
    "error": {error}
}
```

## Veiculo Categoria

Metodo: GET
URL: /veiculo/categoria/
Resposta em caso de sucesso retorna:

```json
{
    "code":200,
    "message":"Dados das categorias de veiculos foram encontrados com sucesso",
    "data":[
        {"ID":1,"NOME":"Ligeriro ","REMOVIDO_POR":null,"DATA_INSERCAO":null,"DATA_ACTUALIZACAO":null,"DATA_REMOCAO":null},
        {"ID":2,"NOME":"Camionetas","REMOVIDO_POR":null,"DATA_INSERCAO":null,"DATA_ACTUALIZACAO":null,"DATA_REMOCAO":null},
        {"ID":3,"NOME":"Autocaravanas","REMOVIDO_POR":null,"DATA_INSERCAO":null,"DATA_ACTUALIZACAO":null,"DATA_REMOCAO":null},
        {"ID":4,"NOME":"Pesados","REMOVIDO_POR":null,"DATA_INSERCAO":null,"DATA_ACTUALIZACAO":null,"DATA_REMOCAO":null}
    ]
}
```

## Apolice

Visualizar todas as apolices
Metodo: GET
URL: /apolice/
Resposta:
em caso de sucesso retorna:

```json

{
    "code":200,
    "message":"Dados das apolices encontrados com sucesso",
    "data":[
        {
            "ID":2,
            "APOLICE_TIPO_ID":1,
            "APOLICE_ESTADO_ID":6,
            "APOLICE_FRACIONAMENTO_ID":1,
            "NUMERO":"34343",
            "TOMADOR_ID":1,
            "INSERIDO_POR":null,
            "ACTUALIZADO_POR":null,
            "DATA_INSERCAO":"2023-11-11T12:58:03.000Z",
            "DATA_ACTUALIZACAO":null
        },
        {
            "ID":3,
            "APOLICE_TIPO_ID":1,
            "APOLICE_ESTADO_ID":6,
            "APOLICE_FRACIONAMENTO_ID":1,
            "NUMERO":"1 12.112023/0",
            "TOMADOR_ID":1,
            "INSERIDO_POR":null,
            "ACTUALIZADO_POR":null,
            "DATA_INSERCAO":"2023-11-12T00:12:23.000Z",
            "DATA_ACTUALIZACAO":null
        },
        {
            "ID":4,
            "APOLICE_TIPO_ID":1,
            "APOLICE_ESTADO_ID":3,
            "APOLICE_FRACIONAMENTO_ID":1,
            "NUMERO":"1 12 11.2023/0001",
            "TOMADOR_ID":1,
            "INSERIDO_POR":null,
            "ACTUALIZADO_POR":null,
            "DATA_INSERCAO":"2023-11-12T00:18:56.000Z",
            "DATA_ACTUALIZACAO":null
        }
    ]
}
 ```

 em caso de erro

 ```json
 {
    "code": 401,
    "message":"Ocorreu um erro ao carregar os dados das apolices",
    "data": {},
    "error": {error}
 }
 ```

Visualizar a apolice pelo ID (Identificador)
Metodo: GET
URL: /apolice/2
Resposta:
em caso de sucesso retorna:

 ```json
{
    "code":200,
    "message":"Dados da apólice foram encontrados com sucesso",
    "data":{
        "ID":2,
        "APOLICE_TIPO_ID":1,
        "APOLICE_ESTADO_ID":6,
        "APOLICE_FRACIONAMENTO_ID":1,
        "NUMERO":"34343",
        "TOMADOR_ID":1,
        "INSERIDO_POR":null,
        "ACTUALIZADO_POR":null,
        "DATA_INSERCAO":"2023-11-11T12:58:03.000Z",
        "DATA_ACTUALIZACAO":null
    }
}
 ```

Visualizar os estados de uma apolice

Metodo: GET
URL: /apolice/estado/
Resposta:
em caso de sucesso retorna:

```json
{
    "code":200,
    "message":"Dados dos estados das apolices encontrados com sucesso",
    "data":[
        {
            "ID":1,
            "NOME":"Em Processamento",
            "DESCRICAO":"A Apolice está em processamento; é um estado temporário em que a se encontra",
            "INSERIDO_POR":null,
            "ACTUALIZADO_POR":null,
            "REMOVIDO_POR":null,
            "DATA_INSERCAO":"2023-11-10T09:29:37.000Z",
            "DATA_ACTUALIZACAO":"2023-11-10T09:29:37.000Z"
        },
        {
            "ID":2,
            "NOME":"Suspensa",
            "DESCRICAO":"A apolice está suspensa",
            "INSERIDO_POR":null,
            "ACTUALIZADO_POR":null,
            "REMOVIDO_POR":null,
            "DATA_INSERCAO":"2023-11-10T09:29:37.000Z",
            "DATA_ACTUALIZACAO":"2023-11-10T09:29:37.000Z"
        },
        {
            "ID":3,
            "NOME":"Cancelada",
            "DESCRICAO":"A apólice está cancelada",
            "INSERIDO_POR":null,
            "ACTUALIZADO_POR":null,
            "REMOVIDO_POR":null,
            "DATA_INSERCAO":"2023-11-10T09:29:37.000Z",
            "DATA_ACTUALIZACAO":"2023-11-10T09:29:37.000Z"
        },
        {
            "ID":4,
            "NOME":"Expirada",
            "DESCRICAO":"A apólice passou a data de renovação",
            "INSERIDO_POR":null,
            "ACTUALIZADO_POR":null,
            "REMOVIDO_POR":null,
            "DATA_INSERCAO":"2023-11-10T09:29:37.000Z",
            "DATA_ACTUALIZACAO":"2023-11-10T09:29:37.000Z"
        },
        {
            "ID":5,
            "NOME":"Activa",
            "DESCRICAO":"A apólice está valida durante o tempo em que é visualizada",
            "INSERIDO_POR":null,
            "ACTUALIZADO_POR":null,
            "REMOVIDO_POR":null,
            "DATA_INSERCAO":"2023-11-10T09:29:37.000Z",
            "DATA_ACTUALIZACAO":"2023-11-10T09:29:37.000Z"
        },
        {
            "ID":6,
            "NOME":"Em Simulação",
            "DESCRICAO":"A apolice ainda está em estado de simulação",
            "INSERIDO_POR":null,
            "ACTUALIZADO_POR":null,
            "REMOVIDO_POR":null,
            "DATA_INSERCAO":"2023-11-10T09:29:37.000Z",
            "DATA_ACTUALIZACAO":"2023-11-10T09:29:37.000Z"
        },
        {
            "ID":7,
            "NOME":"Inactiva",
            "DESCRICAO":"A apólice foi paga",
            "INSERIDO_POR":null,
            "ACTUALIZADO_POR":null,
            "REMOVIDO_POR":null,
            "DATA_INSERCAO":"2023-11-10T09:29:37.000Z",
            "DATA_ACTUALIZACAO":"2023-11-10T09:29:37.000Z"
        }
    ]
}
```

em caso de erro retorna:

```json
{
    "code": 401,
    "message":"Os dados dos estados das apolices não foram encontrados",
    "data": {},
    "error": {error}
}```

Criar uma Apolice

Metodo: POST
URL: /apolice/
BODY
 ```json
{
    "APOLICE_TIPO_ID": 1,
    "APOLICE_ESTADO_ID": 1,
    "APOLICE_FRACIONAMENTO_ID": 1,
    "TOMADOR_ID": 1
}
 ```

Resposta em caso de sucesso retorna:

```json
{
    "code": 200,
    "message": "Dados da apólice inseridos com sucesso",
    "data": {
        "ID": 1,
        "APOLICE_TIPO_ID": 1,
        "APOLICE_ESTADO_ID": 1,
        "APOLICE_FRACIONAMENTO_ID": 1,
        "TOMADOR_ID": 1
    }
}
```

em caso de erro:

```json
{
    "code": 401,
    "message": "Ocorreu um erro ao inserir os dados da apólice",
    "data": {},
    "error": error
}
```

Actualizar uma Apolice
Metodo: PUT
URL: /apolice/
BODY

```json
{
    "ID": 1,
    "APOLICE_TIPO_ID": 1,
    "APOLICE_ESTADO_ID": 2,
    "APOLICE_FRACIONAMENTO_ID": 1,
    "TOMADOR_ID": 2
}
```

Resposta em caso de sucesso retorna:

```json
{
    "code": 200,
    "message": "Dados da apólice actualizados com sucesso",
    "data": {
        "ID": 1,
        "APOLICE_TIPO_ID": 1,
        "APOLICE_ESTADO_ID": 2,
        "APOLICE_FRACIONAMENTO_ID": 1,
        "TOMADOR_ID": 2
    }
}
```

Remover uma Apolice

Metodo: DELETE
URL: /apolice/1
BODY
Resposta:
em caso de sucesso retorna:

```json
{
    "code": 200,
    "message": "Dados da apólice foram removidos com sucesso",
    "data": {
        "ID": 1,
        "APOLICE_TIPO_ID": 1,
        "APOLICE_ESTADO_ID": 2,
        "APOLICE_FRACIONAMENTO_ID": 1,
        "TOMADOR_ID": 2
    }
}
```

Resposta em caso de erro retorna:

```json
{
    "code": 401,
    "message": "Ocorreu um erro ao remover os dados da apólice",
    "data": {},
    "error": {error}
}
```

## Apolice Fracionamento(O fracionamentos não precisam ser editaveis)

Visualizar o Fracionamento do apólice.
URL:/apolice_fracionamento/
BODY: NONE

resposta me caso de sucesso:

```json
{
    "code":200,
    "message":"Dados dos estados das apolices encontrados com sucesso",
    "data":[
        {
            "ID":1,
            "FRACIONADO_EM":"Anual",
            "NO_FRACOES":1,
            "INSERIDO_POR":null,
            "ACTUALIZADO_POR":null,
            "DATA_INSERCAO":"2023-11-29T14:38:17.000Z",
            "DATA_ACTUALIZACAO":"2023-11-29T14:38:17.000Z"
        },
        {
            "ID":2,
            "FRACIONADO_EM":"Semestral",
            "NO_FRACOES":2,
            "INSERIDO_POR":null,
            "ACTUALIZADO_POR":null,
            "DATA_INSERCAO":"2023-11-29T14:38:17.000Z",
            "DATA_ACTUALIZACAO":"2023-11-29T14:38:17.000Z"
        },
        {
            "ID":3,
            "FRACIONADO_EM":"Trimestral",
            "NO_FRACOES":4,
            "INSERIDO_POR":null,
            "ACTUALIZADO_POR":null,
            "DATA_INSERCAO":"2023-11-29T14:38:17.000Z",
            "DATA_ACTUALIZACAO":"2023-11-29T14:38:17.000Z"
        }
    ]
}
```

resposta em caso de erro:

```json
{
    "code": 404,
    "message": "Os dados dos estados das apolices não foram encontrados",
    "data": {},
    "error": { error }
}
```

## Adenda

Visualizar as adendas de uma apólice
METODO: GET
URL:/adenda/apolice/1
BODY: NONE

Resposta em caso de sucesso:

```json
{
    "code":200,
    "message":"Dados das adendas encontrados com sucesso",
    "data":[
        {
            "ID":1,
            "APOLICE_ID":5,
            "NUMERO":"1 80 2023/0001",
            "PREMIO":"11500000.64",
            "DATA_INICIO":"2023-10-10T00:00:00.000Z",
            "DATA_FIM":"2024-12-12T00:00:00.000Z",
            "INSERIDO_POR":null,
            "ACTUALIZADO_POR":null,
            "DATA_INSERCAO":"2023-12-11T14:20:49.000Z",
            "DATA_ACTUALIZACAO":"2023-12-11T14:20:49.000Z"},
        {
            "ID":2,
            "APOLICE_ID":5,
            "NUMERO":"1 80 2023/0002",
            "PREMIO":"10500000.34",
            "DATA_INICIO":"2023-10-10T00:00:00.000Z",
            "DATA_FIM":"2024-12-12T00:00:00.000Z",
            "INSERIDO_POR":null,
            "ACTUALIZADO_POR":null,
            "DATA_INSERCAO":"2023-12-11T14:20:49.000Z",
            "DATA_ACTUALIZACAO":"2023-12-11T14:20:49.000Z"
        },
        {
            "ID":3,
            "APOLICE_ID":6,
            "NUMERO":"1 80 2023/0003",
            "PREMIO":"12000000.64",
            "DATA_INICIO":"2023-10-10T00:00:00.000Z",
            "DATA_FIM":"2024-12-12T00:00:00.000Z",
            "INSERIDO_POR":null,
            "ACTUALIZADO_POR":null,
            "DATA_INSERCAO":"2023-12-11T14:20:49.000Z",
            "DATA_ACTUALIZACAO":"2023-12-11T14:20:49.000Z"
            },
        {
            "ID":4,
            "APOLICE_ID":6,
            "NUMERO":"1 80 2023/0004",
            "PREMIO":"12000000.64",
            "DATA_INICIO":"2023-10-10T00:00:00.000Z",
            "DATA_FIM":"2024-12-12T00:00:00.000Z",
            "INSERIDO_POR":null,
            "ACTUALIZADO_POR":null,
            "DATA_INSERCAO":"2023-12-11T14:20:49.000Z",
            "DATA_ACTUALIZACAO":"2023-12-11T14:20:49.000Z"
        }
    ]
}
```

resposta em caso de erro:

```json
{
    "code": 404,
    "message": "Os dados das adendas não foram encontrados",
    "data": {},
    "error": { error }
}
```

Visualizar todos os dados das adendas
METODO: GET
URL:/adenda/
BODY: NONE

Resposta em caso de sucesso:

```json
{
    "code":200,
    "message":"Dados das adendas encontrados com sucesso",
    "data":[
        {
            "ID":1,
            "APOLICE_ID":5,
            "NUMERO":"1 80 2023/0001",
            "PREMIO":"11500000.64",
            "DATA_INICIO":"2023-10-10T00:00:00.000Z",
            "DATA_FIM":"2024-12-12T00:00:00.000Z",
            "INSERIDO_POR":null,
            "ACTUALIZADO_POR":null,
            "DATA_INSERCAO":"2023-12-11T14:20:49.000Z",
            "DATA_ACTUALIZACAO":"2023-12-11T14:20:49.000Z"},
        {
            "ID":2,
            "APOLICE_ID":5,
            "NUMERO":"1 80 2023/0002",
            "PREMIO":"10500000.34",
            "DATA_INICIO":"2023-10-10T00:00:00.000Z",
            "DATA_FIM":"2024-12-12T00:00:00.000Z",
            "INSERIDO_POR":null,
            "ACTUALIZADO_POR":null,
            "DATA_INSERCAO":"2023-12-11T14:20:49.000Z",
            "DATA_ACTUALIZACAO":"2023-12-11T14:20:49.000Z"
        },
        {
            "ID":3,
            "APOLICE_ID":6,
            "NUMERO":"1 80 2023/0003",
            "PREMIO":"12000000.64",
            "DATA_INICIO":"2023-10-10T00:00:00.000Z",
            "DATA_FIM":"2024-12-12T00:00:00.000Z",
            "INSERIDO_POR":null,
            "ACTUALIZADO_POR":null,
            "DATA_INSERCAO":"2023-12-11T14:20:49.000Z",
            "DATA_ACTUALIZACAO":"2023-12-11T14:20:49.000Z"
            },
        {
            "ID":4,
            "APOLICE_ID":6,
            "NUMERO":"1 80 2023/0004",
            "PREMIO":"12000000.64",
            "DATA_INICIO":"2023-10-10T00:00:00.000Z",
            "DATA_FIM":"2024-12-12T00:00:00.000Z",
            "INSERIDO_POR":null,
            "ACTUALIZADO_POR":null,
            "DATA_INSERCAO":"2023-12-11T14:20:49.000Z",
            "DATA_ACTUALIZACAO":"2023-12-11T14:20:49.000Z"
        }
    ]
}
```

resposta em caso de erro:

```json
{
    "code": 404,
    "message": "Os dados das adendas não foram encontrados",
    "data": {},
    "error": { error }
}
```

Visualizar todos os dados da adenda pelo ID
METODO: GET
URL:/adenda/1
BODY: NONE

Resposta em caso de sucesso:

```json
{
    "code":200,
    "message":"Dados da adenda foram encontrados com sucesso",
    "data":{
        "ID":1,
        "APOLICE_ID":5,
        "NUMERO":"1 80 2023/0001",
        "PREMIO":"11500000.64",
        "DATA_INICIO":"2023-10-10T00:00:00.000Z",
        "DATA_FIM":"2024-12-12T00:00:00.000Z",
        "INSERIDO_POR":null,
        "ACTUALIZADO_POR":null,
        "DATA_INSERCAO":"2023-12-11T14:20:49.000Z",
        "DATA_ACTUALIZACAO":"2023-12-11T14:20:49.000Z"
    }
}
```

resposta em caso de erro:

```json
{
    "code": 404,
    "message": "Os dados das adenda não foram encontrados",
    "data": {},
    "error": { error }
}
```

Criar uma adenda e associar a uma apolice
Metodo: POST
URL:/adenda/
Body:

```json
{
    "APOLICE_ID": 1,
    "PREMIO": 12425454435.345,
    "DATA_INICIO": 2023-10-10,
    "DATA_FIM": 2024-04-12
}
```

resposta em caso de sucesso:

```json
{
    "code": 200,
    "message": "Adenda criada com sucesso",
    "data": {
        "ID":1,
        "APOLICE_ID":5,
        "NUMERO":"1 80 2023/0001",
        "PREMIO":"11500000.64",
        "DATA_INICIO":"2023-10-10T00:00:00.000Z",
        "DATA_FIM":"2024-12-12T00:00:00.000Z",
        "INSERIDO_POR":null,
        "ACTUALIZADO_POR":null,
        "DATA_INSERCAO":"2023-12-11T14:20:49.000Z",
        "DATA_ACTUALIZACAO":"2023-12-11T14:20:49.000Z"
    }
}
```

Resposta em caso de erro:

```json
{
    "code": 401,
    "message": "Ocorreu um erro ao inserir os dados da adenda",
    "data": {},
    "error": { error }
}
```

Editar uma adenda e associar a uma apolice
Metodo: PUT
URL:/adenda/
Body:

```json
{
    "APOLICE_ID":5,
    "NUMERO":"1 80 2023/0001",
    "PREMIO":"11500000.64",
    "DATA_INICIO":"2023-10-10",
    "DATA_FIM":"2024-12-12",
}
```

resposta em caso de sucesso:

```json
{
    "code": 200,
    "message": "Adenda removida com sucesso",
    "data": {
        "ID":1,
        "APOLICE_ID":5,
        "NUMERO":"1 80 2023/0001",
        "PREMIO":"11500000.64",
        "DATA_INICIO":"2023-10-10T00:00:00.000Z",
        "DATA_FIM":"2024-12-12T00:00:00.000Z",
        "INSERIDO_POR":null,
        "ACTUALIZADO_POR":null,
        "DATA_INSERCAO":"2023-12-11T14:20:49.000Z",
        "DATA_ACTUALIZACAO":"2023-12-11T14:20:49.000Z"
    }
}
```

Resposta em caso de erro:

```json
{
    "code": 401,
    "message": "Ocorreu um erro ao actualizar a adenda",
    "data": {},
    "error": { error }
}
```

Remover uma adenda
Metodo: Delete
URL:/adenda/1
Body:NONE

resposta em caso de sucesso:

```json
{
    "code": 200,
    "message": "Adenda removida com sucesso",
    "data": {
        "ID":1,
        "APOLICE_ID":5,
        "NUMERO":"1 80 2023/0001",
        "PREMIO":"11500000.64",
        "DATA_INICIO":"2023-10-10T00:00:00.000Z",
        "DATA_FIM":"2024-12-12T00:00:00.000Z",
        "INSERIDO_POR":null,
        "ACTUALIZADO_POR":null,
        "DATA_INSERCAO":"2023-12-11T14:20:49.000Z",
        "DATA_ACTUALIZACAO":"2023-12-11T14:20:49.000Z"
    }
}
```

Resposta em caso de erro:

```json
{
    "code": 401,
    "message": "Ocorreu um erro ao remover a adenda",
    "data": {},
    "error": { error }
}
```

Associar Veiculos a uma adenda
Metodo: POST
URL:/adenda/veiculos
BODY:

```json
{
    "adenda": {
        "ID":1,
        "APOLICE_ID":5,
        "NUMERO":"1 80 2023/0001",
        "PREMIO":"11500000.64",
        "DATA_INICIO":"2023-10-10",
        "DATA_FIM":"2024-12-12",
    },
    "items": [
        {
            "ID":1,
            "VEICULO_CATEGORIA_ID":1,
            "MATRICULA":"LD-34-20",
            "MARCA":"Toyota",
            "MODELO":"Prious",
            "ANO_AQUISICAO":2022,
            "CAPITAL_AQUISICAO":"20000000",
            "PESO_BRUTO":300000,
            "N_LOTACAO":5,
            "ANO_FABRICO":2021,
            "CILINDRADA":43200,
            "REF_CHASSI":"325AFi54834",
            "DESCRICAO":"Excelente Veículo",
        },
        {
            "ID":2,
            "VEICULO_CATEGORIA_ID":3,
            "MATRICULA":"LD-34-20",
            "MARCA":"GMC",
            "MODELO":"Sierra",
            "ANO_AQUISICAO":2023,
            "CAPITAL_AQUISICAO":"100000000",
            "PESO_BRUTO":300000,
            "N_LOTACAO":6,
            "ANO_FABRICO":2022,
            "CILINDRADA":43200,
            "REF_CHASSI":"325AFi54834",
            "DESCRICAO":"Excelente Veículo, 4x4",
        }
    ] 
}
```

resposta em caso de sucesso:

```json
{
    "code": 200,
    "message": "Items da adenda inseridos com sucesso",
    "data": [
        {
            "ID":1,
            "VEICULO_CATEGORIA_ID":1,
            "MATRICULA":"LD-34-20",
            "MARCA":"Toyota",
            "MODELO":"Prious",
            "ANO_AQUISICAO":2022,
            "CAPITAL_AQUISICAO":"20000000",
            "PESO_BRUTO":300000,
            "N_LOTACAO":5,
            "ANO_FABRICO":2021,
            "CILINDRADA":43200,
            "REF_CHASSI":"325AFi54834",
            "DESCRICAO":"Excelente Veículo",
        },
        {
            "ID":2,
            "VEICULO_CATEGORIA_ID":3,
            "MATRICULA":"LD-34-20",
            "MARCA":"GMC",
            "MODELO":"Sierra",
            "ANO_AQUISICAO":2023,
            "CAPITAL_AQUISICAO":"100000000",
            "PESO_BRUTO":300000,
            "N_LOTACAO":6,
            "ANO_FABRICO":2022,
            "CILINDRADA":43200,
            "REF_CHASSI":"325AFi54834",
            "DESCRICAO":"Excelente Veículo, 4x4",
        }
    ]
}
```

resposta em caso de erro:

```json
{
    "code": 401,
    "message": "Ocorreu um erro ao inserir os items a adenda",
    "data": {},
    "error": { error }
}
```

Listar Segurados associados a uma adenda pelo ID da adenda
Metodo: GET
URL:/adenda/segurados/1
BODY: NONE

resposta em caso de sucesso:

```json
{
    "code":200,
    "message":"Dados dos segurados da adenda foram encontrados com sucesso",
    "data":[
        {
            "ID":1,
            "PESSOA_TIPO_ID":1,
            "ENDERECO_ID":5,
            "NOME":"Pedro Nuno Santos",
            "DATA_NASCIMENTO":"1998-12-12T00:00:00.000Z",
            "SEXO":"M",
            "NBI":"003466243LA35",
            "NIF":"003466243LA35",
            "ESTADO_CIVIL":"S",
            "INSERIDO_POR":null,
            "ACTUALIZADO_POR":null,
            "DATA_INSERCAO":"2023-11-29T14:20:10.000Z",
            "DATA_ACTUALIZACAO":"2023-11-29T14:20:10.000Z",
            "pessoa_endereco":{
                "ID":5,
                "TELEFONE":"933000300",
                "TELEFONE_ALTERNATIVO":"933000300",
                "EMAIL":"psantos@infoco.ao",
                "BAIRRO":"Talatona",
                "CIDADE":"Luanda",
                "PROVINCIA":"Luanda",
                "INSERIDO_POR":null,
                "ACTUALIZADO_POR":null,
                "DATA_CRIACAO":"2023-11-29T14:20:10.000Z",
                "DATA_ACTUALIZACAO":"2023-11-29T14:20:10.000Z"
            },
            "pessoa_tipo":{
                "ID":1,
                "NOME_TIPO":"Pessoa Física",
                "INSERIDO_POR":null,
                "ACTUALIZADO_POR":null,
                "DATA_CRIACAO":"2023-11-29T15:07:41.000Z",
                "DATA_ACTUALIZACAO":"2023-11-29T15:07:41.000Z"
            }
        }
    ]
}
```

resposta em caso de erro:

```json
{
    "code": 401,
    "message": "Ocorreu um erro ao carregar os dados dos segurados da adenda",
    "data": {},
    "error": { error }
}
```

Associar Segurados a uma adenda
Metodo: POST
URL:/adenda/segurados
BODY:

```json
{
    "adenda": {
        "ID":1,
        "APOLICE_ID":5,
        "NUMERO":"1 80 2023/0001",
        "PREMIO":"11500000.64",
        "DATA_INICIO":"2023-10-10",
        "DATA_FIM":"2024-12-12",
    },
    "segurados": [
        {
            "ID":1,
            "NOME":"Pedro Nuno Santos",
            "PESSOA_TIPO_ID":1,
            "DATA_NASCIMENTO":"1998-12-12",
            "SEXO":"M",
            "NBI":"003466243LA35",
            "NIF":"003466243LA35",
            "ESTADO_CIVIL":"S",
            "ENDERECO_ID":1
        },
        {
            "ID":2,
            "NOME":"António Costa",
            "PESSOA_TIPO_ID":1,
            "DATA_NASCIMENTO":"1995-10-22",
            "SEXO":"M",
            "NBI":"003466243LA35",
            "NIF":"003466243LA35",
            "ESTADO_CIVIL":"c",
            "ENDERECO_ID":2
        }   
    ]
}
```

resposta em caso de sucesso:

```json
{
    "code": 200,
    "message": "Segurados adicionados a adenda com sucesso",
    "data": [
        {
            "ID":1,
            "NOME":"Pedro Nuno Santos",
            "PESSOA_TIPO_ID":1,
            "DATA_NASCIMENTO":"1998-12-12",
            "SEXO":"M",
            "NBI":"003466243LA35",
            "NIF":"003466243LA35",
            "ESTADO_CIVIL":"S",
            "ENDERECO_ID":1
        },
        {
            "ID":2,
            "NOME":"António Costa",
            "PESSOA_TIPO_ID":1,
            "DATA_NASCIMENTO":"1995-10-22",
            "SEXO":"M",
            "NBI":"003466243LA35",
            "NIF":"003466243LA35",
            "ESTADO_CIVIL":"c",
            "ENDERECO_ID":2
        }   
    ]
}
```

resposta em caso de erro:

```json
{
    "code": 401,
    "message": "Ocorreu um erro ao adicionar os segurados a adenda",
    "data": {},
    "error": { error }
}
```

Listar Items/Veiculos associados a uma adenda pelo ID da adenda
Metodo: GET
URL:/adenda/veiculos/1
BODY: NONE

resposta em caso de sucesso:

```json
{
    "code":200,
    "message":"Dados dos veículos da adenda foram encontrados com sucesso",
    "data":[
        {
            "ID":1,
            "VEICULO_CATEGORIA_ID":1,
            "MATRICULA":"LD-34-20",
            "MARCA":"Toyota",
            "MODELO":"Prious",
            "ANO_AQUISICAO":2022,
            "CAPITAL_AQUISICAO":"20000000",
            "PESO_BRUTO":300000,
            "N_LOTACAO":5,
            "ANO_FABRICO":2021,
            "CILINDRADA":43200,
            "REF_CHASSI":"325AFi54834",
            "DESCRICAO":"Excelente Veículo",
            "INSERIDO_POR":null,
            "ACTUALIZADO_POR":null,
            "DATA_INSERCAO":"2023-12-18T07:24:54.000Z",
            "DATA_ACTUALIZACAO":"2023-12-18T07:24:54.000Z",
            "adenda_item_segurado":[
            {
                "ID":1,
                "ADENDA_ID":1,
                "APOLICE_TIPO_ID":null,
                "ITEM_ID":1,"PREMIO":"12343.34",
                "INSERIDO_POR":null,
                "ACTUALIZADO_POR":null,
                "DATA_INSERCAO":"2023-12-22T17:36:49.000Z",
                "DATA_ACTUALIZACAO":"2023-12-22T17:36:49.000Z"}
        ]}]
}
```

resposta em caso de erro:

```json
{
    "code": 401,
    "message": "Ocorreu um erro ao carregar os dados veículos da adenda",
    "data": {},
    "error": { error }
}
```



Calcular o premio de uma adenda
Metodo: POST
URL:/adenda/calcular_premio/
BODY:

```json
{
    "ID": 1,
    "APOLICE_ID":1,
    "NUMERO": "1 80 2023/0001",
    "DATA_INICIO": "2023-10-10",
    "DATA_FIM": "2024-12-12"
}
```

resposta em caso de sucesso:

```json
{
    "code": 200,
    "message": "O prémio da adenda foi calculado e adicionado com sucesso",
    "data": {
        "ID": 1,
        "APOLICE_ID": 5,
        "NUMERO": "1 80 2023/0001",
        "PREMIO": "24923",
        "DATA_INICIO": "2023-10-10T00:00:00.000Z",
        "DATA_FIM": "2024-12-12T00:00:00.000Z",
        "INSERIDO_POR": null,
        "ACTUALIZADO_POR": null,
        "DATA_INSERCAO": "2023-12-11T14:20:49.000Z",
        "DATA_ACTUALIZACAO": "2023-12-23T01:14:12.000Z"
    }
}
```

resposta em caso de erro:

```json
{
    "code": 401,
    "message": "Ocorreu um ao efectuar os calculos do premio da adenda",
    "data": {},
    "error": { error }
}
```

## Adenda Pagamento

Visualizar a tabela adenda_pagamento
Metodo: GET
URL: /adenda_pagamento/
Resposta:
em caso de sucesso retorna:

```json
{
    "code":200,
    "message":"Dados dos pagamentos das adendas encontrados com sucesso",
    "data":[
        {
            "ID":1,
            "ADENDA_ID":1,
            "DESCONTOS":"1500",
            "VALOR_A_PAGAR":"30000",
            "VALOR_PAGO":"10000",
            "INSERIDO_POR":null,
            "ACTUALIZADO_POR":null,
            "DATA_INSERCAO":"2023-12-18T06:42:30.000Z",
            "DATA_ACTUALIZACAO":"2023-12-18T06:45:16.000Z"
        },
        {
            "ID":2,
            "ADENDA_ID":2,
            "DESCONTOS":"3000",
            "VALOR_A_PAGAR":"60000",
            "VALOR_PAGO":"15000",
            "INSERIDO_POR":null,
            "ACTUALIZADO_POR":null,
            "DATA_INSERCAO":"2023-12-18T06:45:16.000Z",
            "DATA_ACTUALIZACAO":"2023-12-18T06:45:16.000Z"
        }
    ]
}
```

em caso de erro

```json
{
    "code": 401,
    "message":"Ocorreu um erro na pesquisa do(s) pagamento(s) associados a adenda",
    "data": {},
    "error": {error}
}
 ```

Visualizar a adenda_pagamento pelo ID do pagamento
Metodo: GET
URL: /adenda_pagamento/1
Resposta:
em caso de sucesso retorna:

```json
{
    "code":200,
    "message":"Dados do pagamento da adenda foram encontrados com sucesso",
    "data": {
        "ID":1,
        "ADENDA_ID":1,
        "DESCONTOS":"1500",
        "VALOR_A_PAGAR":"30000",
        "VALOR_PAGO":"10000",
        "INSERIDO_POR":null,
        "ACTUALIZADO_POR":null,
        "DATA_INSERCAO":"2023-12-18T06:42:30.000Z",
        "DATA_ACTUALIZACAO":"2023-12-18T06:45:16.000Z"
    }
}
```

em caso de erro

```json
{
    "code": 401,
    "message":"Ocorreu um erro na pesquisa do pagamento associado a adenda",
    "data": {},
    "error": {error}
}
 ```

Visualizar "Pagamento de uma adenda" adenda pagamento pelo id da adenda
Metodo: GET
URL: /adenda_pagamento/adenda/2
Resposta em caso de sucesso retorna:

```json
{
    "code":200,
    "message":"Dados do pagamento da adenda foram encontrados com sucesso",
    "data": {
        "ID":2,
        "ADENDA_ID":2,
        "DESCONTOS":"3000",
        "VALOR_A_PAGAR":"60000",
        "VALOR_PAGO":"15000",
        "INSERIDO_POR":null,
        "ACTUALIZADO_POR":null,
        "DATA_INSERCAO":"2023-12-18T06:45:16.000Z",
        "DATA_ACTUALIZACAO":"2023-12-18T06:45:16.000Z"
    }
}
```

Resposta em caso de erro

```json
{
    "code": 401,
    "message":"Ocorreu um erro na pesquisa do(s) pagamento(s) associados a adenda",
    "data": {},
    "error": {error}
}
 ```

Criar/Efetuar pagamento a uma adenda
Metodo: POST
URL: /adenda_pagamento/
Body:

```json
{
    "ADENDA_ID": 2,
    "DESCONTOS": "2133.54",
    "VALOR_PAGO": "34123.00"
}
```

Resposta:
em caso de sucesso retorna:

```json
{
    "code":200,
    "message":"Dados da adenda inseridos com sucesso",
    "data": {
        "ID":3,
        "ADENDA_ID":1,
        "DESCONTOS":"2000",
        "VALOR_A_PAGAR":"0",
        "VALOR_PAGO":"40000",
        "INSERIDO_POR":null,
        "ACTUALIZADO_POR":null,
        "DATA_INSERCAO":"2023-12-18T06:11:34.000Z",
        "DATA_ACTUALIZACAO":"2023-12-18T06:11:34.000Z"
    }
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
    "code": 200,
    "message": "Dados dos preços por cilindrada foram encontrados com sucesso",
    "data": [preco_cilindrada_1 , preco_cilindrada_2, ...]
}
```

em caso de erro retorna:

```json
{
    "code": 401,
    "message": "Ocorreu um erro ao colectar os dados  dos preços por cilindrada",
    "data": {}, 
    "error": {erro}
}
```

Visualizar preco_cilindrada pelo id
Metodo: GET
URL: /preco_cilindrada/:id
Resposta:
em caso de sucesso retorna:

```json
{
    "code": 200,
    "message": "Dados dos preços por cilindrada foram encontrados com sucesso",
    "data": { precoCilindrada 1 }
    
}
```

em caso de erro retorna:

```json
{
    "code": 401,
    "message": "Ocorreu um erro ao inserir os dados preço por cilindrada",
    "data": {}, 
    "error": {erro}
}
```

Adicionar novo Preço por cilindrada
Metodo POST:
URL: /preco_cilindrada/
Body:

```json
{
    "NOME":"Ligeiro Particular",
    "LOTACAO":0,
    "VEICULO_CATEGORIA_ID":1,
    "PREMIO_TRIMESTRAL":"6351",
    "PREMIO_SEMESTRAL":"12582",
    "PREMIO_ANUAL":"24923",
    "PESO_KG":0,
    "CILINDRADA_MIN":0,
    "CILINDRADA_MAX":1300
}

```

Resposta:
em caso de sucesso retorna o objecto inserido com o id definido.

```json
{
    "code": 200,
    "message": "Dados do preço por cilindrada inseridos com sucesso",
    "data": {
        "ID":15,
        "NOME":"Ligeiro Particular",
        "LOTACAO":0,
        "VEICULO_CATEGORIA_ID":1,
        "PREMIO_TRIMESTRAL":"6351",
        "PREMIO_SEMESTRAL":"12582",
        "PREMIO_ANUAL":"24923",
        "PESO_KG":0,
        "CILINDRADA_MIN":0,
        "CILINDRADA_MAX":1300,
        "INSERIDO_POR":null,
        "ACTUALIZADO_POR":null,
        "DATA_CRIACAO":"2023-11-10T09:34:47.000Z",
        "DATA_ACTUALIZACAO":"2023-11-10T09:34:47.000Z",
    }
}
```

em caso de erro retorna:

```json
{
    "code": 401,
    "message": "Ocorreu um erro ao inserir os dados preço por cilindrada",
    "data": {},
    "error": {error}
}
```

Actualizar Preço por cilindrada
Metodo PUT:
URL: /preco_cilindrada/:id
Body:

```json
{
    "ID":15,
    "NOME":"Ligeiro Particular",
    "LOTACAO":4,
    "VEICULO_CATEGORIA_ID":2,
    "PREMIO_TRIMESTRAL":"6351",
    "PREMIO_SEMESTRAL":"12582",
    "PREMIO_ANUAL":"24923",
    "PESO_KG":0,
    "CILINDRADA_MIN":0,
    "CILINDRADA_MAX":1300
}
```

Resposta:
em caso de sucesso retorna o objecto inserido com o id definido.

```json
{
    "code": 200,
    "message": "Dados do preço por cilindrada actualizados com sucesso",
    "data": {
        "ID":15,
        "NOME":"Ligeiro Particular",
        "LOTACAO":4,
        "VEICULO_CATEGORIA_ID":2,
        "PREMIO_TRIMESTRAL":"6351",
        "PREMIO_SEMESTRAL":"12582",
        "PREMIO_ANUAL":"24923",
        "PESO_KG":0,
        "CILINDRADA_MIN":0,
        "CILINDRADA_MAX":1300,
        "INSERIDO_POR":null,
        "ACTUALIZADO_POR":null,
        "DATA_CRIACAO":"2023-11-10T09:34:47.000Z",
        "DATA_ACTUALIZACAO":"2023-11-10T09:34:47.000Z",
    }
}
```

em caso de erro retorna:

```json
{
    "code": 401,
    "message": "Ocorreu um erro ao actualizar os dados do preço cilindrada",
    "data": {},
    "error": {error}
}
```

Remover Preço por Cilindrada
Metodo DELETE:
URL: /preco_cilindrada/:id
Resposta:
em caso de sucesso retorna:

```json
{
    "code": 200,
    "message": "Dados do preço cilindrada removidos com sucesso",
    "data": {
        "ID":15,
        "NOME":"Ligeiro Particular",
        "LOTACAO":4,
        "VEICULO_CATEGORIA_ID":2,
        "PREMIO_TRIMESTRAL":"6351",
        "PREMIO_SEMESTRAL":"12582",
        "PREMIO_ANUAL":"24923",
        "PESO_KG":0,
        "CILINDRADA_MIN":0,
        "CILINDRADA_MAX":1300,
        "INSERIDO_POR":null,
        "ACTUALIZADO_POR":null,
        "DATA_CRIACAO":"2023-11-10T09:34:47.000Z",
        "DATA_ACTUALIZACAO":"2023-11-10T09:34:47.000Z",
    }
}
```

em caso de error retorna:

```json
{
    "code": 401,
    "message": "Ocorreu um erro ao remover os dados do preço cilindrada",
    "data": {},
    "error": {error}
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
    "code":200,
    "message":"Dados das pessoas foram encontrados com sucesso",
    "data":[
        {
            "ID":1,
            "NOME":"Pedro Nuno Santos",
            "PESSOA_TIPO": {
                "ID":1,
                "NOME":"Pessoa Física"
            },
            "DATA_NASCIMENTO":"1962-07-02",
            "SEXO":"M",
            "NBI":"003466243LA35",
            "NIF":"003466243LA35",
            "ESTADO_CIVIL":"S",
            "ENDERECO": {
                "ID":1,
                "TELEFONE":"933000300",
                "TELEFONE_ALT":"933000301",
                "BAIRRO":"Talatona",
                "CIDADE":"Luanda",
                "PROVINCIA":"Luanda",
                "EMAIL":"psantos@infoco.ao"
            }
        },
        {
            "ID":2,
            "NOME":"Andre Vieira",
            "PESSOA_TIPO": {
                "ID":1,
                "NOME":"Pessoa Física"
            },
            "DATA_NASCIMENTO":"1977-11-06",
            "SEXO":"M",
            "NBI":"004556243LA24",
            "NIF":"004556243LA24",
            "ESTADO_CIVIL":"C",
            "ENDERECO": {
                "ID":2,
                "TELEFONE":"944000400",
                "TELEFONE_ALT":"944000401",
                "BAIRRO":"Boa fé",
                "CIDADE":"Luanda",
                "PROVINCIA":"Luanda",
                "EMAIL":"avieira@infoco.ao"
            }
        },
        {
            "ID":3,
            "NOME":"Maria Miguel",
            "PESSOA_TIPO": { 
                "ID":1,
                "NOME":"Pessoa Física"
            },
            "DATA_NASCIMENTO":"1986-04-12",
            "SEXO":"F",
            "NBI":"005674243LA33",
            "NIF":"005674243LA33",
            "ESTADO_CIVIL":"C",
            "ENDERECO": {
                "ID":3,
                "TELEFONE":"955000500",
                "TELEFONE_ALT":"955000501",
                "BAIRRO":"Luanda Sul",
                "CIDADE":"Luanda",
                "PROVINCIA":"Luanda",
                "EMAIL":"mmiguel@infoco.ao"
            }
        },
        {
            "ID":4,
            "NOME":"Alexandre Vicente",
            "PESSOA_TIPO": { 
                "ID":1,"NOME":"Pessoa Física"
            },
            "DATA_NASCIMENTO":"1988-03-24",
            "SEXO":"M",
            "NBI":"002556243LA22",
            "NIF":"002556243LA22",
            "ESTADO_CIVIL":"C",
            "ENDERECO": {
                "ID":4,
                "TELEFONE":"966000600",
                "TELEFONE_ALT":"966000601",
                "BAIRRO":"Dangereux",
                "CIDADE":"Luanda",
                "PROVINCIA":"Luanda",
                "EMAIL":"avicente@infoco.ao"
            }
        },    
        {
            "ID":5,
            "NOME":"Talita Aleixo",
            "PESSOA_TIPO": { 
                "ID":1,
                "NOME":"Pessoa Física"
            },
            "DATA_NASCIMENTO":"1990-01-07",
            "SEXO":"F",
            "NBI":"005236243LA03",
            "NIF":"005236243LA03",
            "ESTADO_CIVIL":"S",
            "ENDERECO": {
                "ID":5,
                "TELEFONE":"977000700",
                "TELEFONE_ALT":"966000701",
                "BAIRRO":"Camama",
                "CIDADE":"Luanda",
                "PROVINCIA":"Luanda",
                "EMAIL":"taleixo@infoco.ao"
            }
        }
    ]
}
```

em caso de erro retorna:

```json
{
    "code": 401,
    "message": "Ocorreu um erro ao colectar dos dados das pessoas",
    "data": {}, 
    "error": {erro}
}
```

Visualizar pesssoa pelo id
Metodo: GET
URL: /pessoa/5
Resposta em caso de sucesso retorna:

```json
{
    "code": 200,
    "message": "Dados da pessoa foram encontrados com sucesso",
    "data": {    
        "ID":5,
        "NOME":"Talita Aleixo",
        "PESSOA_TIPO": { 
            "ID":1,
            "NOME":"Pessoa Física"
        },
        "DATA_NASCIMENTO":"1990-01-07",
        "SEXO":"F",
        "NBI":"005236243LA03",
        "NIF":"005236243LA03",
        "ESTADO_CIVIL":"S",
        "ENDERECO": {
            "ID":5,
            "TELEFONE":"977000700",
            "TELEFONE_ALT":"966000701",
            "BAIRRO":"Camama",
            "CIDADE":"Luanda",
            "PROVINCIA":"Luanda",
            "EMAIL":"taleixo@infoco.ao"
        }
    }
}
```

em caso de erro retorna:

```json
{
    "code": 401,
    "message": "Os dados da pessoa não foram encontrados usando o id de utilizador",
    "data": {}, 
    "error": {error}
}
```

Visualizar pessoa pelo numero do bilhete de identidade(NBI)
Metodo GET:
URL: /pessoa/nbi/:nbi
Resposta:
em caso de sucesso:

```json
{
    "code": 200,
    "message": "Dados da pessoa foram encontrados com sucesso",
    "data": {
        "ID":5,
        "NOME":"Talita Aleixo",
        "PESSOA_TIPO": { 
            "ID":1,
            "NOME":"Pessoa Física"
        },
        "DATA_NASCIMENTO":"1990-01-07",
        "SEXO":"F",
        "NBI":"005236243LA03",
        "NIF":"005236243LA03",
        "ESTADO_CIVIL":"S",
        "ENDERECO": {
            "ID":5,
            "TELEFONE":"977000700",
            "TELEFONE_ALT":"966000701",
            "BAIRRO":"Camama",
            "CIDADE":"Luanda",
            "PROVINCIA":"Luanda",
            "EMAIL":"taleixo@infoco.ao"
        }
    }
}
```

em caso de erro:

```json
{
    "code": 401,
    "message": "Os dados da pessoa não foram encontrados usando o id de utilizador : X",
    "data": {},
    "error": {error}
}
```

Visualizar pessoa pelo E-mail registrado no sistema
Metodo GET:
URL: /pessoa/email/:email
Resposta:
em caso de sucesso:

```json
{
    "code": 200,
    "message": "Dados da foram encontrados com sucesso",
    "data": {pessoa 1 }
}
```

em caso de erro:

```json
{
    "code": 401,
    "message": "Os dados da pessoa não foram encontrados usando o E-mail: X",
    "data": {},
    "error": {error}
}
```

Visualizar pessoa pelo numero de telefone
Metodo GET:
URL: /pessoa/telefone/:telefone
Resposta:
em caso de sucesso:

```json
{
    "code": 200,
    "message": "Dados da pessoa foram encontrados com sucesso",
    "data": { pessoa 1 }
}
```

em caso de erro:

```json
{
    "code": 401,
    "message": "Os dados da pessoa não foram encontrados usando o numero de telefone: X",
    "data": {},
    "error": {error}
}
```

Adicionar nova pessoa
Metodo POST:
URL: /pessoa/
Body:

```json
{
    "NOME": "Pedro Nuno Santos",
    "PESSOA_TIPO": {
        "ID": 1,
        "NOME": "Pessoa Física"
    },
    "DATA_NASCIMENTO": "1998-12-12",
    "SEXO": "M",
    "NBI": "003466243LA35",
    "NIF": "003466243LA35",
    "ESTADO_CIVIL": "S",
    "ENDERECO": {
        "TELEFONE": "933000300",
        "TELEFONE_ALT": "933000301",
        "BAIRRO": "Talatona",
        "CIDADE": "Luanda",
        "PROVINCIA": "Luanda",
        "EMAIL": "psantos@infoco.ao"
    }
}
```

Resposta:
em caso de sucesso retorna o objecto inserido com o id definido.

```json
{
    "code": 200,
    "message": "Dados da pessoa inseridos com sucesso",
    "data": {
        "ID": 1,
        "NOME": "Pedro Nuno Santos",
        "PESSOA_TIPO": {
            "ID": 1,
            "NOME": "Pessoa Física"
        },
        "DATA_NASCIMENTO": "Mon Jul 02 1962 01:00:00 GMT+0100 (Hora padrão da África Ocidental)",
        "SEXO": "M",
        "NBI": "003466243LA35",
        "NIF": "003466243LA35",
        "ESTADO_CIVIL": "S",
        "ENDERECO": {
            "ID": 1,
            "TELEFONE": "933000300",
            "TELEFONE_ALT": "933000301",
            "BAIRRO": "Talatona",
            "CIDADE": "Luanda",
            "PROVINCIA": "Luanda",
            "EMAIL": "psantos@infoco.ao"
        }
    }
}
```

em caso de erro retorna:

```json
{
    "code": 401,
    "message": "Ocorreu um erro ao inserir os dados da pessoa",
    "data": {},
    "error": {error}
}
```

Actualizar pessoa
Metodo PUT:
URL: /pessoa/:id
Body:

```json
{
    "ID": 1,
    "NOME": "Pedro Nuno Santos",
    "PESSOA_TIPO": {
        "ID": 1,
        "NOME": "Pessoa Física"
    },
    "DATA_NASCIMENTO": "Mon Jul 02 1962 01:00:00 GMT+0100 (Hora padrão da África Ocidental)",
    "SEXO": "M",
    "NBI": "003466243LA35",
    "NIF": "003466243LA35",
    "ESTADO_CIVIL": "S",
    "ENDERECO": {
        "ID": 1,
        "TELEFONE": "933000300",
        "TELEFONE_ALT": "933000301",
        "BAIRRO": "Talatona",
        "CIDADE": "Luanda",
        "PROVINCIA": "Luanda",
        "EMAIL": "psantos@infoco.ao"
    }
}
```

Resposta:
em caso de sucesso:

em caso de sucesso retorna o objecto actualizado

```json
{
    "code": 200,
    "message": "Dados da veiculo inseridos com sucesso",
    "data": {
        "ID": 1,
        "NOME": "Pedro Nuno Santos",
        "PESSOA_TIPO": {
            "ID": 1,
            "NOME": "Pessoa Física"
        },
        "DATA_NASCIMENTO": "Mon Jul 02 1962 01:00:00 GMT+0100 (Hora padrão da África Ocidental)",
        "SEXO": "M",
        "NBI": "003466243LA35",
        "NIF": "003466243LA35",
        "ESTADO_CIVIL": "S",
        "ENDERECO": {
            "ID": 1,
            "TELEFONE": "933000300",
            "TELEFONE_ALT": "933000301",
            "BAIRRO": "Talatona",
            "CIDADE": "Luanda",
            "PROVINCIA": "Luanda",
            "EMAIL": "psantos@infoco.ao"
        }
    }
}

Remover o pessoa
Metodo DELETE:
URL: /pessoa/:id
Resposta:
em caso de sucesso retorna:

```json
{
    "code": 200,
    "message": "Dados da veiculo inseridos com sucesso",
    "data": {
       "ID": 1,
        "NOME": "Pedro Nuno Santos",
        "PESSOA_TIPO": {
            "ID": 1,
            "NOME": "Pessoa Física"
        },
        "DATA_NASCIMENTO": "Mon Jul 02 1962 01:00:00 GMT+0100 (Hora padrão da África Ocidental)",
        "SEXO": "M",
        "NBI": "003466243LA35",
        "NIF": "003466243LA35",
        "ESTADO_CIVIL": "S",
        "ENDERECO": {
            "ID": 1,
            "TELEFONE": "933000300",
            "TELEFONE_ALT": "933000301",
            "BAIRRO": "Talatona",
            "CIDADE": "Luanda",
            "PROVINCIA": "Luanda",
            "EMAIL": "psantos@infoco.ao"
        }
    }
}
```

em caso de error retorna:

```json
{
    "code": 401,
    "message": "Ocorreu um erro ao remover os dados da pessoa",
    "data": {},
    "error": {error}
}
```

## Cobertura

Visualizar as coberturas
Metodo: GET
URL: /cobertura/
BODY: NONE
Resposta:
em caso de sucesso retorna:

```json
{
    "code": 200,
    "message": "Dados das Coberturas foram encontrados com sucesso",
    "data": [cobertura_1, cobertura_2, .cobertura_3,...]
}
```

em caso de erro:

```json
{
    "code": 404,
    "message": "Ocorreu um erro ao colectar dos dados das Coberturas",
    "data": {},
    "error": {error}
}
```

Visualizar coberturas pelos tipos de apolice
Metodo: GET
URL: /cobertura/apolice_tipo/1
BODY: NONE
Resposta
em caso de sucesso:

```json
{
    "code":200,
    "message":"Dados das Coberturas foram encontrados com sucesso",
    "data":{
        "ID":1,
        "APOLICE_TIPO_ID":1,
        "COBERTURA_BASE":true,
        "SIGLA":"RTER",
        "NOME":"Responsabilidade civil perante terceiros",
        "DESCRICAO":"A pessoa responderá por ato causado por terceiro, sendo para tanto necessário que exista um vínculo jurídico entre o responsável e o causador do dano. Em regra, tal responsabilidade gera responsabilidade solidária, com algumas exceções, como o caso do incapaz que responde subsidiariamente.",
        "VALOR_A_PAGAR":"0",
        "DESCONTO":"0",
        "INSERIDO_POR":null,
        "ACTUALIZADO_POR":null,
        "DATA_CRIACAO":"2023-11-29T14:38:17.000Z",
        "DATA_ACTUALIZACAO":"2023-11-29T14:38:17.000Z",
        "apolice_tipo":
        {
            "ID":1,
            "SIGLA":"APSAT",
            "NOME":"Apólice de seguro automóvel",
            "DESCRICAO":"O seguro automotivo, também conhecido apenas como seguro auto, é outra possibilidade popular no mercado brasileiro. Como o nome sugere, ele é voltado para proteger veículos automotores. Além de carros, essa alternativa pode servir para proteger motos e caminhões,","INSERIDO_POR":null,
            "ACTUALIZADO_POR":null,
            "DATA_CRIACAO":"2023-11-29T14:38:17.000Z",
            "DATA_ACTUALIZACAO":"2023-11-29T14:38:17.000Z"
        }
    }
}
```

em caso de erro:

```json
{
    "code": 400,
    "message": "Ocorreu um erro ao carregar os dados das Coberturas",
    "data": {},
    "error": { error }
}
```

Visualizar cobertura pelo ID
Metodo: GET
URL: /cobertura/1
BODY: NONE
Resposta:
em caso de sucesso retorna:

```json
{
    "code":200,
    "message":"Dados da Cobertura foram encontrados com sucesso",
    "data":{
        "ID":1,
        "APOLICE_TIPO_ID":1,
        "COBERTURA_BASE":true,
        "SIGLA":"RTER",
        "NOME":"Responsabilidade civil perante terceiros",
        "DESCRICAO":"A pessoa responderá por ato causado por terceiro, sendo para tanto necessário que exista um vínculo jurídico entre o responsável e o causador do dano. Em regra, tal responsabilidade gera responsabilidade solidária, com algumas exceções, como o caso do incapaz que responde subsidiariamente.",
        "VALOR_A_PAGAR":"0",
        "DESCONTO":"0",
        "INSERIDO_POR":null,
        "ACTUALIZADO_POR":null,
        "DATA_CRIACAO":"2023-11-29T14:38:17.000Z",
        "DATA_ACTUALIZACAO":"2023-11-29T14:38:17.000Z",
        "apolice_tipo":{
            "ID":1,
            "SIGLA":"APSAT",
            "NOME":"Apólice de seguro automóvel",
            "DESCRICAO":"O seguro automotivo, também conhecido apenas como seguro auto, é outra possibilidade popular no mercado brasileiro. Como o nome sugere, ele é voltado para proteger veículos automotores. Além de carros, essa alternativa pode servir para proteger motos e caminhões,","INSERIDO_POR":null,
            "ACTUALIZADO_POR":null,
            "DATA_CRIACAO":"2023-11-29T14:38:17.000Z",
            "DATA_ACTUALIZACAO":"2023-11-29T14:38:17.000Z"
        }
    }
}
```

em caso de erro:

```json
{

    "code": 404,
    "message": "Ocorreu um erro ao colectar dos dados das Coberturas",
    "data": {},
    "error": {error}
}
```

Criar/ Inserir uma nova Cobertura
Metodo: POST
URL: /cobertura/
BODY:

```json
{
    "APOLICE_TIPO_ID": 1,
    "COBERTURA_BASE": false,
    "SIGLA": "UPDFT",
    "NOME": "Cobertura para terceiros",
    "DESCRICAO": "isto é uma simples descrição",
    "VALOR_A_PAGAR": 243524.32,
    "DESCONTO": 2345.43
}
```

em caso de sucesso:

```json
{
    "code": 200,
    "message": "Dados da Cobertura inseridos com sucesso",
    "data": {
        "ID": 9, 
        "APOLICE_TIPO_ID": 1,
        "COBERTURA_BASE": false,
        "SIGLA": "UPDFT",
        "NOME": "Cobertura para terceiros",
        "DESCRICAO": "isto é uma simples descrição",
        "VALOR_A_PAGAR": 243524.32,
        "DESCONTO": 2345.43
    }
}
```

em caso de erro:

```json
{
    "code": 404,
    "message": "Ocorreu um erro ao inserir os dados da Cobertura",
    "data": {},
    "error": {error}
}

Actualizar uma Cobertura
Metodo: PUT
URL: /cobertura/
BODY:

```json
{
    "ID": 9,
    "APOLICE_TIPO_ID": 1,
    "COBERTURA_BASE": false,
    "SIGLA": "UPDFT",
    "NOME": "Cobertura para terceiros",
    "DESCRICAO": "isto é uma simples descrição",
    "VALOR_A_PAGAR": 243524.32,
    "DESCONTO": 2345.43
}
```

em caso de sucesso:

```json
{
    "code": 200,
    "message": "Dados da Cobertura inseridos com sucesso",
    "data": {
        "ID": 9,
        "APOLICE_TIPO_ID": 1,
        "COBERTURA_BASE": false,
        "SIGLA": "UPDFT",
        "NOME": "Cobertura para terceiros",
        "DESCRICAO": "isto é uma simples descrição",
        "VALOR_A_PAGAR": 243524.32,
        "DESCONTO": 2345.43
    }
}
```

em caso de erro:

```json
{
    "code": 404,
    "message": "Ocorreu um erro ao inserir os dados da Cobertura",
    "data": {},
    "error": {error}
}
```

Remover uma Cobertura
Metodo: DELETE
URL: /cobertura/1
BODY: NONE

em caso de sucesso:

```json
{
    "code": 200,
    "message": "Dados da Cobertura removidos com sucesso",
    "data": {
        "ID": 9,
        "APOLICE_TIPO_ID": 1,
        "COBERTURA_BASE": false,
        "SIGLA": "UPDFT",
        "NOME": "Cobertura para terceiros",
        "DESCRICAO": "isto é uma simples descrição",
        "VALOR_A_PAGAR": 243524.32,
        "DESCONTO": 2345.43
    }
}
```

em caso de erro:

```json
{
    "code": 401,
    "message": "Ocorreu um erro ao remover os dados da Cobertura",
    "data": {},
    "error": {error}
}
```

## Estatistica

Visualizar todos os dados Estatisticos
METODO: GET
URL:/estatistica_todos/
BODY: NONE

Resposta em caso de sucesso:

```json
{
    "code":200,
    "message":"Dados estatisticos carregados com sucesso",
    "data":{
        "APOLICE_STATS":{
            "APOLICES_EMITIDAS":12,
            "APOLICES_CANCELADAS":1,
            "APOLICE_ADJUDICADAS":22,
            "APOLICES_EXPIRADAS":0
            },
        "CLIENT_STATS":{
            "TOTAL_CLIENTES":33,
            "TOTAL_SEGURADOS":34,
            "TOTAL_UTENTES":31
        },
        "SINISTROS_STATS":{
            "TOTAL_SINISTRO_ACIDENTE_TRABALHO":0,
            "TOTAL_SINISTRO_AUTOMOVEL":0,
            "TOTAL_SINISTRO_SAUDE":0,
            "TOTAL_SINISTROS":0
        }
    }
}
```

resposta em caso de erro:

```json
{
    "code": 404,
    "message": "Ocorreu um erro ao carregar dos dados estatisticos",
    "data": {},
    "error": { error }
}
```

Visualizar todos os dados Estatisticos baseados em intervalos de tempo
METODO: GET
URL:/estatistica_todos/2020-01-01/2023-12-10/
BODY: NONE

Resposta em caso de sucesso:

```json
{
    "code":200,
    "message":"Dados estatisticos carregados com sucesso",
    "data":{
        "APOLICE_STATS":{
            "APOLICES_EMITIDAS":0,
            "APOLICES_CANCELADAS":0,
            "APOLICE_ADJUDICADAS":0,
            "APOLICES_EXPIRADAS":0
            },
        "CLIENT_STATS":{
            "TOTAL_CLIENTES":0,
            "TOTAL_SEGURADOS":0,
            "TOTAL_UTENTES":1
        },
        "SINISTROS_STATS":{
            "TOTAL_SINISTRO_ACIDENTE_TRABALHO":0,
            "TOTAL_SINISTRO_AUTOMOVEL":0,
            "TOTAL_SINISTRO_SAUDE":0,
            "TOTAL_SINISTROS":0
        }
    }
}
```

resposta em caso de erro:

```json
{
    "code": 404,
    "message": "Ocorreu um erro ao carregar dos dados estatisticos",
    "data": {},
    "error": { error }
}
```

Visualizar todos os dados Estatisticos da Apolice
METODO: GET
URL:/estatistica_apolices/
BODY: NONE

Resposta em caso de sucesso:

```json
{
    "code":200,
    "message":"Dados estatisticos carregados com sucesso",
    "data":{
        "APOLICE_STATS":{
            "APOLICES_EMITIDAS":0,
            "APOLICES_CANCELADAS":0,
            "APOLICE_ADJUDICADAS":0,
            "APOLICES_EXPIRADAS":0
        }
    }
}
```

resposta em caso de erro:

```json
{
    "code": 404,
    "message": "Ocorreu um erro ao carregar dos dados estatisticos das apólices",
    "data": {},
    "error": { error }
}
```

Visualizar todos os dados Estatisticos da Apolice em um periodo
METODO: GET
URL:/estatistica_apolices/2020-01-01/2023-12-10/
BODY: NONE

Resposta em caso de sucesso:

```json
{
    "code":200,
    "message":"Dados estatisticos carregados com sucesso",
    "data":{
        "APOLICE_STATS":{
            "APOLICES_EMITIDAS":0,
            "APOLICES_CANCELADAS":0,
            "APOLICE_ADJUDICADAS":0,
            "APOLICES_EXPIRADAS":0
        }
    }
}
```

resposta em caso de erro:

```json
{
    "code": 404,
    "message": "Ocorreu um erro ao carregar dos dados estatisticos das apólices",
    "data": {},
    "error": { error }
}
```

Visualizar todos os dados Estatisticos dos clientes
METODO: GET
URL:/estatistica_clientes/
BODY: NONE

Resposta em caso de sucesso:

```json
{
    "code":200,
    "message":"Dados estatisticos dos clientes carregados com sucesso",
    "data": {
        "CLIENT_STATS": {
        "TOTAL_CLIENTES":0,
        "TOTAL_SEGURADOS":0,
        "TOTAL_UTENTES":1
        }
    }
}
```

resposta em caso de erro:

```json
{
    "code": 404,
    "message": "Ocorreu um erro ao carregar dos dados estatisticos dos clientes",
    "data": {},
    "error": { error }
}
```

Visualizar todos os dados Estatisticos dos clientes em um periodo
METODO: GET
URL:/estatistica_clientes/2020-01-01/2023-12-10/
BODY: NONE

Resposta em caso de sucesso:

```json
{
    "code":200,
    "message":"Dados estatisticos dos clientes carregados com sucesso",
    "data":{
            "CLIENT_STATS":{
            "TOTAL_CLIENTES":0,
            "TOTAL_SEGURADOS":0,
            "TOTAL_UTENTES":1
        }
    }
}
```

resposta em caso de erro:

```json
{
    "code": 404,
    "message": "Ocorreu um erro ao carregar dos dados estatisticos dos clientes",
    "data": {},
    "error": { error }
}
```

## Gerar Documentos(Contracto da Apólice)

Gerar O contracto da Apólice
METODO: GET
URL:/generate_apolice/apolice/1
BODY: NONE

Resposta em caso de sucesso:

```json
{
    "code":200,
    "message":"Dados estatisticos dos clientes carregados com sucesso",
    "data": {
        "CLIENT_STATS": {
        "TOTAL_CLIENTES":0,
        "TOTAL_SEGURADOS":0,
        "TOTAL_UTENTES":1
        }
    }
}
```

resposta em caso de erro:

```json
{
    "code": 404,
    "message": "Ocorreu um erro ao gerar o contracto da Apólice.",
    "data": {},
    "error": { error }
}
```

## Gerar Dístico/Certificado do Veículo(s)

Gerar O contracto da Apólice
METODO: GET
URL:/generate_certificado/adenda/1
BODY: NONE

Resposta em caso de sucesso:

```json
{
    "code":200,
    "message":"Dados estatisticos dos clientes carregados com sucesso",
    "data": {
        "CLIENT_STATS": {
        "TOTAL_CLIENTES":0,
        "TOTAL_SEGURADOS":0,
        "TOTAL_UTENTES":1
        }
    }
}
```

resposta em caso de erro:

```json
{
    "code": 404,
    "message": "Ocorreu um erro ao gerar o certificado do(s) veiculo(s).",
    "data": {},
    "error": { error }
}
```