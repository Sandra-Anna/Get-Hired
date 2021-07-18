const express = require('express');
const authorsRouter = express.Router();
function router(nav){
    var authors = [
        {
            name: 'J.K.Rowling',
            genre: 'Fiction, Adventure',
            img: 'J K Rowling.jpg'
        },
        {
            name: 'Jane Austen',
            genre: 'Romance, Victorian Era',
            img: 'Jane austen.jpg',
        }
    ]
    
    authorsRouter.get('/',function(req,res){
        res.render("authors",{
            nav,
            title: 'Library',
            authors
        });
    });
    
    authorsRouter.get('/:id',function(req,res){
        const id = req.params.id
        res.render("author",{
            nav,
            title: 'Library',
            author: authors[id]
        });
    });
    return authorsRouter;
};



module.exports = router;