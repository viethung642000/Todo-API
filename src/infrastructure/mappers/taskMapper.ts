import { createMapper, addProfile, createMap, forMember, mapFrom } from "@automapper/core";
import { classes } from "@automapper/classes";
import { TaskEntity } from "../../domain/entities/taskEntity";
import { CreateTaskDto } from "../../application/dtos/createTaskDto";

// Khởi tạo mapper
export const mapper = createMapper({ strategyInitializer: classes() });

// Định nghĩa profile cho mapper
export const taskProfile = addProfile(mapper, (mapper) => {
  createMap(mapper, CreateTaskDto, TaskEntity, 
    forMember(
      (destination) => destination.name,
      mapFrom((source) => source.name)
    ),
    forMember(
      (destination) => destination.startDate,
      mapFrom((source) => source.startDate)
    ),
    forMember(
      (destination) => destination.endDate,
      mapFrom((source) => source.endDate)
    )
  );

  createMap(mapper, TaskEntity, CreateTaskDto, 
    forMember(
      (destination) => destination.name,
      mapFrom((source) => source.name)
    ),
    forMember(
      (destination) => destination.startDate,
      mapFrom((source) => source.startDate)
    ),
    forMember(
      (destination) => destination.endDate,
      mapFrom((source) => source.endDate)
    )
  );
});

export class TaskMapper {
  static toEntity(dto: CreateTaskDto): TaskEntity {
    return mapper.map(dto, CreateTaskDto, TaskEntity);
  }

  static toDto(task: TaskEntity): CreateTaskDto {
    return mapper.map(task, TaskEntity, CreateTaskDto);
  }
}
