// create web server

const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

// use static files
app.use(express.static('public'));

// use json
app.use(express.json());

// get comments
app.get('/comments', (req, res) => {
    fs.readFile('comments.json', (error, data) => {
        if (error) {
            res.status(500).send('Error reading comments.json');
            return;
        }
        res.json(JSON.parse(data));
    });
});

// add comment
app.post('/comments', (req, res) => {
    const comment = req.body;
    fs.readFile('comments.json', (error, data) => {
        if (error) {
            res.status(500).send('Error reading comments.json');
            return;
        }
        const comments = JSON.parse(data);
        comments.push(comment);
        fs.writeFile('comments.json', JSON.stringify(comments), (error) => {
            if (error) {
                res.status(500).send('Error writing comments.json');
                return;
            }
            res.send('Comment added');
        });
    });
});

// start the server
app.listen(3000, () => {
    console.log('Server started');
});