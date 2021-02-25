const express = require('express');
const router = express.Router();
const RoundController = require('../controller/round.controller');

router.post('/', RoundController.addRound);
router.get('/', RoundController.findRound);
router.get('/:id', RoundController.findRoundById);
router.put('/:id', RoundController.updateRound);
router.delete('/:id', RoundController.deleteById);

module.exports = router;