SELECT * FROM giant_db.pessoa_tipo;
ALTER TABLE giant_db.pessoa_tipo
ADD COLUMN DATA_CRIACAO TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN DATA_ACTUALIZACAO DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

INSERT INTO giant_db.pessoa_tipo(NOME_TIPO) VALUES ('Pessoa Física'), ('Pessoa Jirídica')

ALTER TABLE giant_db.pessoa
ADD COLUMN DATA_CRIACAO TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN DATA_ACTUALIZACAO DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

INSERT INTO giant_db.pessoa(PESSOA_TIPO_ID, NOME, DATA_NASCIMENTO, SEXO, NBI, NIF, ESTADO_CIVIL) 
VALUES( 1, 'Andre Marcos', '1990-11-16', 'M', '73365384565', '43766465', 'S'), ( 1, 'Semir Marcos', '1959-11-16', 'M', '73365354505', '4378865', 'S');

INSERT INTO giant_db.pessoa_endereco(PESSOA_ID, TELEFONE, TELEFONE_ALTERNATIVO, EMAIL) 
VALUES( LAST_INSERT_ID(),'989884938','988989943','am@giant.ao');

ALTER TABLE giant_db.pessoa_endereco
ADD COLUMN DATA_CRIACAO TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN DATA_ACTUALIZACAO DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP

SELECT * FROM pessoa 
INNER JOIN pessoa_endereco ON 
pessoa.ID=pessoa_endereco.PESSOA_ID 
INNER JOIN pessoa_tipo ON
pessoa.PESSOA_TIPO_ID = pessoa_tipo.ID

ALTER TABLE giant_db.preco_cilindrada
ADD COLUMN DATA_CRIACAO TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN DATA_ACTUALIZACAO DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        
ALTER TABLE giant_db.apolice_tipo
ADD COLUMN DATA_CRIACAO TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN DATA_ACTUALIZACAO DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP

ALTER TABLE giant_db.apolice_cobertura
ADD COLUMN DATA_CRIACAO TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN DATA_ACTUALIZACAO DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP


ALTER TABLE giant_db.apolice_estado
ADD COLUMN DATA_CRIACAO TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN DATA_ACTUALIZACAO DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP

ALTER TABLE giant_db.apolice_fracionamento
ADD COLUMN DATA_CRIACAO TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN DATA_ACTUALIZACAO DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP

-- SELECT Apolice and com o TIPO
SELECT apolice.*, 
apolice_tipo.SIGLA, apolice_tipo.NOME AS APOLICE_TIPO_NOME, apolice_tipo.DESCRICAO AS APOLICE_TIPO_DESCRICAO
FROM apolice
INNER JOIN apolice_tipo
ON apolice.APOLICE_TIPO_ID=apolice_tipo.ID

WHERE apolice.ID =

SELECT apolice_tipo.* 
FROM apolice
INNER JOIN apolice_tipo
ON apolice.APOLICE_TIPO_ID=apolice_tipo.ID

WHERE apolice.ID =

-- APOLICE_ESTADO_ID

SELECT apolice.*, apolice_estado.NOME AS APOLICE_ESTADO_NOME, apolice_estado.DESCRICAO AS APOLICE_ESTADO_DESCRICAO,
apolice_tipo.SIGLA AS APOLICE_TIPO_SIGLA, apolice_tipo.NOME as APOLICE_TIPO_NOME, apolice_tipo.DESCRICAO aS APOLICE_TIPO_DEESCRICAO,
segurado.NOME AS SEGURADO_NOME, segurado.TIPO AS SEGURADO_TIPO, segurado.DATA_NASCIMENTO as SEGURADO_DATA_NASCIMENTO,
segurado.SEXO AS SEGURADO_SEXO, segurado.NBI as SEGURADO_NBI, segurado.NIF as SEGURADO_NIF, segurado.ESTADO_CIVIL as SEGURADO_ESTADO_CIVIL
FROM apolice
INNER JOIN pessoa as segurado
ON apolice.SEGURADO_ID = pessoa.ID 
INNER JOIN apolice_estado
ON apolice.APOLICE_ESTADO_ID = apolice_estado.ID
INNER JOIN apolice_tipo 
ON apolice.APOLICE_TIPO_ID = apolice_tipo.ID
INNER JOIN apolice_fracionamento
ON apolice.APOLICE_FRACIONAMENTO_ID = apolice_fracionamento.ID
LIMIT 100


-- FRACIONADO_EM
-- NO_FRACOES


