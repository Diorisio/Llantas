var express = require('express');
var router = express.Router();
const {permisoPuntoRecoleccion}=require('../middleware/logeadoUsersMiddleware')
const {mostrardata,registro,llantasrecogidas,updatellanta} =require('../controller/PuntoRecoleccionController')


router.post('/registrollantas',permisoPuntoRecoleccion,registro)
router.get('/todasllantas',permisoPuntoRecoleccion,mostrardata)
router.post('/borrarllantas',permisoPuntoRecoleccion,llantasrecogidas)
router.post('/llantasactual',permisoPuntoRecoleccion,updatellanta)

module.exports = router;