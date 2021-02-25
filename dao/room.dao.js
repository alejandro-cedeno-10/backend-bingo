const { room } = require("../models/index");
const { users } = require("../models/index");

var RoomDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateRoom: updateRoom
}

function findAll() {
    return room.findAll();
}

function findById(id) {
    return room.findByPk(id);
}

function deleteById(id) {
    return room.destroy({ where: { id: id } });
}

function create(rooms) {
    var newRoom = new room(rooms);
    return newRoom.save();
}

function updateRoom(rooms, id) {
    var updateRoom = {
        userId: rooms.userId,
        users_max: rooms.users_max
    };
    return room.update(updateRoom, { where: { id: id } });
}


module.exports = RoomDao;