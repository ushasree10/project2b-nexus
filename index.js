// server.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');
const contactRoute = require("./controller/contactRoute");

const app = express();
mongoose.set("strictQuery", true);
mongoose.connect("mongodb+srv://usha:usha@cluster0.ycub0q5.mongodb.net/techydb");

var db = mongoose.connection;
db.on('open',()=>console.log("connected to db"));
db.on('error',()=>console.log("error connecting to db"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use("/contact",contactRoute);

app.listen(4000,()=>console.log("server started on port 4000"));
