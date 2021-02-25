const { table_number } = require("../models/index");

var tableNumberDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateTableNumber: updateTableNumber
}

function findAll() {
    return table_number.findAll();
}

function findById(id) {
    return table_number.findByPk(id);
}

function deleteById(id) {
    return table_number.destroy({ where: { id: id } });
}

function create(tableNumber) {
    var newTableNumber = new table_number(tableNumber);
    return newTableNumber.save();
}

function updateTableNumber(tableNumber, id) {
    var updateTableNumber = {
        col: tableNumber.col,
        tableId : tableNumber.tableId,
        position: tableNumber.position,
        number: tableNumber.number,
    };
    return table_number.update(updateTableNumber, { where: { id: id } });
}


module.exports = tableNumberDao;