const { number_game } = require("../models/index");

var numberGameDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateNumberGame: updateNumberGame
}

function findAll() {
    return number_game.findAll();
}

function findById(id) {
    return number_game.findByPk(id);
}

function deleteById(id) {
    return number_game.destroy({ where: { id: id } });
}

function create(numberGame) {
    var newNumberGame = new number_game(numberGame);
    return newNumberGame.save();
}

function updateNumberGame(numberGame, id) {
    var updateNumberGame = {
        roundId: numberGame.roundId,
        value : numberGame.value,
    };
    return number_game.update(updateNumberGame, { where: { id: id } });
}


module.exports = numberGameDao;