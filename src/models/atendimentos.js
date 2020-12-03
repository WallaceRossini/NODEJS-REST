const moment = require('moment');
const conexao = require('../infra/conexao');
class Atendimento {

  adiciona(atendimento){

      const dataCriacao = new Date;
      atendimento.data = moment(atendimento.data,'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
      atendimento = {...atendimento,dataCriacao};

      const sql = 'insert into Atendimentos set ?';

      conexao.query(sql,atendimento, (erro,resultado) => {
        if(erro) console.log(erro);
        else console.log(resultado);
      })
  }
}

module.exports = new Atendimento;