const express = require('express');
const path = require('path');
const cors = require('cors');

const bodyParser = require("body-parser");


const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use("/uploads", express.static("uploads"));
//#region  Route
require("./route/routes")(app);

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.use(express.static(path.join(__dirname, 'web')));
console.log(__dirname);
// Handle fallback for single-page apps
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'web', 'index.html'));
});



