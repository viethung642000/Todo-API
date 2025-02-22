import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Task API",
      version: "1.0.0",
      description: "API Task theo Clean Architecture",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Local Server",
      },
    ],
  },
  apis: ["src/presentation/routes/*.ts"], // Quét file route
};

// Tạo Swagger Docs
const swaggerDocs = swaggerJsdoc(swaggerOptions);

// Hàm đăng ký Swagger vào app
export const setupSwagger = async (app: Express) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
  console.log("Swagger docs available at http://localhost:3000/api-docs");
};
