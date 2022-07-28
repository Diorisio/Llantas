var express = require('express');
var router = express.Router();
const permiso=require('../middleware/permisoadminMiddleware')
const {login,allUser,register} =require('../controller/adminController')

router.post('/login',login)
router.post('/registro',permiso,register)
router.get('/Revisado',permiso,allUser)

module.exports = router;