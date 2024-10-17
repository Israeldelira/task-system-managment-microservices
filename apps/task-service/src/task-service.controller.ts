import { Controller } from '@nestjs/common';
import { TaskServiceService } from './task-service.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';

@Controller()
export class TaskServiceController {
  constructor(private readonly taskService: TaskServiceService) {}

  @MessagePattern({ cmd: 'create_task' })
  create(@Payload() createTaskDto: CreateTaskDto) {
    return this.taskService.createTask(createTaskDto);
  }

  @MessagePattern({ cmd: 'get_tasks' })
  findAll() {
    return this.taskService.findAllTasks();
  }

  @MessagePattern({ cmd: 'get_tasks_by_page' })
  findAllByPage(@Payload() data: { page: number; limit: number }) {
    const { page, limit } = data;
    return this.taskService.findAllTasksByPage(page, limit);
  }

  @MessagePattern({ cmd: 'get_task' })
  findOne(@Payload() id: number) {
    return this.taskService.findOneTask(id);
  }

  @MessagePattern({ cmd: 'update_task' })
  update(@Payload() payload: { id: number; updateTaskDto: UpdateTaskDto }) {
    const { id, updateTaskDto } = payload;
    return this.taskService.updateTask(id, updateTaskDto);
  }

  @MessagePattern({ cmd: 'remove_task' })
  remove(@Payload() id: number) {
    return this.taskService.removeTask(id);
  }
}
