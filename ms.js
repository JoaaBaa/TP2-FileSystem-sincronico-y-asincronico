const fs = require('fs');
try {
  // Leemos el archivo package.json de forma síncrona en formato string
  const data = fs.readFileSync('./package.json', 'utf8');

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

  // Imprimimos el objeto info
  console.log(info);

  try {
    //Guarda el objeto info en un archivo info.txt
    fs.writeFileSync('infoms.txt', JSON.stringify(info, null, 2), 'utf-8');
} catch (error) {
    console.error('Error al escribir en el archivo ms:', error);
}
} catch (err) {
  console.error('Error al leer el archivo package.json:', err);
}

