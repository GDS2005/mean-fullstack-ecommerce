const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path");
const indexRoutes = require('./routes/index');


/* CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

/* MONGOOSE SETUP */

try {
        mongoose.connect(process.env.DB_URL, {});
        console.log('¡Database connected!');
} catch (error) {
        console.error('Could not connect to Database:', error.message);
}

/* SET MAIN ROUTE */
app.use('/', indexRoutes)

/* SETTINGS */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));