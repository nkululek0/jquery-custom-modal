require("dotenv/config");

const express = require("express");
const app = express();

const path = require("path");
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/view/index.html"));
});

app.listen(process.env.SERVER_PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log(`listening on port: ${ process.env.SERVER_PORT }`);
})