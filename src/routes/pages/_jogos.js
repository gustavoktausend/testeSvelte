
// fazer aqui a consulta para a API (strapi) para retornar os jogos com as props 

const jogos = [
    {   
        id: 1,
        nome: "Buraco - Canastra",
        url: "buraco",
        page_title: "Buraco - Canastra Online | MegaJogos",
        description: "Jogue Buraco Online com jogadores reais. Também conhecido como Canastra ou Biriba, um dos jogos mais populares no Brasil! Só pode bater com canastra limpa, não tem curingão, não vale fazer trinca, tem canastras de 1000 e 500.",
        jogadoresOnline: 1000,
        imagem: "https://cdn.megajogos.com.br/images/premium/game-logo/buraco-m_pt_BR.png",
        corDeFundo: "#ffbb76"
    },
    {   
        id: 2,
        nome: "Truco",
        url: "truco",
        page_title: "Jogo de TRUCO Online grátis e sem cadastro | MegaJogos",
        description: "O objetivo principal do jogo Truco é fazer 12 pontos antes dos seus adversários. Os pontos são disputados em mãos que são divididas em 3 rodadas (\"melhor de três\"), onde começa valendo 1 ponto, sendo possível aos jogadores aumentarem para 3, 6, 9 e 12 pontos, nessa ordem. Em cada disputa, uma carta é virada na mesa (vira) definindo quais serão as cartas mais altas (manilhas) naquela mão.",
        jogadoresOnline: 1000,
        imagem: "https://cdn.megajogos.com.br/images/premium/game-logo/truco-m_pt_BR.png",
        corDeFundo: "#e59ea7"
    },
    {   
        id: 3,
        nome: "Tranca",
        url: "tranca",
        page_title: "Tranca Online | MegaJogos",
        description: "Tranca Online! Só pode bater com canastra limpa, não tem curingão (Joker), vale trinca, o 3 preto tranca a lixeira e a compra da lixeira tem que ser justificada. Um jogo online 100% brasileiro!",
        jogadoresOnline: 1000,
        imagem: "https://cdn.megajogos.com.br/images/premium/game-logo/tranca-m_pt_BR.png",
        corDeFundo: "#6de5ba"
    }
];

export default jogos;
