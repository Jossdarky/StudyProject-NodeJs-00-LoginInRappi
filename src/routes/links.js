const express = require('express'),
    router = express.Router(),
    LoginWsRappiHelper = require('../helperWS/loginWsRappiHelper');

var loginWsRappiHelper = new LoginWsRappiHelper();

const headerSecChUa = '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"';
const headerUserAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36';
global.accesstoken = '';
global.telefono = '';
global.uuid = '';

/**
 * Ruta expuesta para el cliente que se autentica via sms en la pagina de Rappi
 */
router.get('/solicitarCodigoSMS/:telefono', async (req, res) => {
    var telefono = req.params.telefono;
    var wsMensaje = await Promise.resolve(loginWsRappiHelper.solicitarCodigoSMS(telefono));
    //  var wsMensaje = await Promise.resolve(LoginWsRappiHelper.consumirWsSeguridad());
    global.telefono = telefono;
    global.uuid = wsMensaje.sid;
    res.send(wsMensaje);
});


router.get('/validarCodigoSMS/:code', async (req, res) => {
    var code = req.params.code;
    await Promise.resolve(loginWsRappiHelper.validarCodigoSMS(code));
    var wsLogin = await Promise.resolve(loginWsRappiHelper.loginRappi());
    if (wsLogin.access_token != undefined) {
        global.accesstoken = wsLogin.access_token;
    } else {
        global.errorKey = wsLogin.error.key;
    }
    res.send(wsLogin);
});


router.get('/validarCodigoEmail/:code', async (req, res) => {
    var code = req.params.code;
    var wsLogin = await Promise.resolve(loginWsRappiHelper.validarCodigoEmail(code));
    if (wsLogin.access_token != undefined) {
        global.accesstoken = wsLogin.access_token;
    }
    res.send(wsLogin);
});


module.exports = router;