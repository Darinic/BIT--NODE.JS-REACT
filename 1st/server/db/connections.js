// import database from '../config.json' assert {type: 'json'}
import config from "./config.js";
import mysql from "mysql2/promise";
import { Sequelize } from "sequelize";
import { tasks } from "../model/tasks.js";

export const database = {};

const { host, port, user, password, db } = config;
console.log(user);
try {
  const connection = await mysql.createConnection({
    host,
    port,
    user,
    password,
  });
  await connection.query("CREATE DATABASE IF NOT EXISTS `" + db + "`");

  const sequelize = new Sequelize(db, user, password, { dialect: "mysql" });

  database.Tasks = tasks(sequelize);

  await sequelize.sync({ alter: true });
} catch {
  console.log("Prisijungti prie duomen7 pazes nepavyko");
}
