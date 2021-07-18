const { static } = require('express');
const express = require('express');
const app = express();
const port = process.env.PORT || 6179;

const nav = [
    {link:'/index',name:'Index'},
    {link:'/books',name:'Books'},
    {link:'/authors',name:'Authors'},
    {link:'/signUp',name:'Signup'},            
    {link:'/login',name:'Login'}
];

const indexRouter = require('./src/routes/indexRoutes')(nav)
const booksRouter = require('./src/routes/bookRoutes')(nav)
const authorsRouter = require('./src/routes/authorRoutes')(nav)
const signUpRouter = require('./src/routes/signUpRoutes')(nav)
const loginRouter = require('./src/routes/loginRoutes')(nav)

app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views',__dirname+'/src/views');
app.use('/index',indexRouter);
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/signUp',signUpRouter);
app.use('/login',loginRouter);

app.get('/',function(req,res){
    res.render("index",
        {
            nav,
            title: 'Library'
        }
    );
});



app.listen(port,()=>{console.log("Server Ready at " + port)});