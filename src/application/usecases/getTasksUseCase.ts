import { TaskEntity } from "../../domain/entities/taskEntity";
import { TaskRepositoryImpl } from "../../infrastructure/repositories/taskRepository";

export class GetTasksUseCase {
  constructor(private taskRepository: TaskRepositoryImpl) {}

  async execute(): Promise<TaskEntity[]> {
    return this.taskRepository.findAll();
  }
}