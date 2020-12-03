const moment = require('moment');
const conexao = require('../infra/conexao');
class Atendimento {

  adiciona(atendimento,response){

      const dataCriacao = new Date;
      atendimento.data = moment(atendimento.data,'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
      atendimento = {...atendimento,dataCriacao};

      const dataEhValida = moment(atendimento.data).isSameOrAfter(dataCriacao);

      const clienteEhValido = atendimento.cliente.length >=5;

      const validacoes = [
        {
          nome:'data',
          valido: dataEhValida,
          mensagem: 'Data deve ser maior ou igual a data atual'
        },
        {
          nome:'cliente',
          valido: clienteEhValido,
          mensagem: 'Cliente deve ter pelo menos cinco caracteres'
        }
      ];

      const erros = validacoes.filter(campo => !campo.valido);

      const existemErros = erros.length;
      
      if(existemErros){
        response.status(400).json(erros);
      }else{
        const sql = 'insert into Atendimentos set ?';

        conexao.query(sql,atendimento, (erro,resultado) => {
          if(erro) response.status(400).json(erro);
          else response.status(201).json(resultado);
        })
      }
  }
}

module.exports = new Atendimento;