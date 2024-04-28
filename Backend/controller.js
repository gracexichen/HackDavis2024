const {createUserEntry} = require('./authentication');

function tester(req, res) {
    // Controller logic goes here
    res.send('Hello from tester!');
}

function addUser(req, res){
    console.log(req.body.username);
    console.log(req.body.password);
    createUserEntry(req.body.username, req.body.password);
    res.send("Should have logged the username/password");
}

// Export the controller function
module.exports = {
    tester,
    addUser,
};
