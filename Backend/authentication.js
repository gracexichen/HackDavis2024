const { MongoClient } = require('mongodb');

const url = "mongodb+srv://gracechen56607:goweekend3210@petfinder.h236iki.mongodb.net/?retryWrites=true&w=majority&appName=PetFinder";
const client = new MongoClient(url);

async function createUserEntry(username, password){
    await client.connect();
    const db = await client.db("users");
    const users = db.collection("users");
    const user = {username : username, password : password};
    const result = await users.insertOne(user);
    console.log(
        `${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`,
      );
    await client.close();
}

module.exports = {
    createUserEntry,
}