const express = require('express')
const router = express.Router()

const prestamoController = require('../controllers/prestamoController')

router.get('/', prestamoController.getPrestamos)
router.post('/', prestamoController.crearPrestamo)
router.put('/:id', prestamoController.actualizarPrestamo)
router.delete('/:id', prestamoController.borrarPrestamo)
router.get('/:id', prestamoController.getPrestamo)

module.exports = router