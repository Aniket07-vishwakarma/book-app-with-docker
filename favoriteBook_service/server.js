const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const favoriteBooksRoutes = require('./src/routes/favorite.routes');
const port = 5000;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use("/favoriteBooks", favoriteBooksRoutes);

// mongoose.connect("mongodb://127.0.0.1:27017/favoriteBooks", () => {
// mongoose.connect("mongodb://192.168.31.132:27017/favoriteBooks", () => {
mongoose.connect("mongodb://mongodb:27017/favoriteBooks", () => {
    console.log("mongooseDB connected successfully.");
})
app.listen(port, () => {
    console.log("Server connected at port 5000.")
})

module.exports = app;