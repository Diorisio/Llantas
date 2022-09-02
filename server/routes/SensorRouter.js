var express = require('express');
var router = express.Router();
const {sensor} =require('../controller/sensorsController')
const {permisodriver}=require('../middleware/logeadoUsersMiddleware')

router.post('/guardandodatos',permisodriver,sensor)


module.exports = router;