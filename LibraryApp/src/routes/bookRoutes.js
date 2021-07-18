const express = require('express');
const booksRouter = express.Router();
function router(nav){
    var books = [
        {
            title: 'Harry Potter and the Philosopher`s Stone',
            author: 'J.K.Rowling',
            genre: 'Fiction, Adventure',
            img: 'Harry1.jpeg'
        },
        {
            title: 'Harry Potter and the Chamber of secrets',
            author: 'J.K.Rowling',
            genre: 'Fiction, Adventure',
            img: 'Harry2.jpeg',
        }
    ]
    
    booksRouter.get('/',function(req,res){
        res.render("books",{
            nav,
            title: 'Library',
            books
        });
    });
    
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id
        res.render("book",{
            nav,
            title: 'Library',
            book: books[id]
        });
    });
    return booksRouter;
};



module.exports = router;