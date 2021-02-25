const  TableDao  = require('../dao/table.dao');
const  UserDao  = require('../dao/user.dao');

var roomController = {
    addTable: addTable,
    findTable: findTable,
    findTableById: findTableById,
    updateTable: updateTable,
    deleteById: deleteById
}

function addTable(req, res) {
    let Table = req.body;
    TableDao.create(Table).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findTableById(req, res) {
    TableDao.findById(req.params.id).
        then((data) => {
            if (data) {
                res.status(200).send(data)
            } else {
                res.status(404).send("Table Not Found")
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    TableDao.deleteById(req.params.id).
        then((data) => {
            if (data) {
                res.status(200).json({
                    message: "Table deleted successfully",
                    Table: data
                })
            } else {
                res.status(404).send("Table Not Found")
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateTable(req, res) {

    TableDao.updateTable(req.body, req.params.id).
        then((data) => {
            if (data[0]) {
                res.status(200).json({
                    message: "Table Update successfully",
                    Table: data
                })
            } else {
                res.status(404).send("Table Not Found")
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

function findTable(req, res) {
    TableDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = roomController;