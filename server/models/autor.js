const mongoose = require('mongoose')
const {
    Schema
} = mongoose

const AutorSchema = new Schema({
    nombres: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    fecha_nacimiento: {
        type: Date,
        required: true
    },
    nacionalidad: {
        type: String,
        required: true
    }
})

module.exports = AutorSchema