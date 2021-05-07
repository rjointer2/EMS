
const User = require('../../Schema/schemas').User
const route = require('express').Router();

// To get all users

route.get('/', (req, res) => {
    User.findAll().then((users) => {
        res.status(201).send(users)
    })
})

// To get user by id

route.get('/id', (req, res) => {
    User.findByPk(req.params.id).then((user) => {
        res.status(201).send(user)
    }).catch((err) => {
        res.status(500).send({
            error: err
        })
    })
});

// To create new user

route.post('/', (req, res) => {
    User.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        password: req.body.password,
    }).then((user) => {
        res.status(201).send(user);
        console.log(user)
    })
});

// To delete user

route.delete('/:id', (req, res) => {
    User.destory({
        where: { id: req.params.id }
    })
    res.status(201).send('user delete?')
})

// to update user

route.put('/:id')

// error handles
