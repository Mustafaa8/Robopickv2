import { Router } from "express";
const services = Router()

services.get('/',(req,res)=>{
    res.render('services.ejs');
})
services.get('/catalog',(req,res)=>{
    res.render('catalog.ejs');
})
services.get('/robot',(req,res)=>{
    res.render('robot.ejs')
})
services.get('/about',(req,res)=>{
    res.render('about.ejs')
})

export default services