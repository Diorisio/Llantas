var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const Users = require('./routes/Users')
const Admin = require('./routes/AdminRouter')
const Sensor = require('./routes/SensorRouter')
const Recolector = require('./routes/RecoleccionRouter')
const db = require('./database/models');
const { expressjwt: jwt } = require('express-jwt');
var app = express();


forceSync = async () => {

  await db.sequelize.sync(/* { alter: true } */ /* {force:false} */);
  console.log("tabla creada")

}
// view engine setup

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(
  jwt({
    secret: "Y29udHJhc2XxYQ==",
    algorithms: ["HS256"],
  }).unless({ path: ["/api/envioemail","/api/admin/login",
  "/api/logeado","/api/admin/revisado","/api/guardandodatos",
  "/api/enviodata","/api/Recolector/todasllantas","/api/Recolector/registrollantas"] })
);



app.use('/api',Users)
app.use('/api/admin',Admin)
app.use('/api',Sensor)
app.use('/api/Recolector',Recolector)
forceSync()

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
