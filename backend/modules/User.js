const express = require('express');
const db = require("../db/dbconnection");
const router = express.Router();

//get all users
router.get("/", function(req, res){
    db.query("SELECT * FROM user", function(err,results){
        res.send(results);
    }) 
})

//save user
router.post("/", function(req, res){
    var input = req.body;
    var usr_id = Math.floor((Math.random() * 100000000000) + 1);
    var data = {
        username:input.username,
        email:input.email,
        password:input.password,
        user_id: usr_id
    }
    // check is exists
    db.query("SELECT id from user WHERE email = ?", [input.email],function(err, results){
        if(results == ""){
            //insert into database
            db.query("INSERT INTO user SET ?", [data], function(err,results){
                if(err){
                    throw err;
                }
                res.status(200).send(results);
            })
        }else{
            res.json({message:"User Already Exists!!"})
        }
    })
})

module.exports = router;