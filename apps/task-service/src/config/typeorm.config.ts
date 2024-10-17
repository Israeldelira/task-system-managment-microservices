import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Task } from '../entities/task.entity';

export async function typeOrmConfig(): Promise<TypeOrmModuleOptions> {
  return {
    type: 'mysql',
    host: process.env.TASK_DB_HOST,
    port: parseInt(process.env.TASK_DB_PORT),
    username: process.env.TASK_DB_USERNAME,
    password: process.env.TASK_DB_PASSWORD,
    database: process.env.TASK_DB_NAME,
    autoLoadEntities: true,
    logging: false,
    entities: [Task],
    synchronize: true,
  };
}
