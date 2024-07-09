import {Router} from 'express';
import db from '../db/db.ts'
import schema from '../db/schema.ts' 
import {eq} from 'drizzle-orm'
const api = Router();


api.get('/',async(req,res)=>{
    let allpoints = await db.select().from(schema);
    res.json(allpoints)
})
api.get('/first',async(req,res,next)=>{
    try {
        const first = await db.select().from(schema).limit(1)
        let id:number = first[0]['id'];
        if (id ==undefined){
            next()
        }
        res.json(first)
        await db.delete(schema).where(eq(schema.id,id))
        
    }
     catch(err){
        next(err)
     }
})

export default api