const mongoose = require('mongoose');

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
        name: String,
        number: String,
        id: Number
    })

    personSchema.set('toJSON', {
        transform: (document, returnedObject) => {
            returnedObject.id = returnedObject.id.toString();
            delete returnedObject._id;
            delete returnedObject.__v;
        }
    })

module.exports = mongoose.model('Person', personSchema);