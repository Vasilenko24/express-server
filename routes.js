let cards = [
    {id: '1', name: 'First Card', status: 'todo', priority: '2'},
    {id: '2', name: 'Second Card', status: 'progress', priority: '5'}
]
function routes (app) {

app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/cards', (req, res) => {

    res.send(cards)
})
app.post('/card', (req, res) => {
    const card = req.body
    cards.push({id: Math.random().toString(), ...card})
    res.send(cards)
})
app.patch('/cards/:cardId', (req, res) => {
    const card = req.body
    const cardId = req.params.cardId
    cards = cards.map(el => el.id === cardId ? ({ id: cardId, ...card }) : el)
    res.send(cards)
})

app.delete('/cards/:cardId', (req, res) => {
    const cardId = req.params.cardId
    cards = cards.filter(el => el.id !== cardId)
    res.send(cards)
})
}

module.exports = routes
