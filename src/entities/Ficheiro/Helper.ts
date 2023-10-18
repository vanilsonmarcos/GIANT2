import Ficheiro from "./Ficheiro";

function generateFicheiro(data: ): Ficheiro {
    let ficheiro: Ficheiro = {
        id: data['ID'],
        nome: data['NOME'],
        size: data['SIZE'],
        path: data['PATH'],
        ext: data['EXT'],
        content: data['CONTENT']
    }
    return ficheiro;

}

export default generateFicheiro;