const { round } = require("../models/index");

var RoundDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateRound: updateRound
}

function findAll() {
    return round.findAll();
}

function findById(id) {
    return round.findByPk(id);
}

function deleteById(id) {
    return round.destroy({ where: { id: id } });
}

function create(rounds) {
    var newRound = new round(rounds);
    return newRound.save();
}

function updateRound(rounds, id) {
    var updateRound = {
        roomId: rounds.roomId,
        game: rounds.game
    };
    return round.update(updateRound, { where: { id: id } });
}


module.exports = RoundDao;