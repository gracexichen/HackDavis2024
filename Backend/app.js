const express = require('express');
const cors = require('cors');
const app = express();
const { MongoClient } = require('mongodb');
  
//establish a server who listens and responds through http requests
app.use(cors());
app.use(express.json());
const router = require('./route');

app.use(router);
app.listen(4000, () => {
    console.log(`Server is running on port 8000.`);
    });

//set up client to connect to mongodb
const url = "mongodb+srv://gracechen56607:<password>@petfinder.h236iki.mongodb.net/?retryWrites=true&w=majority&appName=PetFinder";
const client = new MongoClient(url);