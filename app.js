const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3001;

//Public Path, in this case, __dirname is the complete route where app.js is located
//permite servir archivos estaticos desde public
const publicPath = path.resolve(__dirname, './public');

//using static files, middleware
app.use( express.static(publicPath) );

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'));
});
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'));
});
app.listen(port, () => console.log(`Server running in port ${port}`));



