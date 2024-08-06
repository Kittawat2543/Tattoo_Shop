const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const bodyparser = require("body-parser")
const { readdirSync } = require("fs")
const path = require('path');

const connectDB = require("./config/db")

const app = express()
const port = 8001

connectDB()

app.use(morgan("dev"))
app.use(cors())
app.use(bodyparser.json())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));



readdirSync("./routes").map((r) => {
    app.use("/api", require("./routes/" + r))
}) 


app.listen(port, () => {
    console.log(`Sever is running on port ${port}`)
})