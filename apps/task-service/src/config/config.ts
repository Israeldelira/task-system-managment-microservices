export default () => ({
  TASK_DB_HOST: process.env.TASK_DB_HOST,
  TASK_DB_PORT: parseInt(process.env.TASK_DB_PORT),
  TASK_DB_USERNAME: process.env.TASK_DB_USERNAME,
  TASK_DB_PASSWORD: process.env.TASK_DB_PASSWORD,
  TASK_DB_NAME: process.env.TASK_DB_NAME,
});
