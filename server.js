var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Pokemon = require('./api/models/PokemonModel'),
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Pokemondb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/pokemonRoutes');
routes(app);
app.listen(port);
console.log('Dever de TecProg (API Pokémon) rodando na porta ' + port);
