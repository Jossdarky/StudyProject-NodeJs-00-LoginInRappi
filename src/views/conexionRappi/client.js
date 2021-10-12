

function printLog(log) {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  $("#logInfo").val($("#logInfo").val() + today.toUTCString() + ' ->' + log + '.\n');
}

printLog('Client-side code running');



/**
 * Click boton SMS
 */
$("#enviarSMSButton").on("click", function () {

  var url = "/server/solicitarCodigoSMS/" + $("#telefonoInput").val();
  $.ajax({
    url: url,
    type: "GET",
    datatype: "json",
    success: function (data) {
      printLog("**** La función de devolución de llamada se realizó correctamente");
      printLog("**** " + JSON.stringify(data));
    },
    error: function () {
      printLog("**** " + "Error en la solicitud del servidor");
    },
    beforeSend: function () {
      printLog("Consumiendo del server " + url);
    }
  });

  $("#step2").css('visibility', 'visible');
});


/**
 * Click boton Codigo sms
 */
$("#validarCodeSMSButton").on("click", function () {

  var url = "/server/validarCodigoSMS/" + $("#codeSMSInput").val();
  $.ajax({
    url: url,
    type: "GET",
    datatype: "json",
    success: function (data) {
      printLog("**** La función de devolución de llamada se realizó correctamente");
      if (data.error != undefined) {
        $("#step2p2").css('visibility', 'visible');
      } else {
        $("#step3").css('visibility', 'visible');
      }
      printLog("**** " + JSON.stringify(data));
    },
    error: function () {
      printLog("**** " + "Error en la solicitud del servidor");
    },
    beforeSend: function () {
      printLog("Consumiendo del server " + url);
    }
  });

});

/**
 * Click boton Codigo email
 */
$("#validarCodeEmailButton").on("click", function () {

  var url = "/server/validarCodigoEmail/" + $("#codeEmailInput").val();
  $.ajax({
    url: url,
    type: "GET",
    datatype: "json",
    success: function (data) {
      printLog("**** La función de devolución de llamada se realizó correctamente");
      $("#step3").css('visibility', 'visible');
      printLog("**** " + JSON.stringify(data));
    },
    error: function () {
      printLog("**** " + "Error en la solicitud del servidor");
    },
    beforeSend: function () {
      printLog("Consumiendo del server " + url);
    }
  });

});


