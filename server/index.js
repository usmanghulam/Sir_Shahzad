const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.resolve("./dist")))
const PORT = process.env.PORT || 3002
app.listen(PORT, ()=> console.log("localhost//:3002"))
