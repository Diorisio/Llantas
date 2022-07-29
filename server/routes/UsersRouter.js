var express = require('express');
var router = express.Router();
const {envioemail,login,infouser}= require('../controller/registroController')


router.post('/envioemail',envioemail);
router.post('/logeado',login)
router.get('/infouser',infouser)

module.exports = router;
