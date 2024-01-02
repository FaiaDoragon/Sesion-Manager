import "reflect-metadata"
import { DataSource } from "typeorm";
import { Loginsesion } from "../entity/loginsesion.entity";

export const db = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [Loginsesion],
    synchronize: true,
    logging: false,
    
})