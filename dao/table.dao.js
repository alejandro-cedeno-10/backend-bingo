const { table } = require("../models/index");

var tableDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateTable: updateTable
}

function findAll() {
    return table.findAll();
}

function findById(id) {
    return table.findByPk(id);
}

function deleteById(id) {
    return table.destroy({ where: { id: id } });
}

function create(tables) {
    var newTable = new table(tables);
    return newTable.save();
}

function updateTable(tables, id) {
    var updateTable = {
        userId: tables.userId
    };
    return table.update(updateTable, { where: { id: id } });
}


module.exports = tableDao;