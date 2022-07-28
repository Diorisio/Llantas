var express = require('express');
var router = express.Router();
const permiso=require('../middleware/permisoadminMiddleware')
const {TotalUsers} =require('../controller/dashboardController')


router.get('/',permiso,TotalUsers)

module.exports = router;