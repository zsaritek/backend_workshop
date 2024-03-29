const express = require("express");
const router = express.Router();

const User = require("../models/User.model")

router.get('/', (req, res) => {
    res.send('Hello World')
})

router.post('/', async (req, res) => {
    console.log(req.body)

    await User.create({ email: "gundi2@gmail.com", name: "gundi" })

    res.status(200).json({ message: "it works...." })
})

module.exports = router;