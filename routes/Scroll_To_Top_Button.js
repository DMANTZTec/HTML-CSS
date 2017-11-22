var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('Scroll_To_Top_Button', { title: 'Express' });
});

module.exports = router;
