const express = require('express')
const app = express()

app.use(express.json())

let notas = [
  {
    "id": 1,
    "content": "Tengo que estudiar para una prueba",
    "important": true
  },

  {
    "id": 2,
    "content": "Voy a comprar pan",
    "important": false
  }

]


/* const app = http.createServer((request, response) => {
  response.writeHead(200, { 'content-type': 'application/json' })
  response.end(JSON.stringify(notas))
}) */

app.get('/', (req, res) => {
  res.send('<h1>Hola Mundo</h1>')
})

app.get('/api/notas', (req, res) => {
  res.json(notas)
})

app.get('/api/notas/:id', (req, res) => {
  const id = Number(req.params.id)
  const note = notas.find(note => note.id === id)

  if (note) {
    res.json(note)
  } else {
    res.status(404).end()
  }

})

app.delete('/api/notas/:id', (req, res) => {
  const id = Number(req.params.id)
  notas = notas.filter(note => note.id !== id)
  res.status(204).end()
})

app.post('/api/notas', (req, res) => {
  const note = req.body

  if (!note || !note.content) {
    return res.status(400).json({
      error: 'note.content is missing'
    })
  }

  const ids = notas.map(note => note.id)
  const maxId = Math.max(...ids)

  const newNote = {
    id: maxId + 1,
    content: note.content,
    important: typeof note.important !== 'undefined' ? note.important : false
  }

  notas = [...notas, newNote]

  res.json(newNote)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`El servidor esta corriendo en el puerto ${PORT}`)
})
