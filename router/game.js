const express = require('express');
const router = express.Router()
const gameController = require('../controllers/game.js')

router.post('/', gameController.setUpGame);

module.exports = router