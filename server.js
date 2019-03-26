const express=require('express');
const hbs=require('hbs');
const path=require('path');
const app=express();
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname,'public')));
hbs.registerPartials(path.join(__dirname,'views/partials'));
hbs.registerHelper('date',()=>{
    return new Date().getFullYear();
});
app.get('/',(req,res)=>{
    //res.send('hello');
    res.render('home',{
        title:'صفحه اصلی'
    });
});
app.listen(3000,()=>{
    console.log('server is running');
});