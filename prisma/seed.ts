import prisma from "../src/repositories/PrismaClient";

async function seed() {
    if((await prisma.apolice_estado.count()) === 0){
        await  prisma.apolice_estado.createMany({
            data: [

            ]
        });
    }
    
    if((await prisma.apolice_tipo.count()) === 0){
        await  prisma.apolice_tipo.createMany({
            data: [

            ]
        });
    }

    if((await prisma.cobertura.count()) === 0){
        await  prisma.cobertura.createMany({
            data: [
            { APOLICE_TIPO_ID: 1, COBERTURA_BASE: true, SIGLA: 'RTER',  NOME: 'Responsabilidade civil perante terceiros', DESCRICAO:'A pessoa responderá por ato causado por terceiro, sendo para tanto necessário que exista um vínculo jurídico entre o responsável e o causador do dano. Em regra, tal responsabilidade gera responsabilidade solidária, com algumas exceções, como o caso do incapaz que responde subsidiariamente.'},
            { APOLICE_TIPO_ID: 1, COBERTURA_BASE: false, SIGLA: 'RFAC', NOME: 'Responsabilidade Civil Facultativa', DESCRICAO:'A cobertura de responsabilidade civil facultativa veicular (RCF-V) pode ser entendida, de forma simples, como aquela que cobre danos causados a terceiros. Inclui acidentes de trânsito, atropelamentos, batidas, entre outros. Você está dirigindo e as crianças pedem pra colocar música, por exemplo.'},
            { APOLICE_TIPO_ID: 1, COBERTURA_BASE: false, SIGLA: 'CHOQ', NOME: 'Choque', DESCRICAO: 'O choque é um tipo de acidente em que o veículo em movimento choca-se contra um obstáculo fixo, que pode ser um muro, uma cerca, um poste, um ou mais veículos parados, meio fio, canteiro, ilha de segurança ou qualquer outro, inclusive casas'},
            { APOLICE_TIPO_ID: 1, COBERTURA_BASE: false, SIGLA: 'CCAP', NOME: 'Colisão e Capotamento', DESCRICAO:'Esta cobertura garante, até ao valor do capital seguro indicado nas Condições Particulares, o ressarcimento dos danos causados ao Veículo Seguro em virtude de choque (embate do veículo contra qualquer corpo fixo, ou sofrido por aquele quando imobilizado), colisão (embate do veículo com qualquer outro corpo em movimento), ou capotamento (acidente em que o veículo perca a sua posição normal e não resulte de Choque ou Colisão.)'},
            { APOLICE_TIPO_ID: 1, COBERTURA_BASE: false, SIGLA: 'FROB', NOME: 'Furto ou Roubo', DESCRICAO:'Danos derivados pelo desaparecimento, destruição ou deterioração do veículo por motivo de Furto e Roubo.Para que esta cobertura funcione terá sempre que participar às autoridades policiais o sucedido e solicitar o auto de ocorrência. Em caso de desaparecimento da viatura, o Segurador só o indemnizará se passados 60 dias da data de participação do Furto e Roubo, o veículo não tiver sido encontrado.'},
            { APOLICE_TIPO_ID: 1, COBERTURA_BASE: false, SIGLA: 'INCE', NOME: 'Incêndio', DESCRICAO: 'Esta cobertura garante ao Segurado o ressarcimento dos danos que resultem para o veículo seguro em consequência de Incêndio, Raio e Explosão, quer aquele se encontre em marcha ou parado, recolhido em garagem ou em qualquer outro local. '},
            { APOLICE_TIPO_ID: 1, COBERTURA_BASE: false, SIGLA: 'RINC', NOME: 'Raio ou Explosão', DESCRICAO: 'Esta cobertura garante ao Segurado o ressarcimento dos danos que resultem para o veículo seguro em consequência de Incêndio, Raio e Explosão, quer aquele se encontre em marcha ou parado, recolhido em garagem ou em qualquer outro local. '},
            { APOLICE_TIPO_ID: 1, COBERTURA_BASE: false, SIGLA: 'QISV', NOME: 'Quebra Isolada de Vidros', DESCRICAO: 'Incluem-se danos, em virtude de quebra isolada dos vidros, para-brisas, óculo traseiro e vidros laterais, causados por causa não compreendida, em qualquer outra cobertura. '},
            { APOLICE_TIPO_ID: 1, COBERTURA_BASE: false, SIGLA: 'FNAT', NOME: 'Fenómenos da Natureza', DESCRICAO: '- Ação de greves, tumultos, motins e alterações da ordem pública;- Atos de vandalismo, terrorismo e sabotagem;- Ação direta de trombas de água, chuvas torrenciais, enxurradas e aluimento de terras;'},
            { APOLICE_TIPO_ID: 1, COBERTURA_BASE: false, SIGLA: 'GREV', NOME: 'Greves', DESCRICAO:''},
            { APOLICE_TIPO_ID: 1, COBERTURA_BASE: false, SIGLA: 'TUOP', NOME: 'Tumultos e Alterações da Ordem Pública', DESCRICAO:''},
            { APOLICE_TIPO_ID: 1, COBERTURA_BASE: false, SIGLA: 'PUSO', NOME: 'Privação de Uso', DESCRICAO: ''},
            { APOLICE_TIPO_ID: 1, COBERTURA_BASE: false, SIGLA: 'OCPV', NOME: 'Ocupantes da Viatura', DESCRICAO: ''},
            ]
        })
    }
}