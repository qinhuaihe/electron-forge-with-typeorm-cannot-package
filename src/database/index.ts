import { DataSource } from "typeorm";
import { Item } from "./Item";
import path from "path";

export function initDatabase() {
  const dataSource = new DataSource({
    type: "sqlite",
    synchronize: true,
    logging: true,
    logger: "simple-console",
    database: path.join(__dirname, "./database.sqlite"),
    entities: [Item],
  });
  dataSource.initialize().then(() => {
    console.log("Data Source has been initialized!");

    Item.find().then((res) => {
      console.log("items: ", res);
    });
  });
}
