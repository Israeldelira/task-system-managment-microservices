import {
  Inject,
  Post,
  Body,
  HttpException,
  HttpStatus,
  Patch,
  Param,
  Get,
  Query,
  Delete,
  Controller,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ByPageOptionsDto } from 'apps/task-service/src/dto/task.dto';
import {
  CreateUserDto,
  UpdateUserDto,
} from 'apps/user-service/src/dto/user.dto';
import { Observable, catchError } from 'rxjs';

@Controller('user')
export class UserController {
  constructor(
    @Inject('USER_SERVICE') private readonly userServiceClient: ClientProxy,
  ) {}
  @Post('user')
  async createUser(
    @Body() createUserDto: CreateUserDto,
  ): Promise<Observable<any>> {
    return this.userServiceClient
      .send({ cmd: 'create_user' }, createUserDto)
      .pipe(
        catchError((err) => {
          const { statusCode, message, errors } = err;
          if (err) {
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

  @Patch('user/:id')
  async updateUser(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<Observable<any>> {
    const requestUser = {
      id,
      updateUserDto: updateUserDto,
    };
    return this.userServiceClient
      .send({ cmd: 'update_user' }, requestUser)
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

  @Get('users')
  getAllUsers(@Query() query: ByPageOptionsDto): Observable<any> {
    return this.userServiceClient.send({ cmd: 'get_users_by_page' }, query);
  }

  @Get('user')
  getUsers(): Observable<any> {
    return this.userServiceClient.send({ cmd: 'get_users' }, {});
  }

  @Get('user/:id')
  getUserById(@Param('id') id: number): Observable<any> {
    return this.userServiceClient.send({ cmd: 'get_user' }, id);
  }

  @Delete('user/:id')
  removeTeamById(@Param('id') id: number) {
    return this.userServiceClient.send({ cmd: 'remove_user' }, { id });
  }
}
