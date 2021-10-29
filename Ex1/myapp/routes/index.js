var express = require('express');
var router = express.Router();

/* GET home page. */
/* router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
}); */
router.get('/', function(req, res, next) {
  res.send("Hello World")
})
router.post('/', function(req, res, next) {
  res.send("Got Post Request")
})
router.put('/',function(req, res, next) {
  res.send("Got Put Request")
})
router.delete('/', function(req, res, next) {
  res.send("Got Delete Request")
})

module.exports = router;