INSERT INTO `giant_db`.`apolice`
(`ID`,
`APOLICE_TIPO_ID`,
`NUMERO`,
`SEGURADO_ID`,
`DATA_INICIO`,
`DATA_FIM`,
`APOLICE_FRACIONAMENTO_ID`,
`APOLICE_ESTADO_ID`,
`VALOR_PREMIO`,
`INSERIDO_POR`,
`ACTUALIZADO_POR`,
`REMOVIDO_POR`,
`DATA_INSERCAO`,
`DATA_ACTUALIZACAO`,
`DATA_REMOCAO`)
VALUES
(<{ID: }>,
<{APOLICE_TIPO_ID: }>,
<{NUMERO: }>,
<{SEGURADO_ID: }>,
<{DATA_INICIO: }>,
<{DATA_FIM: }>,
<{APOLICE_FRACIONAMENTO_ID: }>,
<{APOLICE_ESTADO_ID: }>,
<{VALOR_PREMIO: }>,
<{INSERIDO_POR: }>,
<{ACTUALIZADO_POR: }>,
<{REMOVIDO_POR: }>,
<{DATA_INSERCAO: }>,
<{DATA_ACTUALIZACAO: }>,
<{DATA_REMOCAO: }>);



UPDATE `giant_db`.`apolice`
SET `APOLICE_FRACIONAMENTO_ID` = {APOLICE_FRACIONAMENTO_ID: },
WHERE `ID` = {};






-- APOLICE_ESTADO_ID
-- APOLICE_FRACIONAMENTO_ID
APOLICE_FRACIONAMENTO_ID


SELECT 

FROM apolice


INSERT INTO `giant_db`.`apolice_item_segurado`
(`ID`,
`APOLICE_TIPO_ID`,
`ITEM_ID`,
`APOLICE_ID`)
VALUES
(<{ID: }>,
<{APOLICE_TIPO_ID: }>,
<{ITEM_ID: }>,
<{APOLICE_ID: }>);







DESCONTOS

DATA_INSERCAO
VALOR_PAGO








INSERT INTO `giant_db`.`apolice_pagamento`
(`ID`,
`APOLICE_ID`,
`DESCONTOS`,
`VALOR_PAGO`,
`DATA_INSERCAO`,
`DATA_ACTUALIZACAO`,
`DATA_REMOCAO`)
VALUES
(<{ID: }>,
<{APOLICE_ID: }>,
<{DESCONTOS: }>,
<{VALOR_PAGO: }>,
<{DATA_INSERCAO: }>,
<{DATA_ACTUALIZACAO: }>,
<{DATA_REMOCAO: }>);


ALTER TABLE giant_db.apolice_pagamento
ADD COLUMN DATA_INSERCAO TIMESTAMP DEFAULT CURRENT_TIMESTAMP


SELECT 
cobertura.*,  
apolice_tipo.ID as APOLICE_TIPO_ID,  
apolice_tipo.SIGLA as APOLICE_TIPO_SIGLA, 
apolice_tipo.NOME as APOLICE_TIPO_NOME,
apolice_tipo.DESCRICAO as APOLICE_TIPO_DESCRICAO
FROM cobertura 
INNER JOIN apolice_tipo 
ON cobertura.APOLICE_TIPO_ID=apolice_tipo.ID
WHERE cobertura.ID= <coberturaID>


INSERT INTO `giant_db`.`cobertura`
(`ID`,
`APOLICE_TIPO_ID`,
`COBERTURA_BASE`,
`SIGLA`,
`NOME`,
`DESCRICAO`,
`INSERIDO_POR`,
`ACTUALIZADO_POR`,
`REMOVIDO_POR`,
`VALOR_PAGAR`,
`DESCONTO`,
`DATA_CRIACAO`,
`DATA_ACTUALIZACAO`)
VALUES
(<{ID: }>,
<{APOLICE_TIPO_ID: }>,
<{COBERTURA_BASE: b'0'}>,
<{SIGLA: }>,
<{NOME: }>,
<{DESCRICAO: }>,
<{INSERIDO_POR: }>,
<{ACTUALIZADO_POR: }>,
<{REMOVIDO_POR: }>,
<{VALOR_PAGAR: }>,
<{DESCONTO: }>,
<{DATA_CRIACAO: CURRENT_TIMESTAMP}>,
<{DATA_ACTUALIZACAO: CURRENT_TIMESTAMP}>);

UPDATE `giant_db`.`cobertura`
SET
`ID` = <{ID: }>,
`APOLICE_TIPO_ID` = <{APOLICE_TIPO_ID: }>,
`COBERTURA_BASE` = <{COBERTURA_BASE: b'0'}>,
`SIGLA` = <{SIGLA: }>,
`NOME` = <{NOME: }>,
`DESCRICAO` = <{DESCRICAO: }>,
`INSERIDO_POR` = <{INSERIDO_POR: }>,
`ACTUALIZADO_POR` = <{ACTUALIZADO_POR: }>,
`REMOVIDO_POR` = <{REMOVIDO_POR: }>,
`VALOR_PAGAR` = <{VALOR_PAGAR: }>,
`DESCONTO` = <{DESCONTO: }>,
`DATA_CRIACAO` = <{DATA_CRIACAO: CURRENT_TIMESTAMP}>,
`DATA_ACTUALIZACAO` = <{DATA_ACTUALIZACAO: CURRENT_TIMESTAMP}>
WHERE `ID` = <{expr}>;



