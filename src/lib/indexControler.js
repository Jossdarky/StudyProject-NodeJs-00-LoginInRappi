const express = require('express');
const router = express.Router();

router.post('/enviarSMS', (req, res) => {
	res.send(1);
});


router.get('/enviarSMS', (req, res) => {
	  res.send(2);
});

module.exports = router;

/*
exports.consumirWsMensajeTexto = async function consumirWsMensajeTexto(telefono) {
  const ruta = 'https://services.grability.rappi.com/api/twilio-auth/verification-code/v2/send';
  const json = JSON.stringify({"phone": telefono,"country_code":"+57","via":"sms","locale":"es"});
  const headers =  { 
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

const response = await fetch(ruta, {
  method: 'POST', 
  body: json,
  headers: headers
});
console.log("-------------------------------------------------");
console.log("--->"+ruta);
console.log(response.json());
console.log("-------------------------------------------------");

}
*/
/*
const button = document.getElementById('enviarSMSButton');
button.addEventListener('click', function(e) {
  console.log('enviarSMSButton was clicked');
  var telefono = document.getElementById('telefono').nodeValue;
  consumirWsMensajeTexto(telefono);
});*/