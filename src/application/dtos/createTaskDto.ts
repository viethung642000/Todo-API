import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  IsDateString,
  ValidateIf,
  IsDefined,
} from "class-validator";
import { ERROR_MESSAGES } from "../common/constants";
import { IsNull } from "typeorm";

export class CreateTaskDto {
  @IsNotEmpty({ message: ERROR_MESSAGES.TASK_NAME_REQUIRED })
  @IsString({ message: ERROR_MESSAGES.TASK_NAME_STRING })
  @MaxLength(80, { message: ERROR_MESSAGES.TASK_NAME_MAX_LENGTH })
  name: string;

  @ValidateIf((o) => o.endDate !== undefined) // Nếu có endDate thì bắt buộc startDate
  @IsDefined({ message: ERROR_MESSAGES.END_DATE_REQUIRES_START_DATE }) // Không được undefined
  @IsNotEmpty({ message: ERROR_MESSAGES.END_DATE_REQUIRES_START_DATE }) // Không được rỗng
  @IsDateString({}, { message: ERROR_MESSAGES.START_DATE_INVALID })
  startDate?: string;

  @IsOptional()
  @IsDateString({}, { message: ERROR_MESSAGES.END_DATE_INVALID })
  endDate?: string;

  constructor(name: string, startDate?: string, endDate?: string) {
    this.name = name;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
