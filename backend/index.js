const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const product = require('./modules/Product');
//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}))

app.use("/product", product);

app.listen(3000);