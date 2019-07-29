const ingredientRouter = require('express').Router();
const ingredientDb = require('../db/ingredients');

ingredientRouter.get('/', (req, res) => {
  res.status(200)
    .send({
      ingredients: ingredientDb
    })
})

module.exports = ingredientRouter;