const {createUserEntry, verifyUser} = require('./Authentication/authentication');

function tester(req, res) {
    // Controller logic goes here
    res.send('Hello from tester!');
}

async function addUser(req, res){
    await createUserEntry(req.body.username, req.body.password);
    res.send("Should have logged the username/password");
}

async function authenticateUser(req, res){
    await verifyUser(req.body.username, req.body.password);
    res.send("User should have been verified");
}

// Export the controller function
module.exports = {
    tester,
    addUser,
    authenticateUser,
};
