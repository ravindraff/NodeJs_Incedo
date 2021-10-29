let express = require('express');
let router = express.Router();

router.get('/', function (req, res) {
    res.send("Hello Product!");
})
router.post('/', function (req, res) {
    res.send("Hello Post Product!");
})
router.put('/', function (req, res){
    res.send("Hello Put Product!")
})
router.delete('/', function (req, res){
    res.send("Hello Delete Product!")
})
module.exports = router;