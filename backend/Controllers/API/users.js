
// Modules

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Routes

const User = require('../../Schema/schemas').User
const route = require('express').Router();


// Helper variable to assist with token creation
const JWT_TOKEN = 'b7cb34f77ddd9628812e15733201236be11fa087da2386eb97e56f58adfb9e602c176dbe370a2091938a151850cdc420a251bb3dec7512fd2189c934c2d93676'

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

route.post('/login', async(req, res) => {

    const user = await User.findOne({ where: {username: req.body.username} })

    // Comparers for the password 
    const passwordEntered = req.body.password
    const hashedPassword = user.password

    bcrypt.compare(passwordEntered, hashedPassword, (err, isMatch) => {

        if(err) throw err
        if(!isMatch) console.log('Not a match')

        // username and password is a match
        if(isMatch) {
            // creates token given payload into a JSON Web Token string payload - Payload to sign
            const token = jwt.sign({
                id: user.id, 
                un: user.username
            }, JWT_TOKEN);
            // We'll send the object with the JWT
            res.status(201).send({
                Success: 'Logged In!',
                userData: user,
                data: token
            })
        }

    })

});

route.post('/change-password', (req, res) => {
    
    // To change password you must have the correct token
    // we will destructe the token from the request


    // Ok so I'll wait for the front to have a login before starting the token auth

    const { token } = req.body
    const user = jwt.verify(token, JWT_TOKEN);

    console.log(user)
    res.status(201).send('ok')

})


// To create new user

route.post('/register', async (req, res) => {

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
