export interface AlteracoesEur {
    ausente: "ausente",
    bifurcacao: "bifurcacao",
    calculo: "calculo", // Nao esta sendo usado ainda!!!!
    deciduo: "deciduo", // deciduo = dente de leite persistente para cão e reabsorção para gato
    doencaperiodontal: {
        e1: "Estágio 1",
        e2: "Estágio 2",
        e3: "Estágio 3",
        e4: "Estágio 4"
    }
    estomatite: "estomatite",
    extraido: "extraido",
    fratura: {
        fxncc: "Fx não complicada de coroa",
        fxcc: "Fx complicada de coroa",
        fxnccr: "Fx não complicada corono-radicular",
        fxccr: "Fx complicada corono-radicular",
        carie: "Cárie",
        rd: "Reabsorção dentária",
        dr: "Dente rosa"
    },
    inflamacao: "inflamacao",
    linhaGengival: 0,
    mobilidade: 0,
    furca: 0,
    nota: "note",
    ortodontia: {
        mesio: "Mesioversão",
        disto: "Distoversão",
        linguo: "Linguoversão",
        labio: "Labioversão",
        buco: "Bucoversão",
        mca: "Mordida cruzada anterior",
        mcp: "Mordida cruzada posterior",
        rot: "Rotação",
        aa: "Atrito/Abrasão"
    },
    outro: "outro",
    ppd: "ppd",
    reabsorcao: "reabsorcao",
    tratamento: {
        ef: "Extração fechada",
        ec: "Extração cirúrgica",
        ac: "Amputação da coroa",
        se: "Selagem",
        rest: "Restauro",
        av: "Amputação vital",
        tc: "Tratamento do canal",
        ar: "Aplanamento radicular",
        rc: "Redução coroa"
    },
    oclusao: {
        oc: "Oclusão normal",
        mo: "Má oclusão de classe 1",
        mm: "Mesioclusão mandibular (classe 3)",
        dm: "Distoclusão mandibular (classe 2)"
    }
};

// export interface Alteracoes {
//     mobilidadeDental: '', // 'Grau I', 'Grau II' ou 'Grau III'
//     retracaoGengival: 0, // -9 a 9
//     bolsaPeriodontal: 0, // 0,1,2,3,4
//     exposicaoFurca: '', // 'Grau I', 'Grau II' ou 'Grau III'
//     hiperplasiaGengival: '', // HG
//     calculo: '', // 'Grau I', 'Grau II' ou 'Grau III'
//     placa: '', // 'Grau I', 'Grau II' ou 'Grau III'
//     gengivite: '', // 'Grau I', 'Grau II' ou 'Grau III'
//     ausencia: '', // E
//     fraturaDental: '', // FD
//     exposicaoPolpa: '', // EP
//     denteSupraNumerario: ''// SN
//     giroVersao: '', // GV
//     apinhamentoDental: '', // AD
//     desgaste: '', // D
//     escurecimentoDental: '', // ED
//     erosaoEsmalte: '', // EE
//     hipoplasiaEsmalte: '', // HE
//     lesaoReabsorcao: '', // LR
//     carie: '', // C
//     denteNaoErupcionado: '', // NE
//     persistenciaDeciduo: '', // PD
//     lesaoPalato: '', // LP
//     denteExtraido: '', // X
// }

// export interface TratamentoEur {
//     extracaoFechada: '',
//     extracaoCirurgica: '',
//     amputacaoCoroa: '',
//     selagem: '',
//     restauracao: '',
//     amputacaoVital: '',
//     tratamentoCanal: '',
//     aplanamentoRadicular: '',
//     reducaoCoroa: ''
// }