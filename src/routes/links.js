const express = require('express'),
    router = express.Router(),
    LoginWsRappiHelper = require('../helperWS/loginWsRappiHelper');

var loginWsRappiHelper = new LoginWsRappiHelper();

const headerSecChUa = '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"';
const headerUserAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36';
global.accesstoken = 'TOKEN:ft.gAAAAABhHx0cxM_zPGN-OxH7bXeiU4odRF4rKuSeF1NOhaO9QaiTYwrOAFDWXt3tyyN_0JvAxiAHbg5NYPPfO0QOTEp2sy6CydRiBpbmUZWo3d88xKOMZHD4McSDwCMbaEnrvzO7xI6VwVtx8xw_ZBYOx2-SMPBmQ6JyqAV8x7tZ-e5Ttgs75p7UUK_lCfyANqP6TDXom3XMvciXeWI4EoJId7s5hFq6o2tYioRKzqoqWeZJuC4rz27IfF0YyvzaKM0YAfNpREEEFCRvrtcP9JyKzJBWPtXkieY3DvFjggmrWDXeE-4-H-BFOFNtsc75g_mjx-1VKLQtfkl4AapYYxQbteBec3bHNR_K6II0l6tmlhDCw3j6Z2w=';
global.telefono = '';
global.uuid = '';

/**
 * Ruta expuesta para el cliente que se autentica via sms en la pagina de Rappi
 */
router.get('/solicitarCodigoSMS/:telefono', async (req, res) => {
    var telefono = req.params.telefono;
    var wsMensaje = await Promise.resolve(loginWsRappiHelper.solicitarCodigoSMS(telefono));
    
    if(global.accesstoken.startsWith("TOKEN:")){

    }else{
        //  var wsMensaje = await Promise.resolve(LoginWsRappiHelper.consumirWsSeguridad());
        global.telefono = telefono;
        global.uuid = wsMensaje.sid;
    }

    
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

router.get('/obtenerPosicionRecomendada/:latitud/:longitud', async (req, res) => {
    var latitud = req.params.latitud;
    var longitud = req.params.longitud;
    var wsLogin = await Promise.resolve(loginWsRappiHelper.obtenerPosicionRecomendada(latitud,longitud));
    res.send(wsLogin);
});

/**
 * 3.4242814233739614
 */

module.exports = router;