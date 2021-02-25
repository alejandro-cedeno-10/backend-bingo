const  RoomDao  = require('../dao/room.dao');

var roomController = {
    addRoom: addRoom,
    findRoom: findRoom,
    findRoomById: findRoomById,
    updateRoom: updateRoom,
    deleteById: deleteById
}

function addRoom(req, res) {
    let Room = req.body;
    RoomDao.create(Room).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findRoomById(req, res) {
    RoomDao.findById(req.params.id).
        then((data) => {
            if (data) {
                res.status(200).send(data)
            } else {
                res.status(404).send("Room Not Found")
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    RoomDao.deleteById(req.params.id).
        then((data) => {
            if (data) {
                res.status(200).json({
                    message: "Room deleted successfully",
                    Room: data
                })
            } else {
                res.status(404).send("Room Not Found")
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateRoom(req, res) {
    RoomDao.updateRoom(req.body, req.params.id).
        then((data) => {
            if (data[0]) {
                res.status(200).json({
                    message: "Room Update successfully",
                    Room: data
                })
            } else {
                res.status(404).send("Room Not Found")
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

function findRoom(req, res) {
    RoomDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = roomController;