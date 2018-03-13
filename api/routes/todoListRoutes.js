'use strict';
module.exports = function(app) {
  var pokemon = require('../controllers/pokemonController');

  // Routes
  app.route('/pokemon')
    .get(todoList.list_all_pokemon)
    .post(todoList.create_pokemon);

  app.route('/pokemon/:pokemonId')
    .get(todoList.read_pokemon)
    .put(todoList.update_pokemon)
    .delete(todoList.delete_pokemon);
};
