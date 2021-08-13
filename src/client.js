console.log('Client-side code running');

const button = document.getElementById('enviarSMSButton');
button.addEventListener('click', function(e) {
  console.log('enviarSMSButton was clicked');

  fetch('/enviarSMS', {method: 'POST'})
    .then(function(response) {
      if(response.ok) {
        console.log('click was recorded');
        return;
        
      }
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    });
});

setInterval(function() {
  fetch('/enviarSMS', {method: 'GET'})
    .then(function(response) {
      if(response.ok) return response.json();
      throw new Error('Request failed.');
    })
    .then(function(data) {
      document.getElementById('infoSMS').innerHTML = `mensaje SMS enviado a `;
    })
    .catch(function(error) {
      console.log(error);
    });
}, 1000);