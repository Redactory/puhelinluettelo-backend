require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const Person = require('./models/person');

morgan.token('body', function(req, res) {
  if (req.body.name || req.body.number) {
    return JSON.stringify(req.body);
  }

	return;
});

app.use(bodyParser.json());
app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms :body')
);
app.use(cors());
app.use(express.static('build'));

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})
  
app.get('/api/persons', (req, res) => {
  let persons = [];

  Person.find({}).then(result => {
    result.forEach(person => {
      persons.push(person.toJSON());
    })

    res.json(persons);
  })
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
    response.status(404).send({error: "Poistettavaa henkilöä ei löytynyt!"});
  }
})
  
app.post('/api/persons', (request, response) => {
  const newPerson = request.body;

  if (!newPerson.name || !newPerson.number) {
    response.status(400).send({error: "Uuden henkilön nimi tai numero puuttuu!" });
  }

  const personExists = persons.find(person => person.name === newPerson.name);

  if (personExists) {
    response.status(400).send({error: "Luotava henkilö on jo olemassa järjestelmässä!"});
  }

  const max = 1000000000;
  const id = Math.floor(Math.random()*max);
  newPerson["id"] = id;
  persons.push(newPerson);

  response.status(201).send(newPerson);
})


const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})