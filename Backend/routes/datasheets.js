var express = require('express');
var router = express.Router();
const { all } = require('../controllers/datasheets');

router.get('/', all);

module.exports = router;
