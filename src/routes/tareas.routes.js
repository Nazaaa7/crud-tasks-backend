
import {Router} from "express"
import { body } from "express-validator";
import {
  obtenerTareas,
  obtenerTarea,
  agregarTarea,
  editarTarea,
  eliminarTarea
} from "../controllers/tasks.controller.js";
import { appyValidaciones } from "../validations/applyValidations.js";

const router = Router();

router.get('/', obtenerTareas);
router.get('/:id', obtenerTarea);
router.post('/', body("title").notEmpty().withMessage("El titulo es obligatorio"), appyValidaciones,agregarTarea);
router.put('/:id', editarTarea);
router.delete('/:id', eliminarTarea);

export default  router;
