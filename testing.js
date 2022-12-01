var database = [
    {
        username: "John",
        password: "pass"
    },
    {
        username: "Sasha",
        password: "123"
    },
    {
        username: "Sam",
        password: "888"
    },
    {
        username: "Peter",
        password: "tran"
    }
];
var newsfeed = [
    {
        username: "Bob",
        timeline: "well lets go try again and get whats we deserve"
    },
    {
        username: "Pat",
        timeline: "ready for the next trip"
    },
    {
        username: "saliou",
        timeline: "lorem ipsum dolor"
    }
]; 

var userNamePrompt = prompt("what is your username?");
var passwordPrompt = prompt("enter your password");

function isUserValid(user, pass) {
    for (var i=0; i < database.length; i++) {
        if (database[i].username === user && database[i].password === pass) {
            return true;
        }
    }
    return false;
}

function signIn(user, pass) {
    if (isUserValid(user, pass)) {
        console.log(newsfeed);
    } else {
        console.log("sorry, wrong username or password entered")
    }
}
signIn(userNamePrompt, passwordPrompt);