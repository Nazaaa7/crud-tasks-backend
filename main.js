const {newConnection} = require("./src/bd/bd")
const express = require("express");
const app =express()

app.listen(3000)

app.use(express.json())


console.log("servidor iniciado")