const express = require('express');
const router = express.Router();
const tableNumberController = require('../controller/table_number.controller');

router.post('/', tableNumberController.addTableNumber);
router.get('/', tableNumberController.findTableNumber);
router.get('/:id', tableNumberController.findTableNumberById);
router.put('/:id', tableNumberController.updateTableNumber);
router.delete('/:id', tableNumberController.deleteById);

module.exports = router;