var express = require('express');
var router = express.Router();
const {permisoPuntoRecoleccion}=require('../middleware/logeadoUsersMiddleware')
const {mostrardata,registro} =require('../controller/PuntoRecoleccionController')


router.post('/registrollantas',permisoPuntoRecoleccion,registro)
router.get('/todasllantas',permisoPuntoRecoleccion,mostrardata)

module.exports = router;