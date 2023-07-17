// Create web server 
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const comments = require('./comments');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// GET comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// GET comment by id
app.get('/comments/:id', (req, res) => {
    let id = req.params.id;
    let comment = comments.find(comment => comment.id === id);
    res.json(comment);
});

// POST comment
app.post('/comments', (req, res) => {
    let comment = req.body;
    comments.push(comment);
    res.json(comment);
});

// PUT comment
app.put('/comments/:id', (req, res) => {
    let id = req.params.id;
    let comment = req.body;
    let index = comments.findIndex(comment => comment.id === id);
    comments[index] = comment;
    res.json(comment);
});

// DELETE comment
app.delete('/comments/:id', (req, res) => {
    let id = req.params.id;
    let index = comments.findIndex(comment => comment.id === id);
    comments.splice(index, 1);
    res.json(comments);
});

// Create web server
app.listen(port, () => console.log(`Server is listening on port ${port}!`));