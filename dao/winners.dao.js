const { winners } = require("../models/index");

var winnerDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateWinner: updateWinner
}

function findAll() {
    return winners.findAll();
}

function findById(id) {
    return winners.findByPk(id);
}

function deleteById(id) {
    return winners.destroy({ where: { id: id } });
}

function create(winner) {
    var newWinner = new winners(winner);
    return newWinner.save();
}

function updateWinner(winner, id) {
    var updateWinner = {
        roundId: winner.roundId,
        value : winner.value,
    };
    return winners.update(updateWinner, { where: { id: id } });
}


module.exports = winnerDao;