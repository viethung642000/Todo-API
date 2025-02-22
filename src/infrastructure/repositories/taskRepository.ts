import { Repository } from "typeorm";
import { TaskEntity } from "../../domain/entities/taskEntity";
import { ITaskRepository } from "../../application/repositories.interface/taskRepository.interface";
import { AppDataSource } from "../database/dataSource";

export class TaskRepositoryImpl implements ITaskRepository {
  private repository: Repository<TaskEntity> = AppDataSource.getRepository(TaskEntity);

  async create(task: TaskEntity): Promise<TaskEntity> {
    return this.repository.save(task);
  }

  async findAll(): Promise<TaskEntity[]> {
    return this.repository.find();
  }
}