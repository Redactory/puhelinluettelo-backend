const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

let persons = [
    {
      "name": "Arto Hellas",
      "number": "040-123456",
      "id": 1
    },
    {
      "name": "Ada Lovelace",
      "number": "39-44-5323523",
      "id": 2
    },
    {
      "name": "Dan Abramov",
      "number": "12-43-234345",
      "id": 3
    },
    {
      "name": "Mary Poppendieck",
      "number": "39-23-6423122",
      "id": 4
    }
  ]

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})
  
app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find(element => element.id === id);

  if (person) {
    res.json(person);
  } else {
    res.status(404).end();
  }
})

app.get('/info', (req, res) => {
  const currentDate = new Date();
  res.send(`<p>Phonebook has info for ${persons.length} people</p> <p>${currentDate}<p>`);
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id);
  let index = -1;
  persons.find(element => {    
    if (element.id === id) {
      index = persons.indexOf(element);
    }
  });  

  if (index >= 0 && index < persons.length) {
    persons.splice(index, 1);
    response.status(204).end();
  } else {
    response.status(404).end();
  }
})
  
app.post('/api/persons', (request, response) => {
  const newPerson = request.body;
  const max = 1000000000;
  const id = Math.floor(Math.random()*max);
  newPerson["id"] = id;
  persons.push(newPerson);

  response.status(201).end();
})


const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})