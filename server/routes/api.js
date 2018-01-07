const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
var recruitSchema = new Schema({
    name: String,
    phone: Number,
    email: String,
    DOJ: { type: Date, default: Date.now },
    joining: Boolean,
    addedByUserID: Number
});

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://parrot:TiPxAn9NZktsUVlD@ds133127.mlab.com:33127/penguin', { useMongoClient: true });
var recruits = mongoose.model('recruits', recruitSchema);


// Get users
router.get('/recruits', (req, res) => {
    recruits.find({}, function (err, recruits) {
        if (err) throw err;
        res.json(recruits);
    }).sort({ joining: 1 });
});

// Add users
router.post('/recruit', (req, res, next) => {
    var newRecruitData = req.body;
    if(!newRecruitData.name){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    }
        
    var Recruit = mongoose.model('Recruit', recruitSchema);

    var newRecruitDB = new Recruit();
    newRecruitDB.name = "";
    newRecruitDB.phone = "";
    newRecruitDB.email = "";
    newRecruitDB.joining = false;
    newRecruitDB.DOJ = new Date();
    newRecruitDB.addedByUserID = 1

    //console.log(newRecruitData.DOJ);

    if(newRecruitData.name) newRecruitDB.name = newRecruitData.name;
    if(newRecruitData.phone) newRecruitDB.phone = newRecruitData.phone;
    if(newRecruitData.email) newRecruitDB.email = newRecruitData.email;
    if(newRecruitData.joining) newRecruitDB.joining = newRecruitData.joining;
    if(newRecruitData.DOJ) newRecruitDB.DOJ = new Date(newRecruitData.DOJ);
    
    var promise = newRecruitDB.save();

    promise.then(function (newRecruit) {
        res.json(newRecruit); 
    }).catch(function (error){
        res.status(400);
        res.json(error);
    });
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