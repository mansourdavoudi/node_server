const express=require('express');
const hbs=require('hbs');
const path=require('path');
const app=express();
const port=3000;
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
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});