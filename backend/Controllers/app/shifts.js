
const Shift = require('../../Schema/schemas').Shift;
const route = require('express').Router();

// get all the shifts 

route.get('/:id', (req, res) => {

    Shift.findByPk(req.params.id).then((shiftDetails) => {
        console.log(shiftDetails);
        res.status(201).json(shiftDetails)
    }).catch((err) => {
        console.log(err)
        res.status(500).json(err)
    })

})

route.post('/addshift', async (req, res) => {

    if( !req.body ) {
        console.log('The request was falsy')
        res.status(404).json({
            err: 'The request was falsy'
        })
        return false 
    }

    try {

        Shift.create({
            id: req.body.id,
            timeSchedule: req.body.timeSchedule,
            request: req.body.request,
            comments: req.body.comments,
            status: req.body.status,
            employeeID: req.body.employeeID
        }).then((newShift) => {
            res.status(201).json({
                success: 'Successful Request',
                shiftData: newShift
            })
        })
    

    } catch(err) {
        res.status(500).json({
            err: err
        })
    }

});


route.delete('/:id', (req, res) => {

    Shift.destroy({ where: { id: req.params.id }});
    res.status(201).json('deleted shift from sale')

})




route.put('/:id/updateProperty', (req, res) => {

    Shift.findByPk(req.params.id).then((shiftDetails) => {
        console.log(req.params.id + ' ?')
        console.log(req.params.updateProperty + ' this?')
        
        /* if(  ) {
            User.update({ firstName: req.body.firstName }, {where: { id: req.params.id } })
            res.status(201).json('updated firstname');
        } */

    })

})

exports = module.exports = route;