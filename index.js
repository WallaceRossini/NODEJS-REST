const custom_express = require('./src/config/custom_express');

const app = custom_express();

app.listen(3000, () => { console.log('Servidor rodando na porta 3000') });

