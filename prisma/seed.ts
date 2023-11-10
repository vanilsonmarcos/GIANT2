import prisma from "../src/repositories/PrismaClient";

async function seed() {
    if ((await prisma.pessoa_tipo.count()) === 0) {
        await prisma.pessoa_tipo.createMany({
            data: [
                { NOME_TIPO: 'Pessoa Física' },
                { NOME_TIPO: 'Pessoa Jurídica' }
            ]
        });
    }
    if ((await prisma.apolice_estado.count()) === 0) {
        await prisma.apolice_estado.createMany({
            data: [
                { NOME: 'Em Processamento', DESCRICAO: 'A Apolice está em processamento; é um estado temporário em que a se encontra' },
                { NOME: 'Suspensa', DESCRICAO: 'A apolice está suspensa' },
                { NOME: 'Cancelada', DESCRICAO: 'A apólice está cancelada' },
                { NOME: 'Expirada', DESCRICAO: 'A apólice passou a data de renovação' },
                { NOME: 'Activa', DESCRICAO: 'A apólice está valida durante o tempo em que é visualizada' },
                { NOME: 'Em Simulação', DESCRICAO: 'A apolice ainda está em estado de simulação' },
                { NOME: 'Inactiva', DESCRICAO: 'A apólice foi paga' },
            ]
        });
    }

    if ((await prisma.apolice_tipo.count()) === 0) {
        await prisma.apolice_tipo.createMany({
            data: [
                { SIGLA: 'APSAT', NOME: 'Apólice de seguro automóvel', DESCRICAO: 'O seguro automotivo, também conhecido apenas como seguro auto, é outra possibilidade popular no mercado brasileiro. Como o nome sugere, ele é voltado para proteger veículos automotores. Além de carros, essa alternativa pode servir para proteger motos e caminhões,' },
                { SIGLA: 'APSRE', NOME: 'Apólice de seguro residencial', DESCRICAO: 'O seguro residencial tem como principal objetivo proteger um imóvel nas condições previstas em contrato. Ele é aplicável tanto a casas quanto a apartamentos e atende às necessidades variadas de proprietários e locatários.' },
                { SIGLA: 'APSVI', NOME: 'Apólice de seguro de viajem', DESCRICAO: 'O seguro viagem é uma modalidade voltada aos viajantes nacionais e internacionais que desejem ter assistência diante de eventualidades. ' },
            ]
        });
    }

    if ((await prisma.seguradora.count()) === 0) {
        await prisma.seguradora.create({
            data: { 
                NIF: '5417588962', 
                EMAIL: 'geral@giantseguros.co.ao',
                ENDERECO: 'Ingombotas - Rua da Missão nº 79 | Luanda',
                TELEFONE: '929280828',
                TELEFONE_ALT: '929280602',
                WEB_SITE: 'www.giantseguros.ao'
            },               
        });
    }

    if ((await prisma.cobertura.count()) === 0) {
        await prisma.cobertura.createMany({
            data: [
                {
                    APOLICE_TIPO_ID: 1,
                    COBERTURA_BASE: true,
                    SIGLA: 'RTER',
                    NOME: 'Responsabilidade civil perante terceiros',
                    DESCRICAO: 'A pessoa responderá por ato causado por terceiro, sendo para tanto necessário que exista um vínculo jurídico entre o responsável e o causador do dano. Em regra, tal responsabilidade gera responsabilidade solidária, com algumas exceções, como o caso do incapaz que responde subsidiariamente.'
                },
                {
                    APOLICE_TIPO_ID: 1,
                    COBERTURA_BASE: false,
                    SIGLA: 'RFAC',
                    NOME: 'Responsabilidade Civil Facultativa',
                    DESCRICAO: 'A cobertura de responsabilidade civil facultativa veicular (RCF-V) pode ser entendida, de forma simples, como aquela que cobre danos causados a terceiros. Inclui acidentes de trânsito, atropelamentos, batidas, entre outros. Você está dirigindo e as crianças pedem pra colocar música, por exemplo.'
                },
                {
                    APOLICE_TIPO_ID: 1,
                    COBERTURA_BASE: false,
                    SIGLA: 'CHOQ',
                    NOME: 'Choque',
                    DESCRICAO: 'O choque é um tipo de acidente em que o veículo em movimento choca-se contra um obstáculo fixo, que pode ser um muro, uma cerca, um poste, um ou mais veículos parados, meio fio, canteiro, ilha de segurança ou qualquer outro, inclusive casas'
                },
                {
                    APOLICE_TIPO_ID: 1,
                    COBERTURA_BASE: false,
                    SIGLA: 'CCAP',
                    NOME: 'Colisão e Capotamento',
                    DESCRICAO: 'Esta cobertura garante, até ao valor do capital seguro indicado nas Condições Particulares, o ressarcimento dos danos causados ao Veículo Seguro em virtude de choque (embate do veículo contra qualquer corpo fixo, ou sofrido por aquele quando imobilizado), colisão (embate do veículo com qualquer outro corpo em movimento), ou capotamento (acidente em que o veículo perca a sua posição normal e não resulte de Choque ou Colisão.)'
                },
                {
                    APOLICE_TIPO_ID: 1,
                    COBERTURA_BASE: false,
                    SIGLA: 'FROB',
                    NOME: 'Furto ou Roubo',
                    DESCRICAO: 'Danos derivados pelo desaparecimento, destruição ou deterioração do veículo por motivo de Furto e Roubo.Para que esta cobertura funcione terá sempre que participar às autoridades policiais o sucedido e solicitar o auto de ocorrência. Em caso de desaparecimento da viatura, o Segurador só o indemnizará se passados 60 dias da data de participação do Furto e Roubo, o veículo não tiver sido encontrado.'
                },
                {
                    APOLICE_TIPO_ID: 1,
                    COBERTURA_BASE: false,
                    SIGLA: 'INCE',
                    NOME: 'Incêndio',
                    DESCRICAO: 'Esta cobertura garante ao Segurado o ressarcimento dos danos que resultem para o veículo seguro em consequência de Incêndio, Raio e Explosão, quer aquele se encontre em marcha ou parado, recolhido em garagem ou em qualquer outro local. '
                },
                {
                    APOLICE_TIPO_ID: 1,
                    COBERTURA_BASE: false,
                    SIGLA: 'RINC',
                    NOME: 'Raio ou Explosão',
                    DESCRICAO: 'Esta cobertura garante ao Segurado o ressarcimento dos danos que resultem para o veículo seguro em consequência de Incêndio, Raio e Explosão, quer aquele se encontre em marcha ou parado, recolhido em garagem ou em qualquer outro local. '
                },
                {
                    APOLICE_TIPO_ID: 1,
                    COBERTURA_BASE: false,
                    SIGLA: 'QISV',
                    NOME: 'Quebra Isolada de Vidros',
                    DESCRICAO: 'Incluem-se danos, em virtude de quebra isolada dos vidros, para-brisas, óculo traseiro e vidros laterais, causados por causa não compreendida, em qualquer outra cobertura. '
                },
                {
                    APOLICE_TIPO_ID: 1,
                    COBERTURA_BASE: false,
                    SIGLA: 'FNAT',
                    NOME: 'Fenómenos da Natureza',
                    DESCRICAO: '- Ação de greves, tumultos, motins e alterações da ordem pública;- Atos de vandalismo, terrorismo e sabotagem;- Ação direta de trombas de água, chuvas torrenciais, enxurradas e aluimento de terras;'
                },
                {
                    APOLICE_TIPO_ID: 1,
                    COBERTURA_BASE: false,
                    SIGLA: 'GREV',
                    NOME: 'Greves',
                    DESCRICAO: ''
                },
                {
                    APOLICE_TIPO_ID: 1,
                    COBERTURA_BASE: false,
                    SIGLA: 'TUOP',
                    NOME: 'Tumultos e Alterações da Ordem Pública', DESCRICAO: ''
                },
                {
                    APOLICE_TIPO_ID: 1,
                    COBERTURA_BASE: false,
                    SIGLA: 'PUSO',
                    NOME: 'Privação de Uso', DESCRICAO: ''
                },
                {
                    APOLICE_TIPO_ID: 1,
                    COBERTURA_BASE: false,
                    SIGLA: 'OCPV',
                    NOME: 'Ocupantes da Viatura', DESCRICAO: ''
                },
            ]
        })
    }

    if ((await prisma.veiculo_categoria.count() === 0)) {
        await prisma.veiculo_categoria.createMany({
            data: [
                { NOME: 'Ligeriro ' },
                { NOME: 'Camionetas' },
                { NOME: 'Autocaravanas' },
                { NOME: 'Pesados' },
            ]
        });
    }

    if ((await prisma.preco_cilindrada.count() === 0)) {
        await prisma.preco_cilindrada.createMany({
            data: [
                {
                    NOME: 'Ligeiro Particular',
                    LOTACAO: 0,
                    VEICULO_CATEGORIA_ID: 1,
                    PREMIO_TRIMESTRAL: 6351.00,
                    PREMIO_SEMESTRAL: 12582.00,
                    PREMIO_ANUAL: 24923.00,
                    PESO_KG: 0,
                    CILINDRADA_MAX: 1300,
                    CILINDRADA_MIN: 0
                },
                {
                    NOME: 'Camioneta Particular',
                    LOTACAO: 0,
                    VEICULO_CATEGORIA_ID: 2,
                    PREMIO_TRIMESTRAL: 20380.00,
                    PREMIO_SEMESTRAL: 40374.00,
                    PREMIO_ANUAL: 79976.00,
                    PESO_KG: 0,
                    CILINDRADA_MAX: 1300,
                    CILINDRADA_MIN: 0
                },
                {
                    NOME: 'Camioneta Particular',
                    LOTACAO: 0,
                    VEICULO_CATEGORIA_ID: 2,
                    PREMIO_TRIMESTRAL: 24241.00,
                    PREMIO_SEMESTRAL: 48024.00,
                    PREMIO_ANUAL: 95130.00,
                    PESO_KG: 3600,
                    CILINDRADA_MAX: 2500,
                    CILINDRADA_MIN: 0
                },

                {
                    NOME: 'Auto Caravana',
                    LOTACAO: 9,
                    VEICULO_CATEGORIA_ID: 3,
                    PREMIO_TRIMESTRAL: 14553.00,
                    PREMIO_ANUAL: 57112.00,
                    PREMIO_SEMESTRAL: 28832.00,
                    PESO_KG: 0,
                    CILINDRADA_MAX: 1600,
                    CILINDRADA_MIN: 0
                },
                {
                    NOME: 'Auto Caravana',
                    LOTACAO: 9,
                    VEICULO_CATEGORIA_ID: 3,
                    PREMIO_TRIMESTRAL: 18919.00,
                    PREMIO_SEMESTRAL: 37481.00,
                    PREMIO_ANUAL: 74246.00,
                    PESO_KG: 0,
                    CILINDRADA_MAX: 2500,
                    CILINDRADA_MIN: 0
                },
                {
                    NOME: 'Camião Particular',
                    LOTACAO: 0,
                    VEICULO_CATEGORIA_ID: 4,
                    PREMIO_TRIMESTRAL: 14553.00,
                    PREMIO_SEMESTRAL: 28832.00,
                    PREMIO_ANUAL: 57112.00,
                    PESO_KG: 10000,
                    CILINDRADA_MAX: 0,
                    CILINDRADA_MIN: 1500
                },
                {
                    NOME: 'Camião Particular',
                    LOTACAO: 0,
                    VEICULO_CATEGORIA_ID: 4,
                    PREMIO_TRIMESTRAL: 37089.00,
                    PREMIO_SEMESTRAL: 73477.00,
                    PREMIO_ANUAL: 145551.00, PESO_KG: 10000,
                    CILINDRADA_MAX: 1500,
                    CILINDRADA_MIN: 0
                }
            ]
        });
    }
}

seed();