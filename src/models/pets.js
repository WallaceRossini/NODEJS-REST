const conexao = require('../infra/conexao');
const uploadArquivo = require('../uploads/upload');

class Pet {
    adiciona(pet,response){
      const query = 'insert into pets set ?';

      uploadArquivo(pet.imagem,pet.nome, (novoCaminho)=>{
        const novoPet = {nome:pet.nome, imagem: novoCaminho}
        conexao.query(query, novoPet, erro => {
          if(erro)
            response.status(400).json(erro)
          else
            response.status(201).json(novoPet);
        })
      })
    }
}

module.exports = new Pet;