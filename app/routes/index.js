let express = require('express');
// import DBConnector from '../prod/data/db/DBConnector';
let router = express.Router();
let path = require('path');

let homePath = path.resolve(path.join(__dirname, '../'));
let absolutePath = path.normalize(homePath + "/public/ui/");

/* GET home page. */
router.get('/', function(req, res, next) {

  res.sendFile(absolutePath + "index.html");
});


module.exports = router;
