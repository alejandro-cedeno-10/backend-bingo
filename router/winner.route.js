const express = require('express');
const router = express.Router();
const winnerController = require('../controller/winner.controller');

router.post('/', winnerController.addWinner);
router.get('/', winnerController.findWinner);
router.get('/:id', winnerController.findWinnerById);
router.put('/:id', winnerController.updateWinner);
router.delete('/:id', winnerController.deleteById);

module.exports = router;