const { reward } = require("../models/index");

var RewardDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateReward: updateReward
}

function findAll() {
    return reward.findAll();
}

function findById(id) {
    return reward.findByPk(id);
}

function deleteById(id) {
    return reward.destroy({ where: { id: id } });
}

function create(rewards) {
    var newReward = new reward(rewards);
    return newReward.save();
}

function updateReward(rewards, id) {
    var updateReward = {
        roomId: rewards.roomId,
        descripcion: rewards.descripcion
    };
    return reward.update(updateReward, { where: { id: id } });
}


module.exports = RewardDao;