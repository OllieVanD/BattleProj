const express = require('express');
const router = express.Router()
const computerGameController = require('../controllers/computerGame.js')

router.post('/', computerGameController.computerGameSetup);

module.exports = router