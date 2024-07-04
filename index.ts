import express from 'express';
import type { Request, Response, NextFunction } from 'express'
import api from './api';
import db from './db/db.ts';
import schema from './db/schema.ts';
const app = express();
app.set('view engine','ejs')
app.set('views','./views')
app.use(express.static('public'))
app.use(express.urlencoded({ extended:true }))
app.use('/records',api)
app.get('/',(req,res)=>{
    res.render('index.ejs')
})
app.get('/task',(req,res)=>{
    res.render('task.ejs',{info: ' '})
})

app.post('/task', async (req,res,next)=>{
    let {_id,startR,startC,endR,endC} = req.body;
    if (!startR || !startC || !endR || !endC) {
        return res.status(400).render('task.ejs',{info:"Missing Values"})
    }
    try {
        const point =  await db.insert(schema).values({
            'startR':  parseInt(startR),
            'startC': parseInt(startC),
            'endR': parseInt(endR),
            'endC': parseInt(endC)
        
        });
        res.render('task.ejs',{info:"Done Successfully"})
    } catch(err){
        console.log(err);
        next(err)
    }
})

app.use((req,res)=>{
    res.status(404).render('404.ejs')
})

app.use((err:Error,req: Request,res:Response,next:NextFunction)=>{
    console.error("Error Stack",err.stack);
    res.status(500).send('Somthing Is Broken');
})

app.listen(3400,()=>{console.log('http://localhost:3400')})