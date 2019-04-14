import * as fs from 'fs';

var user_data = fs.readFileSync('./userData.txt');
var posts = fs.readFileSync('./posts.txt');

function addToUserData (pFirstName, pLastName, pEmail, pPassword, pBirth) {
    nuser = {fname:pFirstName, lname:pLastName,emailLogin:pEmail, password:pPassword, birth:pBirth};
    nuser.push(nuser);
    fs.appendFile('./usersData.txt', nuser, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}

function addToPosts (email, value, apr, time) {
    var npost = {emailLogin:email, ammount:value, rate:apr, nMonths:time};
    posts.push(npost);
    fs.appendFile('./posts.txt', npost, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}