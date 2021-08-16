const ConsumirWSSingleton = require('./consumirWSSingleton');

class LoginWsRappiHelper {

	/**
	 * Metodo para consumir el WS de Rappi para autenticarse via sms de la pagina web
	 * @param {*} phone telefono al cual se enviara el mensaje de texto de autenticacion
	 * @returns 
	 */
	solicitarCodigoSMS(phone) {
		var url = 'https://services.grability.rappi.com/api/twilio-auth/verification-code/v2/send';
		var method = ConsumirWSSingleton.METHOD_POST;
		var body = JSON.stringify({ "phone": phone, "country_code": "+57", "via": "sms", "locale": "es" });
		var headers = ConsumirWSSingleton.GLOBAL_HEADERS_POST;
		var contentRequest = {
			method: method,
			body: body,
			headers: headers
		};
		return ConsumirWSSingleton.getInstance().consumirWS(url, contentRequest);
	}


	validarCodigoSMS(code) {
		var url = 'https://services.grability.rappi.com/api/twilio-auth/verification-code/v2/check?phone=' + global.telefono + '&country_code=+57&code=' + code + '&uuid=' + global.uuid;
		var method = ConsumirWSSingleton.METHOD_GET;
		var headers = ConsumirWSSingleton.GLOBAL_HEADERS_GET;
		var contentRequest = {
			method: method,
			headers: headers
		};
		return ConsumirWSSingleton.getInstance().consumirWS(url, contentRequest);
	}


	loginRappi() {
		var url = 'https://services.grability.rappi.com/api/rocket/login/twilio/application_user';
		var method = ConsumirWSSingleton.METHOD_POST;
		var body = JSON.stringify({ "phone": global.telefono, "country_code": "+57", "id": global.telefono, "accessToken": global.uuid, "scope": "all", "social_id": global.telefono });
		var headers = ConsumirWSSingleton.getInstance().extenderHeader({
			'ignorerefreshtoken': 'false, true'
		},ConsumirWSSingleton.GLOBAL_HEADERS_POST);
		var contentRequest = {
			method: method,
			body: body,
			headers: headers
		};
		return ConsumirWSSingleton.getInstance().consumirWS(url, contentRequest);

	}


	validarCodigoEmail(code) {
		var url = 'https://v2.grability.rappi.com/api/rocket/login/twilio/application_user';
		var method = ConsumirWSSingleton.METHOD_POST;
		var body = JSON.stringify({ "phone": global.telefono, "country_code": "+57", "id": global.telefono, "accessToken": global.uuid, "scope": "all", "social_id": global.telefono });
		var headers = ConsumirWSSingleton.getInstance().extenderHeader({
			'x-two-factor-auth': global.errorKey,
			'x-two-factor-code': code
		},ConsumirWSSingleton.GLOBAL_HEADERS_POST);
		var contentRequest = {
			method: method,
			body: body,
			headers: headers
		};
		return ConsumirWSSingleton.getInstance().consumirWS(url, contentRequest);
	}




	consumirWsSeguridad() {
		var url = 'https://sdk.iad-03.braze.com/api/v3/data/';
		var method = ConsumirWSSingleton.METHOD_POST;
		var body = JSON.stringify({
			"respond_with": {
				"triggers": true,
				"config": {
					"config_time": 0
				}
			},
			"events": [
				{
					"name": "ss",
					"time": Date.now(),
					"data": {

					},
					"session_id": "257a0c97-3fb4-187d-6e40-9ee90dec28b8"
				}
			],
			"device": {
				"browser": "Chrome",
				"browser_version": "92.0.4515.131",
				"os_version": "Windows",
				"resolution": "2048x1152",
				"locale": "en-us",
				"time_zone": "America/Bogota",
				"user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36"
			},
			"api_key": "f6a1117f-52de-444c-9fbd-49d465e7f80e",
			"time": Date.now(),
			"sdk_version": "2.4.3",
			"device_id": "7be3a230-10ae-02cd-7ba4-94216bf11a7b"
		});
		var headers = ConsumirWSSingleton.GLOBAL_HEADERS_POST;
		var contentRequest = {
			method: method,
			body: body,
			headers: headers
		};
		return ConsumirWSSingleton.consumirWS(url, contentRequest);
	}




}


module.exports = LoginWsRappiHelper;