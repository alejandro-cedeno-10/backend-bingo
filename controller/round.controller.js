const  RoundDao  = require('../dao/round.dao');

var RoundController = {
    addRound: addRound,
    findRound: findRound,
    findRoundById: findRoundById,
    updateRound: updateRound,
    deleteById: deleteById
}

function addRound(req, res) {
    let Round = req.body;
    RoundDao.create(Round).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findRoundById(req, res) {
    RoundDao.findById(req.params.id).
        then((data) => {
            if (data) {
                res.status(200).send(data)
            } else {
                res.status(404).send("Round  Not Found")
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    RoundDao.deleteById(req.params.id).
        then((data) => {
            if (data) {
                res.status(200).json({
                    message: "Round  deleted successfully",
                    Round: data
                })
            } else {
                res.status(404).send("Round  Not Found")
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateRound(req, res) {

    RoundDao.updateRound(req.body, req.params.id).
        then((data) => {
            if (data[0]) {
                res.status(200).json({
                    message: "Round Update successfully",
                    Round: data
                })
            } else {
                res.status(404).send("Round Not Found")
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

function findRound(req, res) {
    RoundDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = RoundController;