import { DataSource } from "typeorm";
import { Item } from "./Item";
import path from "path";
import fs from 'fs';

function log(msg: string) {
  const logfile = path.join(__dirname, './logs.txt');
  fs.appendFileSync(logfile, `${msg}\n`, {encoding: 'utf-8'}); 
  console.log(logfile);
  console.log(fs.readFileSync(logfile, {encoding: 'utf-8' }));
}

export function initDatabase() {
  const dataSource = new DataSource({
    type: "sqlite",
    driver: require('sqlite3'),
    synchronize: true,
    logging: true,
    logger: "simple-console",
    database: path.join(__dirname, "./database.sqlite"),
    entities: [Item],
  });
  dataSource.initialize().then(() => {
    console.log("Data Source has been initialized!");
    log("Data Source has been initialized!");

    Item.find().then((res) => {
      console.log("items: ", res);
    });
  });
}
