const fetch = require('node-fetch');

class ConsumirWSSingleton {

    static consumirWSSingleton = new ConsumirWSSingleton();

    static getInstance(){
        return this.consumirWSSingleton;
    }

    static METHOD_POST = 'POST';
    static METHOD_GET = 'GET';
    static GLOBAL_HEADERS_POST = {
        'Accept': 'application/json, text/plain, */*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'es-CO',
        'Access-Control-Allow-Headers' :'*',
        'Access-Control-Allow-Origin':'*',
        'Connection': 'keep-alive',
        'Content-Length': '152',
        'Content-Type': 'application/json',
        'deviceid': "1d4a1dcb-b781-4bdc-8d36-52994b4e05e3",
        'ignoreRefreshToken':'true',
        'ignoreToken':'false',
        'needAppsFlyerId':'false',
        'sec-ch-ua': '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
        'sec-ch-ua-mobile': '?0',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'cross-site',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:91.0) Gecko/20100101 Firefox/91.0',
        'x-braze-api-key': 'f6a1117f-52de-444c-9fbd-49d465e7f80e',
        'x-braze-datarequest': 'true',
        'x-braze-triggersrequest': 'true',
        'x-requested-with': 'XMLHttpRequest'
    };
    static GLOBAL_HEADERS_GET = {
        'Accept': 'application/json, text/plain, */*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'es-CO',
        'Access-Control-Allow-Headers' :'*',
        'Access-Control-Allow-Origin':'*',
        'Connection': 'keep-alive',
        'deviceid': "1d4a1dcb-b781-4bdc-8d36-52994b4e05e3",
        'ignoreRefreshToken':'true',
        'ignoreToken':'false',
        'needAppsFlyerId':'false',
        'sec-ch-ua': '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
        'sec-ch-ua-mobile': '?0',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'cross-site',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:91.0) Gecko/20100101 Firefox/91.0',
        'x-braze-api-key': 'f6a1117f-52de-444c-9fbd-49d465e7f80e',
        'x-braze-datarequest': 'true',
        'x-braze-triggersrequest': 'true',
        'x-requested-with': 'XMLHttpRequest'
    };


    extenderHeader(dest, globalHeaders) {
        for (var key in globalHeaders) {
            dest[key] = globalHeaders[key];
        }
        return dest;
    }


    /**
     * Metodo para consumir WS externos y que imprimie todos los responses en los logs del servidor
     * @param {*} url Url externo a consumir 
     * @param {*} method Tipo de consumo servicio (REST/POST)
     * @param {*} body cuerpo del mensaje JSON
     * @param {*} headers headers del responde
     * @returns 
     */
    async consumirWS(url, contentRequest) {
        console.log('---------------------------------------------------------------------------------------------------------------');
        console.log('URL -------> ', url);
        console.log('Method ----> ', contentRequest.method);
        console.log('Body ------> ', contentRequest.body);
        const response = await fetch(url, contentRequest);
        const jsonResponse = await response.json();
        console.log('Response --> ', jsonResponse);
        console.log('---------------------------------------------------------------------------------------------------------------');
        return jsonResponse

    }


}

module.exports = ConsumirWSSingleton;