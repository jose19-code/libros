const express = require('express')
const router = express.Router()

const libroController = require('../controllers/libroController')

router.get('/', libroController.getLibros)
router.post('/', libroController.crearLibro)
router.put('/:id', libroController.actualizarLibro)
router.delete('/:id', libroController.borrarLibro)
router.get('/:id', libroController.getLibro)

module.exports = router