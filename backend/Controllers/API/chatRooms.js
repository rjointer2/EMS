
const ChatRoom = require('../../Schema/schemas').ChatRoom;
const route = require('express').Router();

// get all chatrooms

route.get('/', (req, res) => {
    ChatRoom.findAll().then((chatrooms) => {
        res.status(201).send(chatrooms)
    }).catch((err) => {
        res.status(500).send({
            error: `Can't send chatrooms because ${err}`
        })
    })
});

// create new chatroom

route.post('/', (req, res) => {
    ChatRoom.create({
        post: req.body.post,
        owner: req.body.owner,
        name: req.body.name
    }).then((chatroom) => {
        res.status(201).send(chatroom)
    }).catch((err) => {
        res.status(500).send({
            error: `Can't post chatrooms because ${err}`
        })
    })
})

// get a chatroom by id

route.get('/:id', (req, res) => {
    ChatRoom.findByPk(req.params.id).then((chatroom) => {
        res.status(201).send(chatroom)
    }).catch((err) => {
        res.status(404).send({
            error: `Can't get chatroom because ${err}`
        })
    })
})

// delete chat room

route.delete('/:id', (req, res) => {
    
    ChatRoom.destroy({ where: { id: req.params.id }});
    res.status(201).send('deleted user')
});

// update chat room name by id 

route.put('/:id/updateProperty', (req, res) => {

    if(req.params.updateProperty === undefined || null || ' ' ) {
        res.status(400).send({
            error: 'check how the request was sent'
        })
    }

    if(req.params.updateProperty === 'name' ) {
        ChatRoom.update({ name: req.body.name })
    }

})


exports = module.exports = route

