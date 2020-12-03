const fs = require('fs');

fs.createReadStream('./src/assets/salsicha.jpg')
  .pipe(fs.createWriteStream('./src/assets/salsicha-stream.jpg'))
  .on('finish',() => console.log('Imagem foi escrita com sucesso'))