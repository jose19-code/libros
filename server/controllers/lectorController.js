const mongoose = require('mongoose')
const Lector = mongoose.model('Lector', require('../models/lector'))

const lectorController = {}

lectorController.getLectores = async (req, res) => {
    const lectores = await Lector.find()
    res.json({status: 'Lectores consultados', data: lectores})
}

lectorController.crearLector = async (req, res) => {
    const lector = new Lector({
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        identificacion: req.body.identificacion,
        domicilio: req.body.domicilio
    });
    await lector.save();
    res.json({status: 'Lector creado', data: lector});
}

lectorController.actualizarLector = async (req, res) => {
    let lector = await Lector.findById(req.params.id)
    lector.nombres = req.body.nombres
    lector.apellidos = req.body.apellidos
    lector.identificacion = req.body.identificacion
    lector.domicilio = req.body.domicilio
    await lector.save();
    res.json({status: 'Lector actualizado', data: lector});
}

lectorController.borrarLector = async (req, res) => {
    const lector = await Lector.findById(req.params.id)
    await lector.delete();
    res.json({status: 'Lector borrado'});
}

lectorController.getLector = async (req, res) => {
    const lector = await Lector.findById(req.params.id)
    res.json({status: 'Lector consultado', data: lector})
}

module.exports = lectorController