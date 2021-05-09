
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('../../Schema/schemas').User
const route = require('express').Router();


// To get all users

route.get('/', (req, res) => {
    User.findAll().then((users) => {
        res.status(201).send(users)
    })
});

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

route.post('/register', async (req, res) => {

    console.log(req.body)

    const { username, password } = req.body

    const hashedPassword = await bcrypt.hash(password, 12)
        
    try {

       /*  if(hashedPassword) */

        User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username,
            password: hashedPassword,
        }).then((user) => {
            res.status(201).send({
                Success: 'User created',
                newUser: user
            })

            // for loginning 

            /* let passEntered = 'qwerthj'
            let hashed = '$2a$12$YehFqN3CxdSL7SdubQX.K.R7.aiegfvSpUElhM8O51p3GIN1PLl0a'

            bcrypt.compare(passEntered, hashed, (err, isMatch) => {
                if (err) {
                    throw err
                  } else if (!isMatch) {
                    console.log("Password doesn't match!")
                  } else {
                    console.log("Password matches!")
                  }
            }) */
        })
        
    } catch(err) {
        res.status(404).send({err})
    }
});



// To delete user

route.delete('/:id', (req, res) => {
    User.destory({
        where: { id: req.params.id }
    })
    res.status(201).send('user delete')
})

// to update user

route.put('/:id/updateProperty', (req, res) => {

    if( req.params.updateProperty === null || undefined || ' ' ) {
        res.status(404).send('User must enter info here')
    }

    if( req.params.updateProperty === 'firstName') {
        User.update({ firstName: req.body.firstName }, {where: { id: req.params.id } })
        res.status(201).send('updated firstname');
    }

    if( req.params.updateProperty === 'lastName') {
        User.update({ lastName: req.body.lastName }, {where: { id: req.params.id } })
        res.status(201).send('updated lastname')
    }

    if( req.params.updateProperty === 'username') {
        User.update({ username: req.body.username }, {where: { id: req.params.id } })
        res.status(201).send('updated username')
    }

    if( req.params.updateProperty === 'password') {
        User.update({ password: req.body.password }, {where: { id: req.params.id } })
        res.status(201).send('updated password')
    }

})

exports = module.exports = route
