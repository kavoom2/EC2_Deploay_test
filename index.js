const express = require("express");

cosnt app = express();

app.use("/", (req, res) => {
    res.send("Hello World, this is node server");
})

app.listen(5000, () => {
    console.log("This server is listening on PORT 5000");
})