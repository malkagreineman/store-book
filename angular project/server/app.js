
const path = require('path');
const fs = require('fs');
const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const basePath = path.join(__dirname + "/dist");
var cors = require('cors');
app.use(cors());
app.get(`/`, (req, res) => {
    let linkList = "";
    let resPage = fs.readFileSync("links.html", "utf-8");
    console.log(resPage);
    fs.readdir(basePath, (err, files) => {
        files.forEach((file) => {
            linkList += `<li><a href="/${file}" target="blank">${file}</a></li>`;
        })
        res.send(resPage.replace("placeHolder", linkList));
    });
});


fs.readdir(basePath, (err, files) => {
    files.forEach((file) => {
        app.use(express.static(`${basePath}/${file}`));
        app.get(`/${file}`, (req, res) => {
            res.sendFile(`${basePath}/${file}/index.html`);
        });
    })
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/api/register", (req, res) => {
    console.log("aaa");
    let currentList = require("./person.json");
    console.log(req.body);
        currentList.push(req.body)
        fs.writeFileSync("person.json", JSON.stringify(currentList));
        res.status(201).send(JSON.stringify(currentList));
})

app.post("/api/login", (req, res) => {
     let users = require("./person.json");
     let allUser = JSON.parse(JSON.stringify(users));
    let myallUser=allUser.find(element => element['userName'] == req.body.userName && element['userPassword'] == req.body.userPassword );
     if (myallUser)
         res.status(201).send(JSON.stringify(req.body));
     else res.status().send(null);
 })

// curl -v -X POST -H "Content-type: application/json" -d "{\"Id\":\"207322579\", \"age\":\"12\",\"name\":\"malky\", \"isMale\":\"true\",\"country\":\"Israel\" }" http://localhost:3500/api/person
// curl -v -X POST -H "Content-type: application/json" -d "{\"name\":\"malky\"}" http://localhost:3500/api/person


const port = process.env.PORT || 3500;
app.listen(port, () => { console.log(`OK`); });