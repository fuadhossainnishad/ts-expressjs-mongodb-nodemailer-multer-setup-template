import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL!,
  domain: process.env.DOMAIN,
  smtp_host: process.env.SMTP_HOST,
  smtp_port: process.env.SMTP_PORT,
  smtp_user: process.env.SMTP_USER,
  smtp_password: process.env.SMTP_PASSWORD,
  admin_jwt_access_secret: process.env.ADMIN_JWT_ACCESS_SECRET,
  jwt_access_secret: process.env.JWT_ACCESS_SECRET,
  expires_in: process.env.EXPIRES_IN,
  jwt_refresh_secret: process.env.JWT_REFRESH_SECRET,
  refresh_expires_in: process.env.REFRESH_EXPIRES_IN,
};
