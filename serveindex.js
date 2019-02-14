const express = require("express");
var serveIndex = require('serve-index')

const app = express();
const port = process.env.PORT || 8080;


app.use("/", serveIndex('view', { 'icons': true }))
app.use(express.static(__dirname + '/view'));

app.listen(port, () => {
    console.log(`Server started at ${port}`);

})