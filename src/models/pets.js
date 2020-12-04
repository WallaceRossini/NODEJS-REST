const conexao = require('../infra/conexao');

class Pet {
    adiciona(pet,response){
      const query = 'insert into pets set ?';

      conexao.query(query, pet, erro => {
        if(erro) console.log(erro)
        else
          response.send('ok');
      })

    }
}

module.exports = new Pet;