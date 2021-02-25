const  RewardDao  = require('../dao/reward.dao');

var RewardController = {
    addReward: addReward,
    findReward: findReward,
    findRewardById: findRewardById,
    updateReward: updateReward,
    deleteById: deleteById
}

function addReward(req, res) {
    let Reward = req.body;
    RewardDao.create(Reward).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findRewardById(req, res) {
    RewardDao.findById(req.params.id).
        then((data) => {
            if (data) {
                res.status(200).send(data)
            } else {
                res.status(404).send("Reward  Not Found")
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    RewardDao.deleteById(req.params.id).
        then((data) => {
            if (data) {
                res.status(200).json({
                    message: "Reward  deleted successfully",
                    Reward: data
                })
            } else {
                res.status(404).send("Reward  Not Found")
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateReward(req, res) {

    RewardDao.updateReward(req.body, req.params.id).
        then((data) => {
            if (data[0]) {
                res.status(200).json({
                    message: "Reward Update successfully",
                    Reward: data
                })
            } else {
                res.status(404).send("Reward Not Found")
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

function findReward(req, res) {
    RewardDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = RewardController;