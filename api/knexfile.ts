import { Knex } from "knex";
import dotenv from "dotenv";

dotenv.config();

/*
  This is the configuration file for Knex. Knex is a query builder and an ORM.
  Here Knex has been configured to work with a MySQL database.
*/

const config: Knex.Config = {
  client: "mysql",
  connection: {
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "mydb",
  },
  migrations: {
    directory: "./migrations",
  },
  seeds: {
    directory: "./seeds",
  },
};

export default config;
