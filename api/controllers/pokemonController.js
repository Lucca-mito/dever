'use strict';

var mongoose = require('mongoose'),
  Pokemon = mongoose.model('Pokemon');

exports.list_all_pokemon = function(req, res) {
  Pokemon.find({}, function(err, pkmn) {
    if (err) res.send(err);
    res.json(pkmn);
  });
};

exports.create_pokemon = function(req, res) {
  var new_pkmn = new Pokemon(req.body);
  new_pkmn.save(function(err, pkmn) {
    if (err) res.send(err);
    res.json(pkmn);
  });
};

exports.read_pokemon = function(req, res) {
  Pokemon.findById(req.params.pokemonId, function(err, pkmn) {
    if (err) res.send(err);
    res.json(pkmn);
  });
};

exports.update_pokemon = function(req, res) {
  Pokemon.findOneAndUpdate({_id: req.params.pokemonId}, req.body, {new: true}, function(err, pkmn) {
    if (err) res.send(err);
    res.json(pkmn);
  });
};

exports.delete_pokemon = function(req, res) {
  Pokemon.remove({
    _id: req.params.pokemonId
  }, function(err, pkmn) {
    if (err) res.send(err);
    res.json({ message: 'Pokémon successfully exterminated. You monster.' });
  });
};
