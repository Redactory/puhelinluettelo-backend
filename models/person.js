const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const url = process.env.MONGODB_URI;

mongoose
    .connect(url, {useNewUrlParser: true})
    .then(result => {
        console.log('Database connection successful');
    })
    .catch(error => {
        console.log('Error in forming connection with the database', error.message);
    })

    const personSchema = new mongoose.Schema({
        name: {
            type: String, 
            unique: true,
            minlength: 3
        },
        number: {
            type: String,
            minlength: 8
        },
        id: Number
    })

    personSchema.plugin(uniqueValidator);

    personSchema.set('toJSON', {
        transform: (document, returnedObject) => {
            returnedObject.id = returnedObject.id.toString();
            delete returnedObject._id;
            delete returnedObject.__v;
        }
    })

module.exports = mongoose.model('Person', personSchema);