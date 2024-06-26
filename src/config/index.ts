import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DB_URL,
  //   BCRYPT_SALT_ROUNDS: process.env.BCRYPT_SALT_ROUNDS,
};
