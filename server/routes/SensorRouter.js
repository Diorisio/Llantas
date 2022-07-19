var express = require('express');
var router = express.Router();
const {sensor,enviodatos} =require('../controller/sensorsController')

router.post('/guardandodatos',sensor)
router.get('/enviodata',enviodatos)

module.exports = router;