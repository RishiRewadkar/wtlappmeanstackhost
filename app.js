var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const multer = require('multer');
var Student= require('./models/student');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var companyRouter= require('./routes/companyroute');

var app = express();

//add mongoose and connect to db 
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/INTERN",{ useNewUrlParser: true,useUnifiedTopology: true })
.then(res => console.log('Connected to db'));

//add cors cross origin resource sharing
var cors=require('cors');
app.use(cors({origin:'http://localhost:4200'}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



const storage = multer.diskStorage({
  destination: (req, file, callBack) => {
      callBack(null, 'uploads')
  },
  filename: (req, file, callBack) => {
      callBack(null, `${file.originalname}`)
  }
})

const upload = multer({ storage: storage })

app.post('/file', upload.single('file'), (req, res, next) => {
  const file = req.file;
  const sid=req.body.sid;
  console.log(file.filename);
  console.log(sid);
  Student.findOneAndUpdate({studentid:sid},{$set:{resume:file.filename}},function(err,doc){
    if(err)
    {
      console.log("problem has encountered  while file upload");
    }
  });
  if (!file) {
    const error = new Error('No File')
    error.httpStatusCode = 400
    return next(error)
  }
    res.send(file);
})

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/companyroute',companyRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'public/index.html'));
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
/* try */
