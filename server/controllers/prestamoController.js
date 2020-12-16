const mongoose = require('mongoose')
const Prestamo = mongoose.model('Prestamo', require('../models/prestamo'))
const Libro = mongoose.model('Libro', require('../models/libro'))
const Lector = mongoose.model('Lector', require('../models/lector'))

const prestamoController = {}

prestamoController.getPrestamos = async (req, res) => {
    const prestamos = await Prestamo.find()
    res.json({status: 'Prestamos consultados', data: prestamos})
}

prestamoController.crearPrestamo = async (req, res) => {
    const libro = await Libro.findById(req.body.libro)
    const lector = await Lector.findById(req.body.lector)
    const prestamo = new Prestamo({
        libro: libro,
        lector: lector,
        fecha_prestamo: req.body.fecha_prestamo,
        fecha_devolucion: req.body.fecha_devolucion,
        estado_devuelto: req.body.estado_devuelto
    });
    await prestamo.save();
    res.json({status: 'Prestamo creado', data: prestamo});
}

prestamoController.actualizarPrestamo = async (req, res) => {
    const libro = await Libro.findById(req.body.libro)
    const lector = await Lector.findById(req.body.lector)
    let prestamo = await Prestamo.findById(req.params.id)
    prestamo.libro = libro
    prestamo.lector = lector
    prestamo.fecha_prestamo = req.body.fecha_prestamo
    prestamo.fecha_devolucion = req.body.fecha_devolucion
    prestamo.estado_devuelto = req.body.estado_devuelto
    await prestamo.save();
    res.json({status: 'Prestamo actualizado', data: prestamo});
}

prestamoController.borrarPrestamo = async (req, res) => {
    const prestamo = await Prestamo.findById(req.params.id)
    await prestamo.delete();
    res.json({status: 'Prestamo borrado'});
}

prestamoController.getPrestamo = async (req, res) => {
    const prestamo = await Prestamo.findById(req.params.id)
    res.json({status: 'Prestamo consultado', data: prestamo})
}

module.exports = prestamoController