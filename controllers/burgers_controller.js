const express = require("express")
const Burger = require("../models/burger")

const router = express.Router()

/* HTML Routes */
router.get('/', async function (req, res) {
    res.render('index', {})
})

/* API Routes */


module.exports = router
