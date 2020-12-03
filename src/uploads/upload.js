const fs = require('fs');

fs.readFile('./src/assets/salsicha.jpg',(erro,buffer) => {
  console.log('Imagem foi bufferizada');
  fs.writeFile('./src/assets/salsicha2.jpg',buffer,(erro) => {
    console.log('Imagem foi escrita');
  })
})