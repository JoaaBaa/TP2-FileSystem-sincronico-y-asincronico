const fs = require('fs');

// 1. Leemos el archivo package.json de forma asincrónica
fs.readFile('package.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo package.json:', err);
    return;
  }

  // 2. Parseamos el contenido a un objeto JSON
  const packageData = JSON.parse(data);

  // 3. Obtenemos el tamaño del archivo en bytes
  const size = Buffer.from(data).length;

  // 4. Creamos el objeto info
  const info = {
    contenidoStr: data,
    contenidoObj: packageData,
    size: size
  };

  // 5. Muestra el objeto info por consola
  console.log(info);

  // 6. Guardamos el objeto info en un archivo info.txt de forma asincrónica
  fs.writeFile('infomac.txt', JSON.stringify(info, null, 2), 'utf8', (err) => {
    if (err) {
      console.error('Error al guardar el objeto info en el archivo mac: ', err);
      return;
    }
    console.log('El objeto info ha sido guardado en infomac.txt');
  });
});