const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;

app.use(bodyParser.json());

app.use('/user', require('./routes/user'));


app.listen(PORT, () =>{
    console.log(`Servidor esta activo en http://localhost:${PORT}`);
})