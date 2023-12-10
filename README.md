## DEFINIÇÕES

UMA APOLICE TEM VARIOS ELEMENTOS QUE SÂO:

- TIPO(Apólice, automovel, saúde e multiriscos e outros).
- Estado(Descreve em que estádo está a apólice, Activa, Desactiva, Cancelada, Expirada e outros).
- Pagamantos(São os pagamentos feitos dentro de uma adenda, que dependem do fracionamento da apólice).
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
        {"ID":2,"APOLICE_TIPO_ID":1,"APOLICE_ESTADO_ID":6,"APOLICE_FRACIONAMENTO_ID":1,"NUMERO":"34343","TOMADOR_ID":1,"INSERIDO_POR":null,"ACTUALIZADO_POR":null,"DATA_INSERCAO":"2023-11-11T12:58:03.000Z","DATA_ACTUALIZACAO":null},
        {"ID":3,"APOLICE_TIPO_ID":1,"APOLICE_ESTADO_ID":6,"APOLICE_FRACIONAMENTO_ID":1,"NUMERO":"1 12.112023/0","TOMADOR_ID":1,"INSERIDO_POR":null,"ACTUALIZADO_POR":null,"DATA_INSERCAO":"2023-11-12T00:12:23.000Z","DATA_ACTUALIZACAO":null},
        {"ID":4,"APOLICE_TIPO_ID":1,"APOLICE_ESTADO_ID":3,"APOLICE_FRACIONAMENTO_ID":1,"NUMERO":"1 12 11.2023/0001","TOMADOR_ID":1,"INSERIDO_POR":null,"ACTUALIZADO_POR":null,"DATA_INSERCAO":"2023-11-12T00:18:56.000Z","DATA_ACTUALIZACAO":null}
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

## Adenda Pagamento

Visualizar a tabala adenda_pagamento
Metodo: GET
URL: /adenda_pagamento/
Resposta:
em caso de sucesso retorna:

```json
{
    "code": 200,
    "message": "Dados dos pagamentos das adendas encontrados com sucesso",
    "data": [ adenda_pagamento_1, adenda_pagamento_2,...]     
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
    "code": 200,
    "message": "Dados dos pagamentos das adendas encontrados com sucesso",
    "data": {
        "ID": 1,
        "ADENDA_ID": 1,
        "DESCONTOS": 213.54,
        "VALOR_PAGO": 12123.54,
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

Visualizar "Pagamentos de uma adenda" adenda pagamento pelo id da adenda
Metodo: GET
URL: /adenda_pagamento/adenda/1
Resposta em caso de sucesso retorna:

```json
{
    "code": 200,
    "message": "Os pagamentos associados a adenda foram carregados com sucesso",
    "data": [ adenda_pagamento_1, adenda_pagamento_2, ...] 
    
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
    "ADENDA_ID": 1,
    "DESCONTOS": 213.54,
    "VALOR_PAGO": 12123.54,
}
```

Resposta:
em caso de sucesso retorna:

```json
{
    "ID": 1,
    "ADENDA_ID": 1,
    "DESCONTOS": 20.88,
    "VALOR_PAGO": 129.98,
    "DATA_INSERCAO": "2023-11-10T09:29:37.000Z",
    "DATA_ACTUALIZACAO": "2023-11-10T09:29:37.000Z",
    "DATA_REMOCACAO": "2023-11-10T09:29:37.000Z",
    "INSERIDO_POR": null,
    "ACTUALIZADO_POR": null,
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
    "message": "Ocoreu um erro ao colectar dos dados das pessoas",
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
