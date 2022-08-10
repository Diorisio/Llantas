var express = require('express');
var router = express.Router();
const {registro} =require('../controller/TransportistaController')
const {permisodriver}=require('../middleware/logeadoUsersMiddleware')

router.post('/registro',permisodriver,registro)

module.exports = router;