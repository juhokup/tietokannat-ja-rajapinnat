const express = require('express');
const router = express.Router();
const book = require('../models/book_model');

//tulostaa kaikki kirjat 'select * from book'
router.get('/',
    function (request, response) {
        book.getAll(function (err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                console.log(dbResult);
                response.json(dbResult);
            }
        })
    });

//tulostaa vain yhden kirjan 'select from book where id=?'
router.get('/:id',
    function (request, response) {
        book.getById(request.params.id, function (err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                response.json(dbResult);
            }
        })
    });

//Kirjan lisäys  'insert into book (name,author,isbn) values(?,?,?)'
router.post('/', 
function(request, response) {
  book.add(request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});

//Poistaa kirjan 'delete from book where id_book=?'
router.delete('/:id', 
function(request, response) {
  book.delete(request.params.id, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});

//Päivittää kirjan tiedot 'update book set name=?,author=?, isbn=? where id_book=?' TÄYTYY ANTAA KAIKKI KENTÄT, MUUTEN MUUTTUVAT NULLEIKSI
router.put('/:id', 
function(request, response) {
  book.update(request.params.id, request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});

module.exports = router;