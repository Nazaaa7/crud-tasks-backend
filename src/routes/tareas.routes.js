
import {Router} from "express"

import { validations } from "../validations/tasks.validations.js"
import {  applyValidations } from "../validations/applyValidations.js";
import {
  obtenerTareas,
  obtenerTarea,
  agregarTarea,
  editarTarea,
  eliminarTarea
} from "../controllers/tasks.controller.js";

const router = Router();

router.get('/', obtenerTareas);
router.get('/:id', obtenerTarea);
router.post('/',validations, applyValidations, agregarTarea);
router.put('/:id', editarTarea);
router.delete('/:id', eliminarTarea);

export   {router};
