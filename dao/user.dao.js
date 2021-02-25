const { users } = require("../models/index");

var UserDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateUser: updateUser
}

function findAll() {
    return users.findAll();
}

function findById(id) {
    return users.findByPk(id);
}

function deleteById(id) {
    return users.destroy({ where: { id: id } });
}

function create(user) {
    var newUsers = new users(user);
    return newUsers.save();
}

function updateUser(user, id) {
    var updateUser = {
        email: user.email,
        name: user.name,
        lastname: user.lastname,
        password: user.password
    };
    return users.update(updateUser, { where: { id: id } });
}


module.exports = UserDao;