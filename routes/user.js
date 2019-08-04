const express = require('express');
const router = express.Router();
const dataSource = require('../lib/dataSource.json');

router.get('/', (req, res) =>{
    res.json({
        success: true,
        users:  dataSource
    });
});

router.get('/:id', (req, res) =>{
    const {id} = req.params;
    const user = dataSource.find(user=> user.id > 1);

    if(user){
        res.json({
            success: true,
            user
        });
    } else {
        res.json({
            success: false,
            message: `No hay ningun usuario con el id ${id}`
        });
    }
});

router.post('/', (req, res) =>{
    const {name = '', username = ''} = req.body;
    const users = dataSource
    .filter(user => name === '' || user.name.indexOf(name) !== -1)
    .filter(user => username === '' || user.username.indexOf(username) !== -1);

    res.json({
        success: true,
        users
    });
});

module.exports = router;