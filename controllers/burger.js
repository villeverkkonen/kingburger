const burgerRouter = require('express').Router()
const Burger = require('../models/burger')

burgerRouter.get('/', async (req, res) => {
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
  try {
    const body = req.body
    if (body.name === undefined || body.ingredients.length === 0) {
      return res.status(400).json({ error: 'name or ingredients missing' })
    }

    const burger = new Burger({
      name: body.name,
      ingredients: body.ingredients,
      votes: body.votes
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

burgerRouter.put('/:id', (req, res, next) => {
  Burger.findByIdAndUpdate(req.params.id, req.body, (err, post) => {
    if (err) return next(err)
    res.json(post)
  })
})

module.exports = burgerRouter