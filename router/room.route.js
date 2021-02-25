const express = require('express');
const router = express.Router();
const roomController = require('../controller/room.controller');

router.post('/', roomController.addRoom);
router.get('/', roomController.findRoom);
router.get('/:id', roomController.findRoomById);
router.put('/:id', roomController.updateRoom);
router.delete('/:id', roomController.deleteById);

module.exports = router;