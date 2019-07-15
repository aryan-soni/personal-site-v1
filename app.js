const express        = require("express"),
      bodyParser     = require("body-parser");
      
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// require indexRoutes; stores file with all relevant routes 
const indexRoutes = require("./routes/index");

// use indexRoutes
app.use("/", indexRoutes); 

// listen on var PORT or 3000 if nothing there
var port = process.env.PORT || 3000;

app.listen(port, process.env.IP, () => {
    // log message to confirm server has started
    console.log("Server Has Started"); 
});