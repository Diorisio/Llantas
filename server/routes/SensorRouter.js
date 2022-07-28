var express = require('express');
var router = express.Router();
const {sensor,enviodatos} =require('../controller/sensorsController')
const {permisodriver}=require('../middleware/logeadoUsersMiddleware')

router.post('/guardandodatos',permisodriver,sensor)
router.get('/enviodata',permisodriver,enviodatos)

module.exports = router;