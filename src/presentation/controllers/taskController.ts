import { Request, Response } from "express";
import { CreateTaskUseCase } from "../../application/usecases/createTaskUseCase";
import { GetTasksUseCase } from "../../application/usecases/getTasksUseCase";
import { TaskRepositoryImpl } from "../../infrastructure/repositories/taskRepository";
import { plainToInstance } from "class-transformer";
import { CreateTaskDto } from "../../application/dtos/createTaskDto";
import { TaskMapper } from "../../infrastructure/mappers/taskMapper";
import { ApiResponse } from "../../application/common/apiResponse";
import {
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
  HTTP_STATUS_CODES,
} from "../../application/common/constants";

const taskRepository = new TaskRepositoryImpl();
const createTaskUseCase = new CreateTaskUseCase(taskRepository);
const getTasksUseCase = new GetTasksUseCase(taskRepository);

export class TaskController {
  static async createTask(req: Request, res: Response) {
    // Đảm bảo req.body là object
    const taskDto = plainToInstance(CreateTaskDto, req.body as object);

    try {
      const taskEntity = TaskMapper.toEntity(taskDto);
      const task = await createTaskUseCase.execute(taskEntity);
      res
        .status(HTTP_STATUS_CODES.CREATED)
        .json(
          new ApiResponse(
            HTTP_STATUS_CODES.CREATED,
            SUCCESS_MESSAGES.TASK_CREATED,
            [TaskMapper.toDto(task)]
          )
        );
    } catch (error) {
      res
        .status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR)
        .json(
          new ApiResponse(
            HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR,
            ERROR_MESSAGES.INTERNAL_SERVER_ERROR
          )
        );
    }
  }

  static async getTasks(req: Request, res: Response) {
    try {
      const tasks = await getTasksUseCase.execute();
      res.json(
        new ApiResponse(
          200,
          "Tasks retrieved successfully",
          tasks.map(TaskMapper.toDto)
        )
      );
    } catch (error) {
      res
        .status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR)
        .json(
          new ApiResponse(
            HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR,
            ERROR_MESSAGES.INTERNAL_SERVER_ERROR
          )
        );
    }
  }
}
