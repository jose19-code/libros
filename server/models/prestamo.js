const mongoose = require('mongoose')
const LibroSchema = require("./libro");
const LectorSchema = require("./lector");
const {
    Schema
} = mongoose

const PrestamoSchema = new Schema({
    libro: LibroSchema,
    lector: LectorSchema,
    fecha_prestamo: {
        type: Date,
        required: true
    },
    fecha_devolucion: {
        type: Date,
        required: true
    },
    estado_devuelto: {
        type: Boolean,
        required: true
    }
})

module.exports = PrestamoSchema