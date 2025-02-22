import "reflect-metadata";
import { DataSource } from "typeorm";
import { TaskEntity } from "../../domain/entities/taskEntity";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: ":memory:",
  synchronize: true,
  logging: false,
  entities: [TaskEntity],
  migrations: [],
  subscribers: [],
});

export const initializeDatabase = async () => {
  await AppDataSource.initialize();
};