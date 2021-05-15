
// token authiencation functions

const { token, validiateToken } = require('../JWT');

// Modules

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Routes

const User = require('../../Schema/schemas').User
const route = require('express').Router();


// Helper variable to assist with token creation

// To get all users

route.get('/', (req, res) => {
    User.findAll().then((users) => {
        res.status(201).send(users)
    })
});

// To get user by id

route.get('/id', (req, res) => {
    // findById isn't a fn so we have to find by primary key
    User.findByPk(req.params.id).then((user) => {
        res.status(201).send(user)
    }).catch((err) => {
        res.status(500).send({
            error: err
        })
    })
});

// logging in Client should somehow be auth

route.post('/login', async (req, res) => {

    console.log('hi!!!')

    const user = await User.findOne({ where: {username: req.body.username} });

    if(!user) console.log('Not found user')


    // Comparers for the password 
    const passwordEntered = req.body.password
    const hashedPassword = user.password

    // after finding the user then there props id and username to make the token

    bcrypt.compare(passwordEntered, hashedPassword, (err, isMatch) => {

        // remember if the user's inputs exist, send an error

        if(err) throw err
        if(!isMatch) console.log('Not a match')

        // username and password is a match
        if(isMatch) {
            // creates token given payload into a JSON Web Token string payload - Payload to sign
            const accessToken = token(user)

            // sends cookies :: yummy
            // the middleware will validiate if able to go to page
            res.cookie("access-token", accessToken, {
                // 1 day til expires
                maxAge: 60*60*24,
            })

            // We'll send the object with the JWT
            res.status(201).send({
                Success: 'Logged In!',
                userData: user,
                data: accessToken
            })

        }

    })

});


route.get('/user', validiateToken, (req, res) => {
    res.send('hi')
    
})


// To create new user

route.post('/register', async (req, res) => {

    // IMPLEMENT THIS BELOW
    // after registeration, redirects user to log into page 

    // We'll destructe this request's body and take the password property
    const { username, password } = req.body
    // store it in a variable, and await for this action bcasue it is slow
    const hashedPassword = await bcrypt.hash(password, 12)
        
    try {

       /* err handles for signing up here, no same username, password  */

        User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username,
            password: hashedPassword,
            department: req.body.department,
            picture: req.body.picture,
            recovery: req.body.recovery,
            // send bool
            admin: req.body.admin

        }).then((user) => {
            res.status(201).send({
                Success: 'User created',
                newUser: user
            })
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
