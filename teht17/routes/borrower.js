const express = require('express');
const router = express.Router();
const borrower = require('../models/borrower_model');

//tulostaa kaikki kirjat 'select * from borrower'
router.get('/',
    function (request, response) {
        borrower.getAll(function (err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                console.log(dbResult);
                response.json(dbResult);
            }
        })
    });

//tulostaa vain yhden kirjan 'select from borrower where id=?'
router.get('/:id',
    function (request, response) {
        borrower.getById(request.params.id, function (err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                response.json(dbResult);
            }
        })
    });

//Kirjan lisäys  'insert into borrower (name,author,isbn) values(?,?,?)'
router.post('/', 
function(request, response) {
  borrower.add(request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});

//Poistaa kirjan 'delete from borrower where id_borrower=?'
router.delete('/:id', 
function(request, response) {
  borrower.delete(request.params.id, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});

//Päivittää kirjan tiedot 'update borrower set name=?,author=?, isbn=? where id_borrower=?' TÄYTYY ANTAA KAIKKI KENTÄT, MUUTEN MUUTTUVAT NULLEIKSI
router.put('/:id', 
function(request, response) {
  borrower.update(request.params.id, request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});

module.exports = router;