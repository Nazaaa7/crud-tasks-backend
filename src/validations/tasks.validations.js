
import { validationResult } from "express-validator";

const controlador = (req, res) => {
    const errorres = validationResult(req)
    if (!errorres.isEmpty()){
        return res.status(400).json(errorres);
    }
    res.status(200).send("tarea creada correctamente")
}