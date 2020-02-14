const express = require('express')
const app = express()
const port = 3001
const { Mensagem } = require('./models')
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
io.origins(['*'])
io.origins((origin, callback) => {
    if (origin === 'https://foo.example.com') {
      return callback('origin not allowed', false);
    }
    callback(null, true);
  });

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS")
    next()
  })



io.on('connection', (socket) =>{
    Mensagem.findAll({limit: 10,order: [['id', 'DESC']]}).then((mensagens) => {
        socket.emit('mensagens anteriores', mensagens)
    })
    console.log('a user is connected', socket.id)
    socket.on('cria mensagem', (data) => {
        const {nome, mensagem} = data
        Mensagem.create({nome, mensagem})
            .then(msg => {
                socket.broadcast.emit('mensagem criada', msg.dataValues)
            })
            .catch(error => {
                console.log({error: error})
            })
    })
  })

http.listen(port, () => {
    console.log(`App running on Port ${port}`)
})