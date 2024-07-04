import {sql} from 'drizzle-orm'
import {sqliteTable , integer , text } from 'drizzle-orm/sqlite-core'
const schema = sqliteTable('points',{
    id: integer('id').primaryKey({autoIncrement: true}),
    startR: integer('startR').notNull(),
    startC: integer('startC').notNull(),
    endR: integer('endR').notNull(),
    endC: integer('endC').notNull()
})

export default schema
