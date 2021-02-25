const express = require('express');
const router = express.Router();
const userRoutes = require('./users.route');
const roomRoutes = require('./room.route');
const tableRoutes = require('./table.route');
const tableNumberRoutes = require('./table_number.route');
const rewardRoutes = require('./reward.route');
const roundRoutes = require('./round.route');
const numberGameRoutes = require('./number_game');
const winnerRoutes = require('./winner.route');

router.use('/users', userRoutes);
router.use('/rooms', roomRoutes);
router.use('/tables', tableRoutes);
router.use('/tables-number', tableNumberRoutes);
router.use('/rewards', rewardRoutes);
router.use('/rounds', roundRoutes);
router.use('/number_game', numberGameRoutes);
router.use('/winners', winnerRoutes);

module.exports = router;

