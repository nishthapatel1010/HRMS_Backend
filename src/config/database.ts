import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv";

dotenv.config();

const isProd = process.env.NODE_ENV === "production";

export const AppDataSource = new DataSource({
  type: "postgres",
  ...(isProd
    ? { url: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } }
    : {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
      }),

  entities: [__dirname + "/../entities/**/*.{ts,js}"],
  migrations: [__dirname + "/../migrations/**/*.{ts,js}"],
  synchronize: false,
  logging: !isProd,
});
