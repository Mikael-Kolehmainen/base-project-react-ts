import knex from "knex";
import knexConfig from "../knexfile";
import { Knex } from "knex";

/*
  This is _db.ts, this file creates the Knex DB connector using the configurations
  in knexfile.ts. This file is used by the models to communicate with the database.
*/

const db: Knex = knex(knexConfig);

export default db;
