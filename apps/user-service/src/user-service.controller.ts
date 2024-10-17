import { Controller } from '@nestjs/common';
import { UserServiceService } from './user-service.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';

@Controller()
export class UserServiceController {
  constructor(private readonly userService: UserServiceService) {}

  @MessagePattern({ cmd: 'create_user' })
  create(@Payload() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @MessagePattern({ cmd: 'get_users' })
  findAll() {
    return this.userService.findAllUsers();
  }

  @MessagePattern({ cmd: 'get_users_by_page' })
  findAllByPage(@Payload() data: { page: number; limit: number }) {
    const { page, limit } = data;
    return this.userService.findAllUsersByPage(page, limit);
  }

  @MessagePattern({ cmd: 'get_user' })
  findOne(@Payload() id: number) {
    return this.userService.findOneUser(id);
  }

  @MessagePattern({ cmd: 'update_user' })
  update(@Payload() payload: { id: number; updateUserDto: UpdateUserDto }) {
    const { id, updateUserDto } = payload;
    return this.userService.updateUser(id, updateUserDto);
  }

  @MessagePattern({ cmd: 'remove_user' })
  remove(@Payload() id: number) {
    return this.userService.removeUser(id);
  }
}
