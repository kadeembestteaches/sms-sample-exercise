
const express = require("express");
const exphbs = require("express-handlebars")
const bodyParser = require('body-parser');

const GeneralController = require("./controllers/GeneralController.js")

const app = express();

//middleware 
app.use(express.static("public"));
 
app.engine("handlebars",exphbs());
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: false }))


app.use("/",GeneralController);

const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`Web Server is up and running on PORT : ${PORT}`)
});