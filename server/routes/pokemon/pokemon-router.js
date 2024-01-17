var express = require("express");
var router = express.Router();
const { getPokemon } = require("./pokemon-functions");
const { paginatedResults } = require("../../utils/pagination");
const searchName = require("../../utils/search");

router.get("/", async function (req, res) {
  const limit = parseInt(req.query.limit) || 1302;
  const page = parseInt(req.query.page) || 1;
  const search = req.query.search;

  try {
    let pokemon = await getPokemon();

    if (search) pokemon = searchName(search, pokemon);

    pokemon = paginatedResults(pokemon, page, limit);

    return res.status(200).json(pokemon);
  } catch (error) {}
});

module.exports = router;
