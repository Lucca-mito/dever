'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PokemonSchema = new Schema({
  name: {
    type: String,
    required: 'A Pokémon needs a name!'
  },
  type1: {
    type: String,
    default: 'Normal'
  },
  type2: {
    type: String,
    default: '' // Não sei se precisa definir um default, mas na dúvida né...
  },
  height: {
    type: Number
  }
});

module.exports = mongoose.model('Pokemon', PokemonSchema);
