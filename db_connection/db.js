var mongoose = require("mongoose");
const config = require('../config/config.json');

// this is our MongoDB database
const dbRoute = `mongodb://${config.db.host}:${config.db.port}/${config.db.dbname}`;

// connects our back end code with the database
mongoose.connect(
    dbRoute,
    { useNewUrlParser: true }
);

var db = mongoose.connection;
db.once("open", () => console.log("connected to the database"));
// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

