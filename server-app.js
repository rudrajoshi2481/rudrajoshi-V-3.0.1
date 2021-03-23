const express = require('express')
const path = require("path")
const app = express()

app.use('/',express.static(path.join(__dirname, "build")))

app.get('*', (req, res) => res.sendFile(path.resolve('', 'build', 'index.html')));

// // Serve static files on server
// app.use("/public", express.static(__dirname + "/../public"));

// app.get("*", function(request, response) {
//   response.sendFile(path.join(__dirname + "/../public/index.html"));
// });



app.listen(1000,() => {
    console.log("App started on Port 1000");
})
