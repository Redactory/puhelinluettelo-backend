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

// ETUSIVU
app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})
  
// YHTEYSTIETO LISTAN HAKEMINEN
app.get('/api/persons', (req, res, next) => {
  let persons = [];

  Person.find({}).then(result => {
    result.forEach(person => {
      persons.push(person.toJSON());
    })

    res.json(persons);
  }).catch(error => next(error))
})

const errorHandlerForPersonListing = (error, request, response, next) => {
  console.error(error);
  
  return response.status(500).send({message: 'Palvelimella tapahtui virhe josta syystä yhteystietoja ei voi listata.'})
};

app.use(errorHandlerForPersonListing);

// HENKILÖN HAKEMINEN ID:LLÄ
app.get('/api/persons/:id', (req, res, next) => {
  const id = Number(req.params.id);
  Person.find({id: id}).then(result => {
    if (result.length > 0) {
      res.json(result);
    } else {
      res.status(404).send({message: 'Haettua henkilöä ei löydetty tietokannasta'});
    }
  }).catch(error => {
    next(error);
  });
})

const errorHandlerForPersonFetching = (error, request, response, next) => {
  console.error(error);
  
  if (isNaN(error.status)) {
    return response.status(400).send({message: 'Annettu henkilö-ID ei ole oikean muotoinen'})
  }

  if (!isNaN(error.status)) {
    const status = Number(error.status);
    response.status(status).send({ message: error.message });
  }

  next(error);
};

app.use(errorHandlerForPersonFetching);

// INFO-SIVU
app.get('/info', (req, res, next) => {
  const currentDate = new Date();

  Person.find({}).then(result => {
    res.send(`<p>Phonebook has info for ${result.length} people</p> <p>${currentDate}<p>`);
  })
  .catch(error => next(error))
})

const errorHandlerForInfo = (error, request, response, next) => {
  console.error(error);
  
  return response.status(500).send('<h2>Yhteystietojen lukumäärän laskeminen ei onnistunut jostain syystä eikä sivua voi näyttää</h2>');
};

app.use(errorHandlerForInfo);

// OLEMASSA OLEVAN HENKILÖN POISTAMINEN
app.delete('/api/persons/:id', (request, response, next) => {
  if (request.params.id === 'undefined') {
    return response.status(400).send({message: "Tarjottu ID ei voi olla määrittelemätön. Yhteystieto on saatettu jo poistaa"});
  }

  if (isNaN(request.params.id)) {
    return response.status(400).send({message: "Tarjottu ID ei ole numero."});
  }

  const id = Number(request.params.id);

  Person.find({id: id}).then(result => {
    if (result.length > 0) {
      Person.deleteOne({"id": id}, ()=> {
        response.status(204).send(`${result[0].name} poistettiin listalta.`);
      });
    } else {
      throw {message: "Poistettava henkilö ei löytynyt!", status: 404};
    }
  })
  .catch(error => {
    next(error);
  });
})
  
// UUDEN HENKILÖN LISÄÄMINEN
app.post('/api/persons', (request, response) => {
  const newPerson = request.body;

  if (!newPerson.name || !newPerson.number) {
    return response.status(400).send({message: "Uuden henkilön nimi tai numero puuttuu!" });
  }

  Person.find({}).then(result => {
    const personExists = result.find(person => person.name === newPerson.name);

    if (personExists) {
      throw 'Luotava henkilö on jo olemassa järjestelmässä!';
    } else {
      const max = 1000000000;
      const id = Math.floor(Math.random()*max);
    
      const savedPerson = new Person({
        name: newPerson.name,
        number: newPerson.number,
        id: id
      });
    
      savedPerson.save().then(res => {
        return response.status(201).send(newPerson);
      });
    }
  })
  .catch(error => {
    next(error);
  })  
})

const errorHandler = (error, request, response, next) => {
  console.error(error);
  
  if (!isNaN(error.status)) {
    const status = Number(error.status);
    response.status(status).send({ message: error.message });
  } else {
    response.status(500).send({message: error.message})
  }

  next(error);
};

app.use(errorHandler);

// HENKILÖN NUMERON MUUTTAMINEN
app.put('/api/persons/:id', (request, response, next) => {
  if (isNaN(Number(request.params.id))) {
    throw {status: 400, message: 'Tarjottu ID ei ole oikean muotoinen (numero)'};
  }

  const id = Number(request.params.id);
  const personData = request.body;
  const person = {
    name: personData.name,
    number: personData.number
  }

  Person.findOneAndUpdate({id: id}, person, {new: true})
    .then(result => {
      response.json(result.toJSON());
    })
    .catch(error => next(error))
})

const numberUpdateErrorHandling = (error, request, response, next) => {
  console.error(error);
  
  if (!isNaN(error.status)) {
    const status = Number(error.status);
    response.status(status).send({ message: error.message });
  } else {
    response.status(500).send({message: error.message})
  }

  next(error);
};

app.use(numberUpdateErrorHandling);

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})