const  UserDao  = require('../dao/user.dao');

var userController = {
    addUser: addUser,
    findUsers: findUsers,
    findUserById: findUserById,
    updateUser: updateUser,
    deleteById: deleteById
}

function addUser(req, res) {
    let User = req.body;
    UserDao.create(User).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findUserById(req, res) {
    UserDao.findById(req.params.id).
        then((data) => {
            if (data) {
                res.status(200).send(data)
            } else {
                res.status(404).send("User Not Found")
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    UserDao.deleteById(req.params.id).
        then((data) => {
            if (data) {
                res.status(200).json({
                    message: "User deleted successfully",
                    User: data
                })
            } else {
                res.status(404).send("User Not Found")
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateUser(req, res) {
    UserDao.updateUser(req.body, req.params.id).
        then((data) => {
            if (data[0]) {
                res.status(200).json({
                    message: "User Update successfully",
                    User: data
                })
            } else {
                res.status(404).send("User Not Found")
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

function findUsers(req, res) {
    UserDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = userController;