export default () => ({
  USER_DB_HOST: process.env.USER_DB_HOST,
  USER_DB_PORT: parseInt(process.env.USER_DB_PORT),
  USER_DB_USERNAME: process.env.USER_DB_USERNAME,
  USER_DB_PASSWORD: process.env.USER_DB_PASSWORD,
  USER_DB_NAME: process.env.USER_DB_NAME,
});
