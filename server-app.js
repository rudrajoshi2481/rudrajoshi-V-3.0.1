const express = require('express')

const app = express()

app.use(express.static('build'))


app.listen(1000,() => {
    console.log("App started on Port 1000");
})
