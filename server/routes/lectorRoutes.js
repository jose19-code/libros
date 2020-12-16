const express = require('express')
const router = express.Router()

const lectorController = require('../controllers/lectorController')

router.get('/', lectorController.getLectores)
router.post('/', lectorController.crearLector)
router.put('/:id', lectorController.actualizarLector)
router.delete('/:id', lectorController.borrarLector)
router.get('/:id', lectorController.getLector)

module.exports = router