/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */
// Importar Modulo NodeJs (Usarlo)
// const modulo = require('moduloRasberry');
const axios = require('axios');
//npm install axios
const moduloRasberry = {
  calcularProximidad: function () {
    return Math.random() * (10 - 0) + 0;
  }
};

module.exports.bootstrap = async function () {
  setInterval( // Ejecutar lo mismo cada dos segundos
    async () => {
      const valor = moduloRasberry.calcularProximidad();
      console.log('Valor proximidad: ', valor);
      // 1337 -> IoT
      // 1338 -> Backend
      // POST http://localhost:1338/MonitoreoMovimiento {'valor': valor]
      const respuestaServidor = await axios
        .post('http://localhost:1338/MonitoreoMovimiento',
          {
            valor: valor
          }
        ); // PROMESA
      console.log('respuestaServidor', respuestaServidor);
    },
    2000 // 2 segundos
  )
};
