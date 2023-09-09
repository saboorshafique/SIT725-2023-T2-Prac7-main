/* This file will handle all the collection related stuff */
let client = require("../database_connection");
let collection = client.db().collection('Cats');

function insertCat(cat, callback) {
    collection.insertOne(cat, callback);
}

function getAllCats(callback) {
    collection.find({}).toArray(callback);
}

function deleteCats(cat,callback) {
    collection.deleteOne(cat, callback);
}   

module.exports = {
    insertCat,
    getAllCats,
    deleteCats
};