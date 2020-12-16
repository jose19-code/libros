const mongoose = require('mongoose')
const {
    Schema
} = mongoose

const LectorSchema = new Schema({
    nombres: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    identificacion: {
        type: String,
        required: true
    },
    domicilio: {
        type: String,
        required: true
    }
})

module.exports = LectorSchema