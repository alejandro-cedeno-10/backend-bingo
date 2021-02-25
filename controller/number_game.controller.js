const  numberGameDao  = require('../dao/number-game.dao');

var numberGameController = {
    addNumberGame: addNumberGame,
    findNumberGame: findNumberGame,
    findNumberGameById: findNumberGameById,
    updateNumberGame: updateNumberGame,
    deleteById: deleteById
}

function addNumberGame(req, res) {
    let NumberGame = req.body;
    numberGameDao.create(NumberGame).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findNumberGameById(req, res) {
    numberGameDao.findById(req.params.id).
        then((data) => {
            if (data) {
                res.status(200).send(data)
            } else {
                res.status(404).send("Number Game Not Found")
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    numberGameDao.deleteById(req.params.id).
        then((data) => {
            if (data) {
                res.status(200).json({
                    message: "Number Game deleted successfully",
                    Table: data
                })
            } else {
                res.status(404).send("Number Game Not Found")
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateNumberGame(req, res) {

    numberGameDao.updateNumberGame(req.body, req.params.id).
        then((data) => {
            if (data[0]) {
                res.status(200).json({
                    message: "Number Game Update successfully",
                    Table: data
                })
            } else {
                res.status(404).send("Number Game Not Found")
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

function findNumberGame(req, res) {
    numberGameDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = numberGameController;