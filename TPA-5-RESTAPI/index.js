const express = require('express');
const router = require('./route');
const dotEnv = require('dotenv');

const db = require('./models');

const app = express();

dotEnv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/',router);

db.sequelize.authenticate().then(() => {
    console.log('DB Connection has been established successfully.');
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
});

