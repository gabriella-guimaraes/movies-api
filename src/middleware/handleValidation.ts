import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

export const validate = (req: Request, res: Response, next: NextFunction) => {

    const errors = validationResult(req);

    if(errors.isEmpty()) {
        return next()
    } 

    // se não houverem erros, a validação continua
    const extractedErros: object[] = [];

    errors.array().map(err => {  
        if (err.type === 'field') {
            extractedErros.push({ [err.path]: err.msg })
        }
    })

    return res.status(422).json({
        errors: extractedErros
    });
}