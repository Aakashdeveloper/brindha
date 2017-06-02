var express= require("express");
var bookRouter = express.Router();

var books = [{
  title: 'War and Peace',
  genre: 'Historical Fiction',
  author: 'Lev Nikolayevich Tolstoy',
  read: false
}, {
  title: 'Les Misérables',
  genre: 'Historical Fiction',
  author: 'Victor Hugo',
  read: false
}, {
  title: 'The Time Machine',
  genre: 'Science Fiction',
  author: 'H. G. Wells',
  read: false
}, {
  title: 'A Journey into the Center of the Earth',
  genre: 'Science Fiction',
  author: 'Jules Verne',
  read: false
}, {
  title: 'The Dark World',
  genre: 'Fantasy',
  author: 'Henry Kuttner',
  read: false
}, {
  title: 'The Wind in the Willows',
  genre: 'Fantasy',
  author: 'Kenneth Grahame',
  read: false
},{
  title: 'The Wind in the Willows2',
  genre: 'Fantasy',
  author: 'Kenneth Grahame',
  read: false
}];
var nav = [{
          link: '/',
          Text: 'Home'
        }, {
          link: '/Books',
          Text: 'Books'
        }, {
          link: '/author',
          Text: 'Author'
        },{
          link:'/contact',
          Text:'Contact'
        }];
        
bookRouter.route('/')
    .get(function(req, res) {
        res.render('books', {
        title: 'node code',
        nav: nav,
        book:books
      });
});

bookRouter.route('/single')
    .get(function(req, res) {
        res.send("this is single");
});

module.exports=bookRouter;
