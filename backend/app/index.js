const express = require('express')
const app = express()
const port = 3000
const { Mensagem } = require('./models')

// app.get('/', async (req, res) => {
//    const mensagem = await Mensagem.create({nome:"manoel", mensagem:"teste 3"})
//    res.json(mensagem)
// })

app.get('/mensagem', async (req, res) => {
    const mensagens = await Mensagem.findAll()
    res.json(mensagens)
}); 

app.post('/mensagem', async (req, res) => {
    const {nome, mensagem} = req.body
    const msg = await Mensagem.create({nome, mensagem})
    res.json(msg)
}); // Criar

app.get('/mensagem/:id', async (req, res) => {
    const mensagem = Mensagem.findByPk(req.params.id)
    res.json(mensagem)
}); //Buscar

app.put('/mensagem/:id', async (req, res) => {
    const id = req.params.id
    const {nome, mensagem} = req.body
    const msg = await Mensagem.update({nome, mensagem}, {
        where: {
            id
        }
    })
    res.json(msg)
}); //Editar
app.delete('/mensagem/:id', (req, res) => {
    const id = req.params.id
    Mensagem.destroy({
        where: {
            id: id
        }
    })
});

app.listen(port, () => {
    console.log(`App running on Port ${port}`)
})