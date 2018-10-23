var express = require('express');
var router = express.Router();

let path = require('path');

let homePath = path.resolve(path.join(__dirname, '../'));
let absolutePath = path.normalize(homePath + "/public/ui/");


router.get('/', (req, res, next) => {

  res.sendFile(absolutePath + "profile.html");
});

module.exports = router;
