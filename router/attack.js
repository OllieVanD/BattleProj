const express = require('express');
const { attackPlayer } = require('../controllers/attack');
const router = express.Router()

router.post('/', attackPlayer);

module.exports = router