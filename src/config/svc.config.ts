import { registerAs } from '@nestjs/config';

export default registerAs('service', () => ({
  name: process.env.SERVICE_NAME,
  databaseUrl: process.env.DATABASE_URL,
}));
