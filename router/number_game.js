const express = require('express');
const router = express.Router();
const numberGameController = require('../controller/number_game.controller');

router.post('/', numberGameController.addNumberGame);
router.get('/', numberGameController.findNumberGame);
router.get('/:id', numberGameController.findNumberGameById);
router.put('/:id', numberGameController.updateNumberGame);
router.delete('/:id', numberGameController.deleteById);

module.exports = router;