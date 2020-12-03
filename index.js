const custom_express = require('./src/config/custom_express');

const conexao = require('./src/infra/conexao');

conexao.connect(erro => {
  if(erro) console.log(erro);
  else{
    const app = custom_express();

    app.listen(3000, () => { console.log('Servidor rodando na porta 3000') });
  }
});


