const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();


// usamos .join() (do path) para direcionar o express para o nosso diretório público
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')


// Direciona o express para a pasta public como conteudo estatico
app.use(express.static(publicDirectoryPath))

// Set up handlebar and views engine
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath)

// ::: app.get() : Método que configura nosso servidor como responder um GET request (html, JSON etc.)
// Arg 1: route
// Arg 2: função que especifica o que queremos fazer quando
// alguém requisita o route do arg 1.

//::: Arg 2
// :: req : objeto que contém infrmação sobre income request to the server
// :: res : contém métodos que nos permite customizar a resposta 
app.get('', (req, res) => {
    res.render('index')
});


// Home Route
app.get('/home', (req, res) => {
    // É só plugar o html do home
    res.render('home');
});


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

app.listen(3000, () => {
    console.log('Server is up on port 3000')
});

/* É importatne saber sobre Query strings. A maneira como o browser passa a informação para o servidor através daurl é por json também (key : value pairs) Começa depois da ?. As opções começam depois de & 

No request éxiste um objeto 'query'

Ex: /products?search=games&rating=5. */