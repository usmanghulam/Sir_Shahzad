const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

app.use(express.static(path.resolve("./dist")))
app.use(cors())
const PORT = process.env.PORT || 3002
app.listen(PORT, ()=> console.log("localhost//:3002"))
