const fs = require('fs');

// Leemos el archivo package.json de forma asincrónica
fs.promises.readFile('package.json', 'utf8')
  .then((data) => {
    // Parseamos el contenido a un objeto JSON
    const packageData = JSON.parse(data);

    // Obtenemos el tamaño del archivo en bytes
    const size = Buffer.from(data).length;

    // Creamos el objeto info
    const info = {
      contenidoStr: data,
      contenidoObj: packageData,
      size: size
    };

    // Muestra el objeto info por consola
    console.log(info);

    // Guardamos el objeto info en un archivo info.txt de forma asincrónica
    return fs.promises.writeFile('infomaptc.txt', JSON.stringify(info, null, 2), 'utf8');
  })
  .then(() => {
    console.log('El objeto info ha sido guardado en infomaptc.txt');
  })
  .catch((err) => {
    console.error('Error:', err);
  });