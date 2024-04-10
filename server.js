const express = require('express');
const path = require('path');

const dir = path.join(__dirname);
const app = express();

app.use(express.static(path.join(dir, 'public')));
app.use('/main', express.static(path.join(dir, 'pages', 'main.html')));

app.route('/').get((req, res) => {
    res.redirect('/main');
});

app.route('/analytics').get((req, res) => {
    res.sendFile(path.join(dir, 'pages', 'analytics.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(dir, 'pages', 'error.html'));
});

app.listen(3000, () => {
    console.log('server is on');
});
