const express = require("express")
const Burger = require("../models/burger")

const router = express.Router()

/* HTML Routes */
router.get('/', async function (req, res) {
    res.render('index')
})

/* API Routes */
router.get('/api/burgers', async function (req, res) {
    try {
        const burgers = await Burger.getAllBurgers()
        res.status(200).json({data: burgers})
    } catch(err) {
        res.status(500).json(err)
    }
})

router.post('/api/burgers', async (req, res) => {
    try{
        const burger = new Burger(req.body)
        
        // console.log(newBurger)
        res.status(200).json(newBurger)
    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router
