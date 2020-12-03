const conexao = require('../infra/conexao');
class Atendimento {

  adiciona(atendimento){
      const sql = 'insert into Atendimentos set ?';

      conexao.query(sql,atendimento, (erro,resultado) => {
        if(erro) console.log(erro);
        else console.log(resultado);
      })
  }
}

module.exports = new Atendimento;