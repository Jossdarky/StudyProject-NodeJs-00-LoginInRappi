
# Node.JS Login Rappi 

![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)

Este proyecto tiene como finalidad realizar un aplicativo el cual pueda iniciar sesión en el API de Rappi. Es importante aclarar que **es un proyecto personal y de aprendizaje propio** para el uso de Node.js y Express

## Features

- Crear esqueleto MVC en Node.js .(80%)
- Conectar con la pagina de rappi.(100%)
- Modificar la direccion fisica que se guarda en la sesion de la pagina de rappi (10%)
- Obtener y realizar validaciones de cobertura sobre 5km a la redonda de un punto establecido por Foodology ubicado en Cali, Colombia.
- Emplear API de google para parsear la direccion fisica a coordenadas de georeferenciacion.

## Tech

Este proyecto utiliza varios proyectos de código abierto para funcionar correctamente:

- node.js
- Express
- bootstrap
- hbs
- jquery
- node-fetch
- nodemon
- Rappi Api

## Installation
- Descargar el proyecto
- Ejecutar el comando 
```sh
npm run developer
```
- En un navegador entrar a la url 
```sh
localhost:9222
```

## Instructions

### Login

- El sistema de autenticacion de Rappi empleado para este proyecto solo es posible realizarlo si ya se cuenta con un usuario previamente registrado en Rappi y vinculada a un correo electronico y un numero telefonico. 
- El sistema de autenticacion empleado es por medio de mensajes de texto, por lo que es necesario colocar el numero telefonico en el campo telefono y presionar el boton Enviar SMS. Esto generará que se emplee un servicio web de Rappi y a su vez, Rappi enviará un SMS con un codigo de verificacion al numero celular.
- En el campo Codigo SMS se ingresa el codigo recibido al celular y se presiona el boton Validar codigo SMS. Esto consumira un Ws de rappi que validara dicho codigo y despues procedera a realizar el loguin en la plataforma. En caso de tener diversos reintentos erroneos, multiples sesiones abiertas o codigos de verificacion por SMS sin verificar. Rappi envia un codigo de verificacion al correo electronico.
- - Si se envia el correo electronico con un codigo de verificacion, este debe ser ingresado en el campo Codigo email, y seguido de esto, presionar el boton Validar codigo email. Esto completara el proceso de autenticacion de 2 pasos que en ocaciones Rappi solicita.

### Cambio direccion

EN CONSTRUCCION


## WEB SERVICES RAPPI

- Envio de sms
```sh
https://services.grability.rappi.com/api/twilio-auth/verification-code/v2/send
```

- Validacion codigo SMS
```sh
https://services.grability.rappi.com/api/twilio-auth/verification-code/v2/check?phone='+telefono+'&country_code=+57&code='+code+'&uuid='+uuid
```

- Login
```sh
https://services.grability.rappi.com/api/rocket/login/twilio/application_user
```

- Validacion codigo email
```sh
https://v2.grability.rappi.com/api/rocket/login/twilio/application_user
```

- Nueva direccion
```sh
https://services.grability.rappi.com/api/ms/address/autocomplete?lng='+longitud+'&lat='+latitud+'&text='+direccionTexto'
```


<!-- LICENSE -->
## License

Distributed under the Apache License 2.0 . See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

### Jose Palomino
LinkedIn - https://www.linkedin.com/in/palominoajose/
Torre.co - https://torre.co/en/Jossdarky
Email - joss.palomino@gmail.com

