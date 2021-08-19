// The web server was created with the help of Colt Steeles videos on the topic as part of his Udemy course 'The Web Developer Bootcamp 2021'

// requires the express framework
const express = require('express');

// creates an express application, which provides us with a bunch of methods for the web server
const app = express();

let state = 1;

// the get() method routes HTTP GET requests to the specified path and allows us to respond with a HTTP response. The following route is the home page (localhost:3000).
app.get('/', (req, res) => {
    res.send('Welcome to this web server!')
})

// when visiting 'localhost:3000/show_value', the current value of the state variable is displayed on the page.
app.get('/show_value', (req, res) => {
    res.send(`<p>Current value of state: ${state}<p>`);
})

// when visiting 'localhost:3000/increase_value', the current value of the state variable is increased by 1.
app.get('/increase_value', (req, res) => {
    state++;
    res.send(`<p>State increased by 1<p>`);
})

// the following response is sent when 'localhost:3000' is followed by a path not defined in the above get methods.
app.get('*', (req, res) => {
    res.send('Invalid path');
})

// makes the application listen on port 3000 after node is initialized in the terminal.
app.listen(3000, () => {
    console.log('Listening on port 3000');
})