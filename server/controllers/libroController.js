const mongoose = require('mongoose')
const Libro = mongoose.model('Libro', require('../models/libro'))
const Autor = mongoose.model('Autor', require('../models/autor'))

const libroController = {}

libroController.getLibros = async (req, res) => {
    const libros = await Libro.find()
    res.json({status: 'Libros consultados', data: libros})
}

libroController.crearLibro = async (req, res) => {
    const autor = await Autor.findById(req.body.autor)
    const libro = new Libro({
        codigo: req.body.codigo,
        nombre: req.body.nombre,
        autor: autor,
        editorial: req.body.editorial,
        fecha_edicion: req.body.fecha_edicion,
        numero_paginas: req.body.numero_paginas,
        genero: req.body.genero,
        cantidad_disponible: req.body.cantidad_disponible
    });
    await libro.save();
    res.json({status: 'Libro creado', data: libro});
}

libroController.actualizarLibro = async (req, res) => {
    const autor = await Autor.findById(req.body.autor)
    let libro = await Libro.findById(req.params.id)
    libro.codigo = req.body.codigo
    libro.nombre = req.body.nombre
    libro.autor = autor
    libro.editorial = req.body.editorial
    libro.fecha_edicion = req.body.fecha_edicion
    libro.numero_paginas = req.body.numero_paginas
    libro.genero = req.body.genero
    libro.cantidad_disponible = req.body.cantidad_disponible
    await libro.save();
    res.json({status: 'Libro actualizado', data: libro});
}

libroController.borrarLibro = async (req, res) => {
    const libro = await Libro.findById(req.params.id)
    await libro.delete();
    res.json({status: 'Libro borrado'});
}

libroController.getLibro = async (req, res) => {
    const libro = await Libro.findById(req.params.id)
    res.json({status: 'Libro consultado', data: libro})
}

module.exports = libroController