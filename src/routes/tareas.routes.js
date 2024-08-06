const express = require('express');
const router = express.Router();
const {
  obtenerTareas,
} = require('../controllers/tasks.controller');

router.get('/', obtenerTareas);
module.exports = router;
