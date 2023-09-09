/* This file will handle all the database connection related stuff */
let collection = require("../models/cat");
const insertcatintoDB = (req, res) => {
    let cat = req.body;
    collection.insertCat(cat, (err, result) => {
        if (!err) {
            res.json({
                statusCode: 201,
                data: result,
                message: 'Inserted...!'
            });

        }
    });
}

const getcatfromDB = (req, res) => {
    collection.getAllCats((err, result) => {
        if (!err) {
            res.json({
                statusCode: 200,
                data: result,
                message: 'Fetched...!'
            });
        }
    });
}

const deleteFromDB = (req, res) => {
    let cat = req.body;
    collection.deleteCats(cat, (err, result) => {
        if (!err) {
            res.json({
                statusCode: 202,
                data: result,
                message: 'Deleted...!'
            });

        }
    });
}

module.exports = {
    insertcatintoDB,
    getcatfromDB,
    deleteFromDB
};