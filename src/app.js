const path = require('path');
const express = require('express');
const hbs = require('hbs');
// const bodyParser = require('body-parser');

// Inicia o App
const app = express();
const port = process.env.PORT || 3000;

// Carrega os Modulos
let Article = require('./models/article');

require('./controllers/authController')(app);

// usamos .join() (do path) para direcionar o express para o nosso diretório público
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')


// Direciona o express para a pasta public como conteudo estatico
app.use(express.static(publicDirectoryPath));


// Set up handlebar and views engine
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath)

// Index Route
app.get('', (req, res) => {
    res.render('index')
});


// Home Route
// app.get('/home', (req, res) => {
//     // É só plugar o html do home
//     Article.find({}, function(err, articles){
//         if(err){
//             console.log()
//         } else {
//             res.render('home', {
//             title: 'title',
//             articles: articles
//             }); 
//         }
//     });
// });

app.get('/home', async (req, res) => {
    res.render('home')
})

app.get('/login', (req, res) => {
    // Podemos mandar um objeto como resposta que o express
    // irá transformar em uma string JSON
    res.send({
        email: "daniel@legal.com",
        senha: "caipirinha123"
    })
});

app.get('/topico', (req, res) => {
    res.render('topico')
});

app.get('/perfil', (req, res) => {
    res.render('perfil')
});

app.get('/notificacoes', (req, res) => {
    res.render('notificacoes')
});

app.get('/configuracoes', (req, res) => {
    res.render('configuracoes')
});

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Andrew Mead',
        errorMessage: 'Página não encontrada'
    });
});

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})