/* This file will handle all the database connection related stuff */
const {
    MongoClient,
    ServerApiVersion
} = require('mongodb');
const uri = "mongodb+srv://admin:admin@cluster0.ulnywla.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

client.connect();
module.exports = client;