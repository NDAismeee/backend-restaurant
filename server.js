const express = require("express");
const colors = require("colors")
const dotenv = require("dotenv")

//dotenv configuration
dotenv.config()

const app = express()


//route
// URL => http://localhost:8000
app.get("/", (req, res) => {
    return res.status(200).send("<h1>Welcome to our Project </h1>")
})

//PORT
const PORT = process.env.PORT || 5000

//listen
app.listen(PORT, () => {
    console.log(`Restaurant erver is running on ${PORT}`.bgGreen.white)
})