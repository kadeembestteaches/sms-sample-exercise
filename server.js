
const express = require("express");
const exphbs = require("express-handlebars")
const bodyParser = require('body-parser');

const GeneralController = require("./controllers/GeneralController.js");

//This is to tell express to where to locate the ENV File


//If the app is running within Heroku, DON"T try to load keys.env
if(process.env.NODE_ENV !="production")
{
    require("dotenv").config({path :"config/Keys.env"});
}


const app = express();

//middleware 
app.use(express.static("public"));
 
app.engine("handlebars",exphbs());
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: false }))


app.use("/",GeneralController);


app.listen(process.env.PORT,()=>{
    console.log(`Web Server is up and running on PORT : ${PORT}`)
});