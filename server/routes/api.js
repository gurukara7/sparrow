const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
var recruitSchema = new Schema({
    name: String,
    phone: Number,
    email: String,
    joining: Boolean
});

mongoose.connect('mongodb://parrot:TiPxAn9NZktsUVlD@ds133127.mlab.com:33127/penguin', { useMongoClient: true });
var recruits = mongoose.model('recruits', recruitSchema);


// Get users
router.get('/recruits', (req, res) => {
    recruits.find({}, function (err, recruits) {
        if (err) throw err;
        res.json(recruits);
    }).sort({ joining: 1 });
});

module.exports = router;








//const MongoClient = require('mongodb').MongoClient;
//const ObjectID = require('mongodb').ObjectID;

// make this available to our users in our Node applications
//module.exports = User;

// Connect
//const connection = (closure) => {
//    return MongoClient.connect('mongodb://parrot:TiPxAn9NZktsUVlD@ds133127.mlab.com:33127/penguin', (err, db) => {
//        if (err) return console.log(err);

//        closure(db);
//    });
//};

//// Error handling
//const sendError = (err, res) => {
//    response.status = 501;
//    response.message = typeof err == 'object' ? err.message : err;
//    res.status(501).json(response);
//};

// Response handling
//let response = {
//    status: 200,
//    data: [],
//    message: null
//};