import Grade from '../models/Grade'
import Supplie from '../models/Supplie'

export default class DatabaseSeeder {
  constructor() {
    this.run()
  }

  run() {
    this.grade()
    this.supplie()
  }

  grade() {
    const listGrade = [{
      nmGrade: "1º Ano - Fundamental"
    }, {
      nmGrade: "2º Ano - Fundamental"
    }, {
      nmGrade: "3º Ano - Fundamental"
    }, {
      nmGrade: "4º Ano - Fundamental"
    }, {
      nmGrade: "5º Ano - Fundamental"
    }, {
      nmGrade: "6º Ano - Fundamental"
    }, {
      nmGrade: "7º Ano - Fundamental"
    }, {
      nmGrade: "8º Ano - Fundamental"
    }, {
      nmGrade: "9º Ano - Fundamental"
    }, {
      nmGrade: "1º Ano - Ensino médio"
    }, {
      nmGrade: "2º Ano - Ensino médio"
    }, {
      nmGrade: "3º Ano - Ensino médio"
    }];

    Grade.insertMany(listGrade).then(() => {
      console.log("\x1b[32m \nGrades successfully inserted \x1b[0m")
    }).catch((error: string) => {
      console.log(`\x1b[31m \nError inserting grade: ${error}\x1b[0m`)
    })
  }

  supplie() {
    const listSupplie = [{
      nmSupplie: "Mochila",
      vlUnity: 70.00
    }, {
      nmSupplie: "Agenda escolar",
      vlUnity: 12.00
    }, {
      nmSupplie: "Apontador",
      vlUnity: 1.50
    }, {
      nmSupplie: "Borracha",
      vlUnity: 1.00
    }, {
      nmSupplie: "Cola",
      vlUnity: 2.00
    }, {
      nmSupplie: "Caixa de giz de cera",
      vlUnity: 5.00
    }, {
      nmSupplie: "Lápis preto",
      vlUnity: 1.50
    }, {
      nmSupplie: "Lapiseira",
      vlUnity: 6.00
    }, {
      nmSupplie: "Caneta azul",
      vlUnity: 3.00
    }, {
      nmSupplie: "Caneta vermelha",
      vlUnity: 2.00
    }, {
      nmSupplie: "Compasso",
      vlUnity: 3.00
    }, {
      nmSupplie: "Kit geométrico",
      vlUnity: 10.00
    }, {
      nmSupplie: "Calculadora",
      vlUnity: 5.00
    }, {
      nmSupplie: "Grampeador",
      vlUnity: 10.00
    }, {
      nmSupplie: "Tabela periódica",
      vlUnity: 15.00
    }, {
      nmSupplie: "Caderno 20 matérias",
      vlUnity: 30.00
    }, {
      nmSupplie: "Caderno 10 matérias",
      vlUnity: 20.00
    }, {
      nmSupplie: "Caderno de brochura",
      vlUnity: 7.00
    }, {
      nmSupplie: "Caderno de desenho",
      vlUnity: 8.00
    }, {
      nmSupplie: "Corretivo",
      vlUnity: 2.00
    }, {
      nmSupplie: "Caixa de lápis de cor",
      vlUnity: 11.00
    }, {
      nmSupplie: "Tesoura",
      vlUnity: 4.50
    }, {
      nmSupplie: "Estojo",
      vlUnity: 4.00
    }, {
      nmSupplie: "Lancheira",
      vlUnity: 40.00
    }, {
      nmSupplie: "Marca-texto",
      vlUnity: 1.50
    }, {
      nmSupplie: "Régua 30cm",
      vlUnity: 2.00
    }, {
      nmSupplie: "Bloco de desenho",
      vlUnity: 6.00
    }, {
      nmSupplie: "Pasta",
      vlUnity: 5.00
    }, {
      nmSupplie: "Dicionário de português",
      vlUnity: 15.00
    }, {
      nmSupplie: "Dicionário de inglês",
      vlUnity: 13.00
    }, {
      nmSupplie: "Tinta guache",
      vlUnity: 6.00
    }, {
      nmSupplie: "Pincel chato nº 12",
      vlUnity: 3.50
    }, {
      nmSupplie: "TNT",
      vlUnity: 3.00
    }, {
      nmSupplie: "Caixa de prendedor",
      vlUnity: 15.00
    }, {
      nmSupplie: "Pacote de folhas A4",
      vlUnity: 16.00
    }, {
      nmSupplie: "Pacote de folhas A3",
      vlUnity: 22.00
    }, {
      nmSupplie: "E.V.A",
      vlUnity: 3.00
    }, {
      nmSupplie: "Folhas pautadas",
      vlUnity: 2.00
    }, {
      nmSupplie: "Cartolina",
      vlUnity: 2.00
    }, {
      nmSupplie: "Jogo pedagógico",
      vlUnity: 40.00
    }];

    Supplie.insertMany(listSupplie).then(() => {
      console.log("\x1b[32m \nSupplies successfully inserted \x1b[0m")
    }).catch((error: string) => {
      console.log(`\x1b[31m \nError inserting grade: ${error}\x1b[0m`)
    })
  }
}