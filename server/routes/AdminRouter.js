var express = require('express');
var router = express.Router();
const permiso=require('../middleware/permiso')
const {login,allUser,register} =require('../controller/adminController')

router.post('/login',login)
router.post('/registro',register)
router.get('/Revisado',allUser)

module.exports = router;