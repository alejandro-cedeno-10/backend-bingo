const express = require('express');
const router = express.Router();
const RewardController = require('../controller/reward.controller');

router.post('/', RewardController.addReward);
router.get('/', RewardController.findReward);
router.get('/:id', RewardController.findRewardById);
router.put('/:id', RewardController.updateReward);
router.delete('/:id', RewardController.deleteById);

module.exports = router;