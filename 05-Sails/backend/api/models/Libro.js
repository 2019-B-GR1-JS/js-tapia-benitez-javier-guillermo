/**
 * Libro.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    titulo: {
      type: 'string'
    },
    isbn: {
      type: 'string'
    },
    idUsuario: {
      model: 'usuario', // Nombre model padre
      required: true
    }
  },

};

