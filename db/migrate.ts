import { migrate  } from 'drizzle-orm/bun-sqlite/migrator';
import db from './db.ts';
import schema from './schema.ts'
await migrate(db,{migrationsFolder: './drizzle'})