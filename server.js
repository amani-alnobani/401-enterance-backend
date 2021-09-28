'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const server = express();
server.use(cors());
require('dotenv').config();
server.use(express.json());

const mongoose = require('mongoose');
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGODB_URL;
const MONGODB_NAME=process.env.MONGODB_NAME;

mongoose.connect(`${MONGO_URL}/${MONGODB_NAME}`);

const {getFruit,creatFruit,updateFruit,deleteFruit} = require ('./Controller/fruit.controller');


app.get('./fruit',getFruit);
app.post('./fruit',creatFruit);
app.put('./fruit',updateFruit);
app.delete('./fruit',deleteFruit);

app.listen(PORT);
