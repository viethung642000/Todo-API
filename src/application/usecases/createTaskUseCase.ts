import { TaskEntity } from "../../domain/entities/taskEntity";
import { TaskRepositoryImpl } from "../..//infrastructure/repositories/taskRepository";

export class CreateTaskUseCase {
  constructor(private taskRepository: TaskRepositoryImpl) {}

  async execute(task : TaskEntity): Promise<TaskEntity> {
    return this.taskRepository.create(task);
  }
}