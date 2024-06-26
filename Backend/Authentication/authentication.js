const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const { AuthenticationErrors }= require('./authenticationErrors');

const url = "mongodb+srv://gracechen56607:goweekend3210@petfinder.h236iki.mongodb.net/?retryWrites=true&w=majority&appName=PetFinder";
const client = new MongoClient(url);

// HELPER FUNCTIONS
async function userExists(users, username){
    const document = await users.findOne({username: username});
    if(document === null){
        return false;
    }
    return true;
}

async function getUser(users, username){
    const document = await users.findOne({username: username});
    return document;
}

async function encryptPassword(password) {
    const saltRounds = 10;
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, saltRounds, function (err, hash) {
            if (err) {
                reject(err);
            } else {
                resolve(hash);
            }
        });
    });
}

async function verifyPassword(inputPassword, hashedPassword){
    return new Promise((resolve, reject) => {
        bcrypt.compare(inputPassword, hashedPassword, (err, result) => {
            if (err) {
                reject(err);
            }
            else{
                console.log(result);
                resolve(result);
            }
        });
    });
}

// MAIN FUNCTIONS

async function verifyUser(username, password){
    await client.connect();
    const database = client.db("users");
    const users = database.collection("users");
    const userExist = await userExists(users, username);
    if(!userExist){
        console.log(AuthenticationErrors.userDoesNotExist);
        return;
    }
    const user = await getUser(users, username);
    const passwordValid = await verifyPassword(password, user.password);
    console.log(passwordValid);
    if(passwordValid){
        console.log("valid username and password");
    }
    else{
        console.log(AuthenticationErrors.invalidPassword);
    }
}

async function createUserEntry(username, password){
    await client.connect();
    const database = client.db("users");
    const users = database.collection("users");
    const userExist = await userExists(users, username);
    if(userExist){
        console.log(AuthenticationErrors.userAlreadyExists);
        return;
    }
    const hashedPassword = await encryptPassword(password);
    const user = {username : username, password : hashedPassword};
    await users.insertOne(user);
    await client.close();
}

module.exports = {
    createUserEntry,
    verifyUser,
}