//HÄr ska vi definiera vår server. 
const express = require("express")
const app = express()
const port = 8080

// Route till
app.get('/', (req, res) => res.send("helloWorld"))



module.exports = {
    app,
    port
}