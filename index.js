const express = require('express')
const bodyPraser = require('body-parser')
const app = express()

app.use(bodyPraser.json())

app.get("/", (req, res) => {
    res.send("Yoooo!")
})

app.get("/about", (req, res) => {
    res.send("What do you want to know !")
})

app.post("/webhook", (req, res) => {
    data = req.body
    console.log(data)
    res.send("Webhook called !")
})


const port = 4567
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

