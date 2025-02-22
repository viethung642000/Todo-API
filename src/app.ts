import express from "express";
import { Request, Response, NextFunction } from 'express';
import { initializeDatabase } from "./infrastructure/database/dataSource";
import taskRoutes from "./presentation/routes/taskRoutes";
import { setupSwagger } from "./config/swagger";
import { taskProfile } from "./infrastructure/mappers/taskMapper"; // Đăng ký mapper

const isTestEnv = process.env.NODE_ENV === "test";
const app = express();
app.use(express.json());

// Đăng ký Swagger
setupSwagger(app);

// Import routes
app.use("/api", taskRoutes);

if (!isTestEnv) {
  initializeDatabase()
    .then(() => console.log("Database initialized successfully"))
    .catch((err) => console.error("Database initialization failed", err));
}

export default app;
