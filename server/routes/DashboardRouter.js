var express = require('express');
var router = express.Router();
const permiso=require('../middleware/permisoadminMiddleware')
const {TotalUsers,llantas,llantasxuser} =require('../controller/dashboardController')


router.get('/',permiso,TotalUsers)
router.get('/llantas',permiso,llantas)
router.get('/llantas/:id_user',permiso,llantasxuser)


module.exports = router;