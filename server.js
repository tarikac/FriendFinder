///express and path

var express = require("express");
var path = require("path")

var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"))
})

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"))
})

app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });