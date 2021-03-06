// Require Modules 

const path = require('path');
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const { validiateToken } = require('./Controllers/ulit/JWT');

// Invoked App

const app = express();

// PORT for Heroku and Localhost

const _PORT = process.env.PORT || 3000;

app.use(session({
  // session configs
  secret: 'secret-key',
  resave: false,
  // reducing server storage usage, or complying with 
  // laws that require permission before setting a cookie.
  saveUninitialized: false,
}));

// middleware that only parses json 
// and only looks at requests where the Content-Type header matches the type option

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/build')));
app.use(cookieParser())

if(process.env.NODE_ENV === 'production')
app.use(express.static(path.join(__dirname, "../client/build")));


app.get("/", validiateToken, (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

app.get("/home", validiateToken, (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  console.log(req.cookies)
});

app.get("/dashboard", validiateToken, (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

app.get("/chatroom", validiateToken, (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

app.get("/editprofile", validiateToken, (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

app.get("/tasks", validiateToken, (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

app.get("/schedule", validiateToken, (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});


// application routes 

let viewCount = 0



app.use('/app', require('./Controllers/app_routes').route)


app.listen( _PORT, () => {
    console.log(`connecting to the ${_PORT} port`)
})
