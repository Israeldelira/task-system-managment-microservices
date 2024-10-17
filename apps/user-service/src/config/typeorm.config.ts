import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';

export async function typeOrmConfig(): Promise<TypeOrmModuleOptions> {
  return {
    type: 'mysql',
    host: process.env.USER_DB_HOST,
    port: parseInt(process.env.USER_DB_PORT),
    username: process.env.USER_DB_USERNAME,
    password: process.env.USER_DB_PASSWORD,
    database: process.env.USER_DB_NAME,
    autoLoadEntities: true,
    logging: false,
    entities: [User],
    synchronize: true,
  };
}
