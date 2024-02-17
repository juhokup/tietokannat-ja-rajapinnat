var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


//*******************************************************************************************


//teht 1. GET-metodi ----------------------------
app.get('/teht1', function(request,response)
{
    response.send('Tehtävä 1 suoritettu.');
    console.log('teht1 ajettu onnistuneesti');
});
//-----------------------------------------------



//teht 2. GET-metodi yhdellä parametrilla --------------------------------------------------
app.get('/teht2/:parametri',function(request,response)
{
    response.send('Tehtävä 2 suoritettu. Annettu parametri: '
        +request.params.parametri);
    
    console.log('teht2 ajettu onnistuneesti');
});
//------------------------------------------------------------------------------------------


//teht 3. GET-metodi kadella parametrilla --------------------------------------------------
app.get('/teht3/:para1/:para2',function(request, response)
{
    response.send('Tehtävä 3 suoritettu. Annetut parametrit:'
        +request.params.para1+" ja "+request.params.para2);

    console.log('teht3 ajettu onnistuneesti');
});
//------------------------------------------------------------------------------------------



//teht 4. POST-metodi ---------------------------
app.post('/', function(request,response)
{
    response.send(request.body);
    console.log(request.body);
});
//-----------------------------------------------


module.exports = app;
