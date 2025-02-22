import { TaskEntity } from "../../domain/entities/taskEntity";

export interface ITaskRepository {
  create(task: InstanceType<typeof TaskEntity>): Promise<InstanceType<typeof TaskEntity>>;
  findAll(): Promise<InstanceType<typeof TaskEntity>[]>;
}
