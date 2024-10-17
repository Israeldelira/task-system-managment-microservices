import { Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserServiceService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  createUser(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  findAllUsers() {
    return this.userRepository.find({ where: { is_enabled: true } });
  }

  async findAllUsersByPage(
    page: number,
    limit: number,
  ): Promise<{ data: User[]; total: number }> {
    const [result, total] = await this.userRepository.findAndCount({
      where: { is_enabled: true },
      skip: (page - 1) * limit,
      take: limit,
    });

    return {
      data: result,
      total,
    };
  }

  async findOneUser(id: number) {
    const existingUser = await this.userRepository.findOne({
      where: { id: id, is_enabled: true },
    });
    if (!existingUser) {
      throw new RpcException({
        statusCode: 404,
        message: `El usuario no existe.`,
      });
    }
    return existingUser;
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto) {
    const existingUser = await this.userRepository.findOne({
      where: { id: id },
    });

    if (!existingUser) {
      throw new RpcException({
        statusCode: 404,
        message: `El usuario no existe.`,
      });
    }

    this.userRepository.merge(existingUser, updateUserDto);
    await this.userRepository.save(existingUser);
    return existingUser;
  }

  async removeUser(id: number) {
    const user = await this.userRepository.findOne({ where: { id: id } });

    if (!user) {
      throw new RpcException({
        statusCode: 404,
        message: `El usuario no existe.`,
      });
    }
    user.is_enabled = false;
    return await this.userRepository.save(user);
  }
}
