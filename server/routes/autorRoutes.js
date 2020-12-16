const express = require('express')
const router = express.Router()

const autorController = require('../controllers/autorController')

router.get('/', autorController.getAutores)
router.post('/', autorController.crearAutor)
router.put('/:id', autorController.actualizarAutor)
router.delete('/:id', autorController.borrarAutor)
router.get('/:id', autorController.getAutor)

module.exports = router