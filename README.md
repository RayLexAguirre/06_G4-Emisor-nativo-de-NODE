![Logo](img/ucol-logo.jpg)

# Práctica 6: Emisor nativo de NODE

> Primera Parcial

- FACULTAD DE TELEMATICA
- INGENIERÍA EN SOFTWARE
- “4ºG”
- PROGRAMACIÓN WEB
- CATEDRATICO: ULIBARRI IRETA CARLOS
- AGUIRRE ROMERO RAMÓN ALEJANDRO

## OBJETIVO

- Javascript Modules
- Node Modules

> ENTREGA: DOMINGO 13 DE MARZO DEL 2022

## INFORMACIÓN ADICIONAL

Ahora vamos a utilizar el “event emitter” propio de NODE JS. Debido a que los Custom events, son manejados por este mecanismo, NODE JS proporciona un módulo que contiene un “event emitter” más robusto y probado.

Por último haremos una pequeña mejora al código incluyendo el concepto de “magic strings”. En la forma actual de nuestro código, hay una parte que es muy susceptible a errores de escritura o “typos” que son muy difíciles de detectar. Para evitar eso, la buena práctica entre los desarrolladores de software es crear un archivo “config.js” y “mapear” un nombre de variable a un string, de tal forma, que el string como tal, tiene su valor en un solo lugar de nuestro código y podemos referirnos al string mediante la notación del punto sin la necesidad de escribir el contenido del string todas las veces.

## EXPLICACIÓN DEL PROCESO

1. Esta es la continuacion de la practica 5 por lo que tamaremos todo el codigo que se encuentra en el directorio "emisor"

2. Ahora en lugar de utilizar el require('./emitter') utilizaremos require('events') que es el "Event emitter" de NODE JS de esa manera podremos utilizarlo

3. Pruebalo con Node app y comenta el resultado

4. Para continuar se crea un archivo config.js ingresando un module.exports el cual contendra un objeto llamado events y dentro de este se colocaran los elementos GREET y JUMP, en su contenido tendrean el string nesesario para invocar ese elemento en el otro objeto.

5. Inyectar la dependencia de config.js en app.js

6. Ahora todas las llamadas a metodos dentro de app.js deberan ser cambiadas de tener el string ('greet') a tener el metodo para obtener el string (config.events.GREET), Esto debera ser realizado con GREET y JUMP

7. Para funalizar ejecuta node app y explica el resultado
