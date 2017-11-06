var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var template = require('jade').compileFile(__dirname + '/form.jade')

var db

app.use(express.static('public'))
app.use(bodyParser.json())
const MongoClient = require('mongodb').MongoClient


MongoClient
    .connect('mongodb://enzzo:mb15405322@ds243055.mlab.com:43055/crudmean', (err, database)=>{
        if (err) return console.log('Error en db: ', err)

        db = database
        app.listen(8000, ()=>{
            console.log('Funcionando')
        })
    })
    
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
    db.collection('personas').find().toArray((err, result)=>{
        if (err) return console.log('error en recuperacion: ', err)
        
        console.log('registros: ', result)
        let html = template ({result:result}, {title: 'maver'})
        res.send(html)
    })
})

app.post('/nombres', (req, res) => {
    db.collection('personas').save(req.body, (err, result)=>{
        if (err) return console.log('error: ', err)
        
        console.log('se guardo: ', req.body)
        res.redirect('/')
    })
});

app.put('/update', function(req, res) {
    db.collection('personas')
    .findOneAndUpdate
    ({'name': 'python'},
    {$set: {
        name: req.body.name,
        apellido: req.body.apellido
    }},
    {sort: {_id: -1}},
    (err, result)=>{
        if (err) console.log('error upda', err)
        console.log('se cambio')
        res.send(result)
    })
});