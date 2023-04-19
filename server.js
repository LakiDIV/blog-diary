const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

// Serve static files from the "public" directory
app.use(express.static("public"));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({extended: true}))

// Serve the home page
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/contact", function(req, res){
    res.send("Contact me at mrlakix@gmail.com");
});

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log("Server started on port 3000");
});