var express = require('express');
var router = express.Router();
const {envioemail,login}= require('../controller/registroController')


router.post('/envioemail',envioemail);
router.post('/logeado',login)

module.exports = router;
