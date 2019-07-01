const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/frakdb', { 
    useNewUrlParser: true,
    useCreateIndex: true,
});
mongoose.Promise = global.Promise;

let db = mongoose.connection;

// Checar conexão
db.once('open', function(){
    console.log('Connected to MongoDB');
})

// Checa erros DB
db.on('error', function(){
    console.log(err);
});

module.exports = mongoose;