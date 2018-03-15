var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});

//取得餘額
router.get('/balance', function(req, res, next){
  
})

//發送交易
router.post('/transaction', function(req, res, next){
  web3.eth.sendSignedTransaction(req.body.tx)
  .on('receipt', function(result){
    console.log(result)
    res.send(result);
  })
  .on('error', , function(err){
    console.log(error);
    res.send("error")
  })
})
module.exports = router;
