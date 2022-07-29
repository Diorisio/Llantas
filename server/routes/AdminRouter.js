var express = require('express');
var router = express.Router();
const permiso=require('../middleware/permisoadminMiddleware')
const {login,allUser,register,aceptado} =require('../controller/adminController')

router.post('/login',login)
router.post('/registro',permiso,register)
router.post('/aceptado',permiso,aceptado)
router.get('/Revisado',permiso,allUser)

module.exports = router;