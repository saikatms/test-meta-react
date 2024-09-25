const express = require("express")
const path = require("path")
const fs = require("fs")
const dotenv = require("dotenv").config()
const PORT = process.env.PORT || 4000


const app = express()
console.log("port", PORT);

app.get("/", (req, res) => {
    const filePath = path.resolve(__dirname, "./build", "index.html")
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/__TITLE__/g, "Home Page").replace(/__DESCRIPTION__/g, "Home Page Description").replace(/__OG_IMAGE__/g, `${process.env.ASSETS_PATH}GIYTOORTHIYQ.jpg`)
        res.send(data)
    })
})

app.get("/page1", (req, res) => {
    const filePath = path.resolve(__dirname, "./build", "index.html");
    console.log("req.params", req.query);

    let thumnailId = req.query.seatId
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/__TITLE__/g, "Home Page").replace(/__DESCRIPTION__/g, "Home Page Description").replace(/__OG_IMAGE__/g, `${process.env.ASSETS_PATH}${thumnailId}.jpg`)
        res.send(data)
    })
})
app.get("/page2", (req, res) => {
    const filePath = path.resolve(__dirname, "./build", "index.html")
    let thumnailId = req.query.seatId

    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/__TITLE__/g, "Home Page").replace(/__DESCRIPTION__/g, "Home Page Description").replace(/__OG_IMAGE__/g, `${process.env.ASSETS_PATH}${thumnailId}.jpg`)
        res.send(data)
    })
})

app.use(express.static(path.resolve(__dirname, "./build")))

app.listen(PORT, () => {
    console.log(`Server is listining on port ${PORT}`);

})