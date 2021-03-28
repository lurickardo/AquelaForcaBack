import Grade from '../models/Grade'

export default class DatabaseSeeder {
    constructor(){
        this.run()
    }

    run(){  
        const arr = [{
            nmGrade: "1º Ano - Fundamental"
          },{
            nmGrade: "2º Ano - Fundamental"
          },{
            nmGrade: "3º Ano - Fundamental"
          },{
            nmGrade: "4º Ano - Fundamental"
          },{
            nmGrade: "5º Ano - Fundamental"
          },{
            nmGrade: "6º Ano - Fundamental"
          },{
            nmGrade: "7º Ano - Fundamental"
          },{
            nmGrade: "8º Ano - Fundamental"
          },{
            nmGrade: "9º Ano - Fundamental"
          },{
            nmGrade: "1º Ano - Ensino médio"
          },{
            nmGrade: "2º Ano - Ensino médio"
          },{
            nmGrade: "3º Ano - Ensino médio"
          }];
          
          Grade.insertMany(arr).then(() => {
            console.log("\x1b[32m \nGrade successfully inserted \x1b[0m")
          }).catch((error: string) => {
            console.log(`\x1b[31m \nError inserting grade: ${error}\x1b[0m`)
          })
    }
}