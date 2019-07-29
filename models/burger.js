const mongoose = require('mongoose')

const burgerSchema = new mongoose.Schema({
  name: String,
  ingredients: Array
})

burgerSchema.statics.format = (burger) => {
  return {
    id: burger.id,
    name: burger.name,
    ingredients: burger.ingredients
  }
}

const Burger = mongoose.model('Burger', burgerSchema)

module.exports = Burger