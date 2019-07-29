const burgerRouter = require('express').Router()
const Burger = require('../models/burger')

burgerRouter.get('/', async (req, res) => {
  console.log("OMG")
  try {
    const burgers = await Burger.find({})
    if (burgers) {
      res.json(burgers.map(Burger.format))
    }
  } catch (exception) {
    console.log(exception)
    res.status(500).json({ error: 'something went wrong...' })
  }
})

burgerRouter.post('/', async (req, res) => {
  console.log("LOL")
  try {
    const body = req.body
    console.log("BODY")
    console.log(body)
    if (body.name === undefined) {
      return res.status(400).json({ error: 'name missing' })
    }

    const burger = new Burger({
      name: body.name,
      ingredients: body.ingredients
    })

    const savedBurger = await burger.save()

    if (savedBurger) {
      res.json(Burger.format(savedBurger))
    } else {
      res.status(404).end()
    }
  } catch (exception) {
    console.log(exception)
    res.status(500).json({ error: 'something went wrong...' })
  }
})

module.exports = burgerRouter