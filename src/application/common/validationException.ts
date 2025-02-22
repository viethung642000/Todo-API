import { validate, ValidationError } from "class-validator";
import { Request, Response, NextFunction } from "express";
import { plainToInstance } from "class-transformer";

export const validationMiddleware = (DtoClass: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    // Chuyển đổi req.body thành instance của DTO
    const dtoInstance = plainToInstance(DtoClass, req.body);

    const errors: ValidationError[] = await validate(dtoInstance);

    if (errors.length > 0) {
      res.status(400).json({
        code: 400,
        message: "Validation failed",
        data: errors.map((err) => ({
          field: err.property,
          errors: Object.values(err.constraints || {}),
        })),
      });

      return;
    }

    next();
  };
};
