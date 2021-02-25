const  winnerDao  = require('../dao/winners.dao');

var winnerController = {
    addWinner: addWinner,
    findWinner: findWinner,
    findWinnerById: findWinnerById,
    updateWinner: updateWinner,
    deleteById: deleteById
}

function addWinner(req, res) {
    let Winner = req.body;
    winnerDao.create(Winner).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findWinnerById(req, res) {
    winnerDao.findById(req.params.id).
        then((data) => {
            if (data) {
                res.status(200).send(data)
            } else {
                res.status(404).send("Winner Not Found")
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    winnerDao.deleteById(req.params.id).
        then((data) => {
            if (data) {
                res.status(200).json({
                    message: "Winner deleted successfully",
                    Table: data
                })
            } else {
                res.status(404).send("Winner Not Found")
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateWinner(req, res) {

    winnerDao.updateWinner(req.body, req.params.id).
        then((data) => {
            if (data[0]) {
                res.status(200).json({
                    message: "Winner Update successfully",
                    Table: data
                })
            } else {
                res.status(404).send("Winner Not Found")
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

function findWinner(req, res) {
    winnerDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = winnerController;