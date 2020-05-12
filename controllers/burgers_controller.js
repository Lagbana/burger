// Import dependencies
const express = require("express")
const Burger = require("../models/burger")

const router = express.Router()

/* HTML Routes */
router.get('/', async function (req, res) {
    const data = await Burger.getAllBurgers()
    res.render('index', { burgers: data })
})

/* API Routes */
// Get request at API route
router.get('/api/burgers', async function (req, res) {
    try {
        const burgers = await Burger.getAllBurgers()
        res.status(200).json({ data: burgers })
    } catch (err) {
        res.status(500).json(err)
    }
})
// Post request at API route
router.post('/api/burgers', async (req, res) => {
    try {
        const newBurger = new Burger(req.body)
        await newBurger.save()
        res.status(201).json(newBurger)
    } catch (err) {
        res.status(500).json(err)
    }
})
// Patch request at API route to update burger name by id
router.patch('/api/burgers/:id', async (req, res) => {

    const id = req.params.id
    const burgerName = req.body.burger_name
    const devoured = req.body.devoured

    let updatedBurger = new Burger({ burgerName: burgerName, isDevoured: devoured, id })
    try {
        await updatedBurger.save()
        res.status(200).json(updatedBurger)
        
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router
