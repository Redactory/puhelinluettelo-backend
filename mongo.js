const mongoose = require('mongoose')

if ( process.argv.length<3 ) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://Teemu:${password}@puhelinluettelodb-hlufo.mongodb.net/puhelinluetteloDB?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
  id: Number,
})

const Person = mongoose.model('Person', personSchema)

name = process.argv[3];
number = process.argv[4];

if (!name && !number) {
    Person.find({}).then(result => {
        console.log("phonebook:");
        result.forEach(person => {
          console.log(`${person.name} ${person.number}`);
        })
        mongoose.connection.close();
      })
} else {
    const person = new Person({
        name: name,
        number: number
    })

    person.save().then(response => {
        console.log(`added ${name} number ${number} to phonebook`);
        mongoose.connection.close();
    })
}
