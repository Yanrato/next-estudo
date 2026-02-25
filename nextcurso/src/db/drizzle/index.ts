import { drizzle } from "drizzle-orm/better-sqlite3";
import { postsTable } from "./schemas";
import Database from "better-sqlite3";
import { resolve } from "node:path";

const sqliteDatabasePath = resolve(process.cwd(), 'db.sqlite3');
const sqliteDatabase = new Database(sqliteDatabasePath)

export const drizzleDb = drizzle(sqliteDatabase, {
  schema: {
    post: postsTable
  },
  logger: false,
})