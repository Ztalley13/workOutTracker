var express = require ('express');
var mongoose = require ('mongoose');

var port = 8080

var app = express();

app.use(express.urlencoded({ extended: true }))

app.use(express.json())
mongoose.connect('mongodb://localhost/workout', {
    useNewUrlParser:true, 
    useFindAndModify:false
})

app.use(require('./routes'))
app.use(express.static('public'))

app.listen(port, function() {
console.log('port is working on 8080')
})

