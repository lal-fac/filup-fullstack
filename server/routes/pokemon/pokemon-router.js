var express = require("express");
var router = express.Router();
const { getPokemon } = require("./pokemon-functions");

router.get("/", async function (req, res, next) {
  // const { limit, page } = req.query;
  const pokemon = await getPokemon();
  return res.status(200).json(pokemon);
});

module.exports = router;
