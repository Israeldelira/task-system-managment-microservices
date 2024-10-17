import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { lastValueFrom } from 'rxjs';
import { Repository } from 'typeorm';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskServiceService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
    @Inject('USER_SERVICE') private readonly userServiceClient: ClientProxy,
  ) {}
  async createTask(createTaskDto: CreateTaskDto) {
    try {
      const existUser = await lastValueFrom(
        this.userServiceClient.send({ cmd: 'get_user' }, createTaskDto.userId),
      );

      if (!existUser) {
        throw new RpcException({
          statusCode: 404,
          message: `El usuario con el id ${createTaskDto.userId} no existe.`,
        });
      }

      const newTask = await this.taskRepository.save(createTaskDto);
      return {
        task: newTask,
        userObject: existUser,
      };
    } catch (error) {
      console.log(error);
      throw new RpcException({
        statusCode: error.statusCode || 500,
        message: error.message || `Ocurrio un error al crear la tarea`,
      });
    }
  }

  findAllTasks() {
    return this.taskRepository.find();
  }

  async findAllTasksByPage(
    page: number,
    limit: number,
  ): Promise<{ data: Task[]; total: number }> {
    const [result, total] = await this.taskRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
    });
    return {
      data: result,
      total,
    };
  }

  async findOneTask(id: number) {
    const existingTask = await this.taskRepository.findOne({
      where: { id: id },
    });
    if (!existingTask) {
      throw new RpcException({
        statusCode: 404,
        message: 'La tarea no existe.',
      });
    }
    return existingTask;
  }

  async updateTask(id: number, updateTaskDto: UpdateTaskDto) {
    const existingTask = await this.taskRepository.findOne({
      where: { id: id },
    });

    if (!existingTask) {
      throw new RpcException({
        statusCode: 404,
        message: 'La tarea no existe.',
      });
    }

    this.taskRepository.merge(existingTask, updateTaskDto);

    await this.taskRepository.save(existingTask);

    return existingTask;
  }

  async removeTask(id: number) {
    const task = await this.taskRepository.findOne({ where: { id: id } });

    if (!task) {
      throw new RpcException({
        statusCode: 404,
        message: 'La tarea no existe.',
      });
    }
    return await this.taskRepository.delete(id);
  }
}
