import { Router } from "express";
import { TaskController } from "../controllers/taskController";
import { CreateTaskDto } from "../../application/dtos/createTaskDto";
import { validationMiddleware } from "../../application/common/validationException";

const router = Router();
const URL_BASE = "/task";

/**
 * @swagger
 * /api/task/create:
 *   post:
 *     summary: Tạo Task mới
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "New Task"
 *               startDate:
 *                 type: string
 *                 format: date
 *               endDate:
 *                 type: string
 *                 format: date
 *     responses:
 *       201:
 *         description: Task đã được tạo
 */
router.post(
  URL_BASE + "/create",
  validationMiddleware(CreateTaskDto),
  (req, res, next) => {
    TaskController.createTask(req, res).then(() => next());
  }
);

/**
 * @swagger
 * /api/task/get-all:
 *   get:
 *     summary: Lấy danh sách Task
 *     description: Trả về danh sách tất cả các Task trong hệ thống.
 *     responses:
 *       200:
 *         description: Thành công
 */
router.get(URL_BASE + "/get-all", TaskController.getTasks);

export default router;
