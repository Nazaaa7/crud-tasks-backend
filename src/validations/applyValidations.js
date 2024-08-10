import { validationResult } from "express-validator"

 export const appyValidaciones = (req, res, next) =>{
    const errores = validationResult(req)
    if (!errores.isEmpty()){
        return res.status(400).json(errores)
    }
    next();
};
