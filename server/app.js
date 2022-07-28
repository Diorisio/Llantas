var createError = require('http-errors');
var express = require('express');
var path = require('path');
const db = require('./database/models');
const { expressjwt: jwt } = require('express-jwt');
var app = express();
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const Users = require('./routes/UsersRouter')
const Admin = require('./routes/AdminRouter')
const Sensor = require('./routes/SensorRouter')
const Dashboard=require('./routes/DashboardRouter')
const PuntoRecoleccion = require('./routes/PuntoRecoleccionRouter')



/* Para el process.env */
const dotenv = require('dotenv');
dotenv.config();
/* -------------------------- */

forceSync = async () => {

  await db.sequelize.sync( /* { alter: true } */ /* {force:false} */);
  console.log("tabla creada")

}
// view engine setup

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(
  jwt({
    secret: process.env.SECRET_JWT ,
    algorithms: ["HS256"],
  }).unless({ path: ["/api/envioemail","/api/admin/login","/api/logeado"] })
);



app.use('/api',Users)
app.use('/api/admin',Admin)
app.use('/api/dashboard',Dashboard)
app.use('/api',Sensor)
app.use('/api/fijo',PuntoRecoleccion)
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
