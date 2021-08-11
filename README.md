# Proyecto-Lenguajes-en-WWW---Equipo-11

## Entrega primera semana

![diagramas](https://user-images.githubusercontent.com/34004989/127600153-1d2264f7-50c7-4a57-ab92-2d517899aed9.png)

### REACT
* El mantenedor en React consiste de 4 componentes principales. Un index desde donde se instancia el componente principal App, desde el cual se instancian un componente Formulario y un componente Lista.
* El componente formulario guarda datos de encuesta para luego ser guardados por una peticion POST a la API REST. El componente Lista a través de una petición GET a la API obtiene las encuestas existentes para mostrarlas.
* El diagrama de componentes muestra la comunación entre las 3 partes principales del proyecot: Un forntend en React, que se comunica con una API Gateway, la cual utiliza funciones Lambda para manejar las peticiones.

### API
La API consta del recurso encuesta con 2 métodos asociados: GET y POST. Cada uno de estos posee un endpoint para que el frontend solicite las operaciones correspondientes en relación a los objetos tipo encuesta.

### AWS
El componente de AWS hace uso del servicio Lambda para la computación de respuestas y el servicio DynamoDB para el almacenamiento persistente en la nube.

* Cuando un mensaje del tipo GET llega desde la API esta instancia la función getEncuenta, que se encargará de obtener los datos usando la interfaz resource que provee el sdk de aws para python. Luego se creará un objeto parseable a JSON que se devolverá al componente de la API.
* Cuando un mensaje del tipo POST llega desde la API esta instancia la función postEncuesta, que se encargará de insertar los datos usando la interfaz resource que provee el sdk de aws para python. Para esto no es necesario crear un objeto especial pues la interfaz  resource trabaja con datos nativos de python. La funcin retorna un mensaje 200 si logró insertar los datos.
