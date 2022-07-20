var express = require('express');
var router = express.Router();
const {mostrardata,registro} =require('../controller/recoleccionController')


router.post('/registrollantas',registro)
router.get('/todasllantas',mostrardata)

module.exports = router;