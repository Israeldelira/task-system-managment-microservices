import { PartialType } from '@nestjs/mapped-types';
import { TaskStatus } from '../enums/task.enum';
import {
  IsNotEmpty,
  IsString,
  IsEnum,
  IsInt,
  IsOptional,
} from 'class-validator';

export class CreateTaskDto {
  @IsInt({ message: 'El userId debe de ser un valor entero' })
  @IsNotEmpty({ message: 'El userId es obligatorio' })
  userId: number;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsEnum(TaskStatus)
  status: TaskStatus;
}
export class UpdateTaskDto extends PartialType(CreateTaskDto) {}

export class ByPageOptionsDto {
  @IsOptional()
  @IsInt()
  page?: number = 1;

  @IsOptional()
  @IsInt()
  limit?: number = 10;
}
