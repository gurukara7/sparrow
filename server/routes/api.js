const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
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

// create a schema
var userSchema = new Schema({
    userID: Number,
    userName: String,
    fullName: String,
    password: String,
    email: String
});

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://parrot:TiPxAn9NZktsUVlD@ds133127.mlab.com:33127/penguin', { useMongoClient: true });
var recruits = mongoose.model('recruits', recruitSchema);
var users = mongoose.model('users', userSchema);

// authenticate users
router.post('/authenticate', (req, res, next) => {
    var authenticateData = req.body;
    if(!authenticateData.userName){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    }

    users.findOne({userName: authenticateData.userName}, function (err, user) {
        if (err) throw err;
            
        if (!user) {
            res.status(401);
            res.json({ success: false, message: 'Authentication failed.' });
            } else {
                if (user) {              
                    // check if password matches
                    if (user.password != authenticateData.password) {
                        res.status(401);
                        res.json({ success: false, message: 'Authentication failed.' });
                    } else {
                
                        // if user is found and password is right
                        // create a token with only our given payload
                        // we don't want to pass in the entire user since that has the password
                        const payload = {
                            userName: user.userName 
                        };

                        var token = jwt.sign(payload, "superSceret", {
                            expiresIn : 60*60*24 // expires in 24 hours
                        });

                        // return the information including token as JSON
                        res.json({
                            success: true,
                            message: 'Token Generated!',
                            token: token
                        });
                    }
            }
            else {
                res.status(401);
                res.json({ success: false, message: 'Authentication failed.' });
            }
        }
    }); 
    
});

// route middleware to verify a token
router.use(function(req, res, next) {
    // check header or url parameters or post parameters for token
    //var token = req.body.token || req.query.token || req.headers['EECA1FFF00DB_TOKEN'];
    var token = req.body.token || req.query.token || req.headers['eeca1fff00db_token'];
  
    // decode token
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, "superSceret", function(err, decoded) {      
            if (err) {
                return res.status(401).send({ success: false, message: 'Failed to authenticate token.' });    
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;    
                next();
            }
        });
    } else {
        // if there is no token
        // return an error
        return res.status(403).send({ 
            success: false, 
            message: 'No token provided.' 
        });  
    }
});


// Get users
router.get('/recruits', (req, res) => {
    recruits.find({}, function (err, recruits) {
        if (err) throw err;
        res.json(recruits);
    }).sort({ joining: 1 });
});

// Add users
router.post('/addrecruit', (req, res, next) => {
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