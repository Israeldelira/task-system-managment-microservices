import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';
import { catchError, Observable } from 'rxjs';
import {
  ByPageOptionsDto,
  CreateTaskDto,
  UpdateTaskDto,
} from 'apps/task-service/src/dto/task.dto';

@Controller('task')
export class TaskController {
  constructor(
    private readonly appService: AppService,
    @Inject('TASK_SERVICE') private readonly taskServiceClient: ClientProxy,
  ) {}

  @Get()
  getTasks(): Observable<any> {
    return this.taskServiceClient.send({ cmd: 'get_tasks' }, {});
  }

  @Post()
  async createTask(
    @Body() createTaskDto: CreateTaskDto,
  ): Promise<Observable<any>> {
    return this.taskServiceClient
      .send({ cmd: 'create_task' }, createTaskDto)
      .pipe(
        catchError((err) => {
          // Desestructurar las propiedades de err
          const { statusCode, message, errors } = err;

          // Manejo del microservicio
          if (statusCode) {
            console.error('Error específico del microservicio:', err);
            throw new HttpException(
              {
                status: statusCode,
                message:
                  message || 'Error en la comunicación con el microservicio.',
                error: errors || null,
              },
              statusCode,
            );
          } else {
            // Manejo de errores genéricos
            console.error('Error genérico:', err);
            throw new HttpException(
              {
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                message: 'Ocurrió un error inesperado.',
                errors: err,
              },
              HttpStatus.INTERNAL_SERVER_ERROR,
            );
          }
        }),
      );
  }

  @Patch(':id')
  async updateTask(
    @Param('id') id: number,
    @Body() updateTaskDto: UpdateTaskDto,
  ): Promise<Observable<any>> {
    const requestTask = {
      id,
      updateTaskDto: updateTaskDto,
    };
    return this.taskServiceClient
      .send({ cmd: 'update_task' }, requestTask)
      .pipe(
        catchError((err) => {
          const { statusCode, message, errors } = err;

          // Manejo del microservicio
          if (statusCode) {
            console.error('Error específico del microservicio:', err);
            throw new HttpException(
              {
                status: statusCode,
                message:
                  message || 'Error en la comunicación con el microservicio.',
                error: errors || null,
              },
              statusCode,
            );
          } else {
            // Manejo de errores genéricos
            console.error('Error genérico:', err);
            throw new HttpException(
              {
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                message: 'Ocurrió un error inesperado.',
                errors: err,
              },
              HttpStatus.INTERNAL_SERVER_ERROR,
            );
          }
        }),
      );
  }

  @Get('paginated')
  getAllTasks(@Query() query: ByPageOptionsDto): Observable<any> {
    return this.taskServiceClient.send({ cmd: 'get_tasks_by_page' }, query);
  }

  @Get(':id')
  getTaskById(@Param('id') id: number): Observable<any> {
    return this.taskServiceClient.send({ cmd: 'get_task' }, id).pipe(
      catchError((err) => {
        const { statusCode, message, errors } = err;

        if (err) {
          console.error('Error específico del microservicio:', err);
          throw new HttpException(
            {
              status: statusCode,
              message:
                message || 'Error en la comunicación con el microservicio.',
              error: errors,
            },
            statusCode,
          );
        } else {
          // Manejo de errores genéricos
          console.error('Error genérico:', err);
          throw new HttpException(
            {
              status: HttpStatus.INTERNAL_SERVER_ERROR,
              message: 'Ocurrió un error inesperado.',
              errors: err,
            },
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
        }
      }),
    );
  }

  @Delete(':id')
  removeTeamById(@Param('id') id: number) {
    return this.taskServiceClient.send({ cmd: 'remove_task' }, { id });
  }
}
