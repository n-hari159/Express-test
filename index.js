const express = require("express")
const app = express()
const port = process.env.PORT || 1234

app.get("/", function(req, res) {
    res.send("Hey, Hi")
})
app.listen(port, () => console.log(`Started on ${port}`))