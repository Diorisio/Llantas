var express = require('express');
var router = express.Router();
const permiso=require('../middleware/permisoadminMiddleware')
const {TotalUsers,llantas} =require('../controller/dashboardController')


router.get('/',permiso,TotalUsers)
router.get('/llantas',permiso,llantas)


module.exports = router;