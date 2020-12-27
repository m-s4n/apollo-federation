require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mainRouter = require('./src/routers/mainRouter');

const {json, urlencoded} = require('body-parser');
const PORT = process.env.APP_PORT || 3000;


/* --- add middleware --- */
const app = express();
var corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200,
};
app.use(json());
app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
    next();
})
app.use(urlencoded({extended: false}));
app.set('json spaces', 2);
app.use(cors(corsOptions));

/* --- add main router --- */
mainRouter(app);

/* --- server listen --- */
app.listen(PORT, () => {
    console.log("Astronauts micro service is started on PORT : " + PORT);
})