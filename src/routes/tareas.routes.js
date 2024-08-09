
import {Router} from "express"
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
router.post('/', agregarTarea);
router.put('/:id', editarTarea);
router.delete('/:id', eliminarTarea);
export default  router;
