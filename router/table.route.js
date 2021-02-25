const express = require('express');
const router = express.Router();
const TableController = require('../controller/Table.controller');

router.post('/', TableController.addTable);
router.get('/', TableController.findTable);
router.get('/:id', TableController.findTableById);
router.put('/:id', TableController.updateTable);
router.delete('/:id', TableController.deleteById);

module.exports = router;