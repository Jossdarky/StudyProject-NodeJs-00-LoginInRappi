const express = require('express'),
	path = require('path'),
	expresshbs = require('express-handlebars');

//INICIO DEPENDENCIAS
const app = express();

//SETTINGS
app.set('port', 9222);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', expresshbs({
	defaultLayout: 'main',
	layoutsDir: path.join(app.get('views'), 'layouts'),
	partialsDir: path.join(app.get('views'), 'conexionRappi'),
	extname: '.hbs'
}))
app.set('view engine', '.hbs');

//MIDDLEWARES
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//variables globales

//rutas
app.use(require('./routes/routes'));
app.use('/server', require('./routes/links'));

//rutas publicas
app.use('/conexionRappi', express.static(path.join(__dirname, 'views/conexionRappi')));
app.use('/css', express.static(path.join(__dirname, 'css')));


//inicio del servidor
app.listen(app.get('port'), () => {
	console.log('listening on ' + app.get('port'));
});

