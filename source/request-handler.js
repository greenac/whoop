'use strict';

var uservice = require('./uservice');
var jsonResponse = require('./json-response');
var logger = require('gruew-logger');

module.exports = {
    //saveUser
    saveUser: function(req, res) {
        var postData = req.body;
        uservice.addUser(postData, function(error) {
            if (error) {
                logger.log(['Saving user data', __filename, true]);
                jsonResponse(error, null, res);
                return;
            }

            jsonResponse(null, null, res);
        });
    },

    getAlpha: function (req, res) {
        //Get Alpha
        uservice.getAlpha(function(error, alpha) {
            if (error) {
                logger.log(['Getting alpha', __filename, true]);
                jsonResponse(error, null, res);
                return;
            }

            jsonResponse(null, alpha, res)
        });
    },

    getAllUsers: function (req, res) {
        //Get All Users
        var users = uservice.getAllUsers();
        jsonResponse(null, users, res);
    },

    //Get distance
    inRange: function(req,res){
        var postData = req.body; //require 
        var isClose = uservice.getDistance(postData); //return TRUE/FALSE in isClose variable
        jsonResponse(null, isClose, res); //return isClose variable
    },

    //Get Name
    getFullName: function(req,res){
        var postData = req.body; //get data body
        var fullName = uservice.getName(postData.email); //get email from data body
        jsonResponse(null, fullName, res); //allows use of fullName object variable 
    }



};
