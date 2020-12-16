const mongoose = require('mongoose')
const AutorSchema = require("./autor");
const {
    Schema
} = mongoose

const LibroSchema = new Schema({
    codigo: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    autor: AutorSchema,
    editorial: {
        type: String,
        required: true
    },
    fecha_edicion: {
        type: Date,
        required: true
    },
    numero_paginas: {
        type: Number,
        required: true
    },
    genero: {
        type: String,
        required: true
    },
    cantidad_disponible: {
        type: Number,
        required: true
    }
})

module.exports = LibroSchema