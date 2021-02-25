const  TableNumberDao  = require('../dao/table_number.dao');

var tableNumberController = {
    addTableNumber: addTableNumber,
    findTableNumber: findTableNumber,
    findTableNumberById: findTableNumberById,
    updateTableNumber: updateTableNumber,
    deleteById: deleteById
}

function addTableNumber(req, res) {
    let TableNumber = req.body;
    TableNumberDao.create(TableNumber).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findTableNumberById(req, res) {
    TableNumberDao.findById(req.params.id).
        then((data) => {
            if (data) {
                res.status(200).send(data)
            } else {
                res.status(404).send("Table Number Not Found")
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    TableNumberDao.deleteById(req.params.id).
        then((data) => {
            if (data) {
                res.status(200).json({
                    message: "Table Number deleted successfully",
                    Table: data
                })
            } else {
                res.status(404).send("Table Number Not Found")
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateTableNumber(req, res) {

    TableNumberDao.updateTableNumber(req.body, req.params.id).
        then((data) => {
            if (data[0]) {
                res.status(200).json({
                    message: "Table Number Update successfully",
                    Table: data
                })
            } else {
                res.status(404).send("Table Number Not Found")
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

function findTableNumber(req, res) {
    TableNumberDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = tableNumberController;