const mongoose = require('mongoose')
const Autor = mongoose.model('Autor', require('../models/autor'))

const autorController = {}

autorController.getAutores = async (req, res) => {
    const autores = await Autor.find()
    res.json({status: 'Autores consultados', data: autores})
}

autorController.crearAutor = async (req, res) => {
    const autor = new Autor({
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        fecha_nacimiento: req.body.fecha_nacimiento,
        nacionalidad: req.body.nacionalidad
    });
    await autor.save();
    res.json({status: 'Autor creado', data: autor});
}

autorController.actualizarAutor = async (req, res) => {
    let autor = await Autor.findById(req.params.id)
    autor.nombres = req.body.nombres
    autor.apellidos = req.body.apellidos
    autor.fecha_nacimiento = req.body.fecha_nacimiento
    autor.nacionalidad = req.body.nacionalidad
    await autor.save();
    res.json({status: 'Autor actualizado', data: autor});
}

autorController.borrarAutor = async (req, res) => {
    const autor = await Autor.findById(req.params.id)
    await autor.delete();
    res.json({status: 'Autor borrado'});
}

autorController.getAutor = async (req, res) => {
    const autor = await Autor.findById(req.params.id)
    res.json({status: 'Autor consultado', data: autor})
}

module.exports = autorController