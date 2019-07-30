const mongoose = require('mongoose')

const burgerSchema = new mongoose.Schema({
  name: String,
  ingredients: Array,
  votes: Number
})

burgerSchema.statics.format = (burger) => {
  return {
    id: burger.id,
    name: burger.name,
    ingredients: burger.ingredients,
    votes: burger.votes
  }
}

const Burger = mongoose.model('Burger', burgerSchema)

module.exports = Burger