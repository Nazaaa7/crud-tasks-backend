const express = require('express');
const router = express.Router();
const {
  obtenerTareas,
  obtenerTarea,
  agregarTarea,
  editarTarea,
  eliminarTarea
} = require('../controllers/tasks.controller');

router.get('/', obtenerTareas);
router.get('/:id', obtenerTarea);
router.post('/', agregarTarea);
router.put('/:id', editarTarea);
router.delete('/:id', eliminarTarea);
module.exports = router;
