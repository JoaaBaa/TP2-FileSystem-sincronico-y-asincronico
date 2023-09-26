const fs = require('fs').promises;

async function mapaa() {
  try {
    // Espero la lectura
    const data = await fs.readFile('package.json', 'utf8');

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

    // Espero al guardado
    await fs.writeFile('infomapaa.txt', JSON.stringify(info, null, 2), 'utf8');

    console.log('El objeto info ha sido guardado en infomapaa.txt');
  } catch (err) {
    console.error('Error:', err);
  }
}

mapaa();