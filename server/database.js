const mongoose = require('mongoose')

const uri = 'mongodb://localhost/biblioteca'

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(db => console.log('Base de datos conectada.'))
    .catch(err => console.error(err))

module.exports = mongoose