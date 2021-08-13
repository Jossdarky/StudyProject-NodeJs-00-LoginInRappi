const express = require('express');
const morgan = require('morgan');
const fetch = require('node-fetch');
const path = require('path');
const expresshbs = require ('express-handlebars');

//INICIO DEPENDENCIAS
const app = express();

//SETTINGS
app.set('port', 8080);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', expresshbs({
	defaultLayout: 'main',
	layoutsDir: path.join(app.get('views'), 'layouts'),
	partialsDir:  path.join(app.get('views'), 'loginForm'),
	extname: '.hbs',
	helpers: require ('./lib/handlebars.js')
}))

app.set('view engine','.hbs');

//MIDDLEWARES
//app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//variables globales
app.use((req,res,next)=>{
	next();
})

//rutas
app.use(require('./routes/routes')); 
//app.use(require('./routes/links')); 


//rutas publicas
app.use(express.static(path.join(__dirname,'public')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')));

//inicio del servidor
app.listen(app.get('port'), () => {
    console.log('listening on '+app.get('port'));
  });


//INICIO RUTAS ESTATICAS
/*
app.use('/js', express.static(path.join(__dirname, 'public')));

*/
//Inicio servidor






/*
async function printData(data, elemento){
	console.log("-------------------------------------------------");
	console.log(elemento);
	console.log("-------------------------------------------------");
	console.log(data);
	console.log("-------------------------------------------------");
}

async function consumirWsSeguridad() {
    var json = JSON.stringify({
		"respond_with":{
		   "triggers":true,
		   "config":{
			  "config_time":0
		   }
		},
		"events":[
		   {
			  "name":"ss",
			  "time":Date.now(),
			  "data":{
				 
			  },
			  "session_id":"257a0c97-3fb4-187d-6e40-9ee90dec28b8"
		   }
		],
		"device":{
		   "browser":"Chrome",
		   "browser_version":"92.0.4515.131",
		   "os_version":"Windows",
		   "resolution":"2048x1152",
		   "locale":"en-us",
		   "time_zone":"America/Bogota",
		   "user_agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36"
		},
		"api_key":"f6a1117f-52de-444c-9fbd-49d465e7f80e",
		"time":Date.now(),
		"sdk_version":"2.4.3",
		"device_id":"7be3a230-10ae-02cd-7ba4-94216bf11a7b"
	 });

	const response = await fetch('https://sdk.iad-03.braze.com/api/v3/data/', {
	method: 'POST', 
	body: json,
	headers: { 
		'Content-Type': 'application/json',
		'sec-ch-ua': '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
		'sec-ch-ua-mobile':'?0',
		'sec-fetch-dest': 'empty',
		'sec-fetch-mode': 'cors',
		'sec-fetch-site': 'cross-site',
		'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36',
		'x-braze-api-key' : 'f6a1117f-52de-444c-9fbd-49d465e7f80e' ,
		'x-braze-datarequest' : 'true',
		'x-braze-triggersrequest' : 'true',
		'x-requested-with':'XMLHttpRequest'
	}});
	return await response.json();
}

async function consumirWsMensajeTexto(phone) {
    var json = JSON.stringify({"phone": phone,"country_code":"+57","via":"sms","locale":"es"});

	const response = await fetch('https://services.grability.rappi.com/api/twilio-auth/verification-code/v2/send', {
		method: 'POST', 
		body: json,
		headers: { 
		'Content-Type': 'application/json',
		'sec-ch-ua': '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
		'sec-ch-ua-mobile':'?0',
		'sec-fetch-dest': 'empty',
		'sec-fetch-mode': 'cors',
		'sec-fetch-site': 'cross-site',
		'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36',
		'x-braze-api-key' : 'f6a1117f-52de-444c-9fbd-49d465e7f80e' ,
		'x-braze-datarequest' : 'true',
		'x-braze-triggersrequest' : 'true',
		'x-requested-with':'XMLHttpRequest'
		}
	});

	return await response.json();

}

async function consumirWsAutenticar(phone, code, uuid) {
var response = await fetch('https://services.grability.rappi.com/api/twilio-auth/verification-code/v2/check?phone='+phone+'&country_code=+57&code='+code+'&uuid='+uuid, {
	method: 'GET',
	headers: { 
		'Content-Type': 'application/json',
		'sec-ch-ua': '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
		'sec-ch-ua-mobile':'?0',
		'sec-fetch-dest': 'empty',
		'sec-fetch-mode': 'cors',
		'sec-fetch-site': 'cross-site',
		'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36',
		'x-braze-api-key' : 'f6a1117f-52de-444c-9fbd-49d465e7f80e' ,
		'x-braze-datarequest' : 'true',
		'x-braze-triggersrequest' : 'true',
		'x-requested-with':'XMLHttpRequest'
	}
});

return await response.json();

}
*/
/*
var phone = '3192885270';
var uuid = 'VEab147fec96a927268d6c1cfcc8b5f212';
var code = '5360';

if(code == 0){
	consumirWsSeguridad().then(data => printData(data,'Seguridad'));
	consumirWsMensajeTexto(phone).then(data => printData(data,'sms'));
}else{
	consumirWsAutenticar(phone, code, uuid).then(data => printData(data,'auth'));
}

*/


