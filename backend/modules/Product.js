const express = require('express');
const db = require("../db/dbconnection");
const router = express.Router();


//get all products
router.get("/", function(req, res){
    db.query("SELECT * FROM products", function(err, result){
        if(err){
            console.log(err);
        }
        res.json(result);
    })
})
//get product by id
router.get("/:id", function(req, res){
    var id = req.params.id;
    console.log(id);
    db.query("SELECT * FROM products WHERE id =?",[id] ,function(err, result){
        if(err){
            console.log(err);
        }
        res.json(result);
    })
})

//search product

router.post("/search", function(req, res){
    var searchStr = req.body.search;
    db.query("SELECT * FROM products WHERE name LIKE  ?",['%'+searchStr+'%'] ,function(err, result){
        if(err){
            console.log(err);
        }
        res.json(result);
    })
})

//post products
router.post("/", function(req, res){
    var input = req.body;
    var product_id = "PRO" + Math.floor((Math.random() * 100000000000) + 1);
    var data = {
        name:input.name,
        price:input.price,
        quantity:input.quantity,
        img_url: input.img_url,
        availability: input.availability,
        product_id: product_id
    }
    db.query("INSERT INTO products SET ?",[data], function(err, result){
        if(err){
            console.log(err);
        }
        res.send(result);
    })
})

//update products
router.put("/:id", function(req, res){
    var id = req.params.id;
    var input = req.body;
    var data = {
        name:input.name,
        price:input.price,
        quantity:input.quantity,
        img_url: "https://i5.walmartimages.ca/images/Large/832/497/6000196832497.jpg",
        availability: "true",
        product_id: "PRO123"
    }
    db.query("UPDATE products set ? WHERE id = ?",[data,id], function(err, result){
        if(err){
            console.log(err);
        }
        res.send(result);
    })
})



//delete products
router.delete("/", function(req, res){

})

module.exports = router;