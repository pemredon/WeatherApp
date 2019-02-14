// Do not forget to store your new request module in a variable in order to use it
const mongoose = require('mongoose');

var user = "pemred";
var password = "masopilo92";
var port = 63984;
var bddname = "openweatherapp";


// useNewUrlParser ;)
var options = {
   connectTimeoutMS: 5000,
   useNewUrlParser: true,
  };

mongoose.connect('mongodb://'+user+':'+password+'@ds163984.mlab.com:'+port+'/'+bddname,
    options,
    function(err) {
     if (err) {
       console.log(err);
     } else {
       console.info('connexion ok');
     }
    }
);

module.exports = mongoose;
