var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Onko siellä apinoita');
});

//*******************************************************************************************


//teht 1. GET-metodi ----------------------------
router.get('/teht1', function(request,response)
{
    response.send('Tehtävä 1 suoritettu.');
    console.log('teht1 ajettu onnistuneesti');
});
//-----------------------------------------------



//teht 2. GET-metodi yhdellä parametrilla --------------------------------------------------
router.get('/teht2/:parametri',function(request,response)
{
    response.send('Tehtävä 2 suoritettu. Annettu parametri: '
        +request.params.parametri);
    
    console.log('teht2 ajettu onnistuneesti');
});
//------------------------------------------------------------------------------------------


//teht 3. GET-metodi kadella parametrilla --------------------------------------------------
router.get('/teht3/:para1/:para2',function(request, response)
{
    response.send('Tehtävä 3 suoritettu. Annetut parametrit:'
        +request.params.para1+" ja "+request.params.para2);

    console.log('teht3 ajettu onnistuneesti');
});
//------------------------------------------------------------------------------------------



//teht 4. POST-metodi ---------------------------
router.post('/', function(request,response)
{
    response.send(request.body);
    console.log(request.body);
});
//-----------------------------------------------

module.exports = router;

