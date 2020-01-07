const router = require ('express').Router()

const db = require ('../models/workout1.js')
const path = require ('path')

router.get('/api/alltransaction', function (request, response){
    db.find(({})).then(function(records){
        response.json(records)
    })
    .catch( function (error) {
        response.send(error)
    })
})

router.post('/api/newworkout', function (request, response){

    db.create((request.body)).then(function(records){
        console.log(records)
        response.json(records)
    })
    .catch( function (error){
        response.send(error)
    })
})

router.put('/api/addexercise/:id', function (request, response){
    console.log(request.params.id, request.body)
    db.findByIdAndUpdate(
         request.params.id,

     {'$push':{'exercise':request.body}}).then(function(records){
        console.log(records)
        response.json(records)
    })
    .catch( function (error){
        response.send(error)
    })
})

router.get('/', function (request, response){

    response.sendFile(path.join(__dirname, '../public/index.html'))
})


module.exports = router