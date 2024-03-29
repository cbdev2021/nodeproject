var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//var port = 8083;
const PORT = process.env.PORT || 10000;
//const PORT = 3000;

//var db = 'mongodb+srv://cbdev:clavemongodb@cluster0.ny18irn.mongodb.net/?retryWrites=true&w=majority';
//var db = 'mongodb://cbdev:clavemongodb@cluster0.ny18irn.mongodb.net';
//mongoose.connect(db);

//nuevo
// app.listen(PORT, (err) => {
//   if (err) {
//   console.log("There was a problem with app.listen:"+ err);
//   }
//   console.log("Listening on port" +PORT);
//   });

//fin nuevo


// 
const mongoAtlasUri =
  "mongodb+srv://cbdev:clavemongodb@cluster0.ny18irn.mongodb.net/books?retryWrites=true&w=majority";

try {
  // Connect to the MongoDB cluster
  mongoose.connect(
    mongoAtlasUri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(" Mongoose is connected"),
  );
} catch (e) {
  console.log("could not connect");
}


//

var books = require('./routes/books');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/books', books);

//const PORT = process.env.PORT || 10000;

app.get('/', function(req, res){
    console.log('app starting on port: '+PORT);
    res.send('tes express nodejs mongodb');
});



app.listen(PORT, function(){
    console.log('app listening on port: '+PORT);
});


 