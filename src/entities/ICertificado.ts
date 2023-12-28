interface ICertificado {
    [key: string]: string,
    NOME_TOMADOR: string,
    N_CARTA_CONDUCAO: string,
    NOME_TITULAR:string,
    MORADA: string,
    N_APOLICE: string,
    CATEGORIA_VEICULO: string, 
    MARCA: string,
    MATRICOLA: string,
    MODELO: string,
    CHASSI: string,
    DATA_INICIO: string,
    DATA_FIM:string,
    LIMITE_INDEMNIZACAO: string,

    // INFO RELATED ABOUT DISTICO

    DISTICO: string ,
    SEGURADORA: string,
    N_APOLICE_2: string,
    MATRICOLA_2: string,
    DATA_INICIO_2: string,
    DATA_FIM_2: string, 
}

export default ICertificado;