//var Emitter = require("./emitter"); // Se comenta la funcion hecha anteriorimente

var Emitter = require("events"); //Se utiliza el Emitter de NODE JS

var config = require("./config"); //Se inyecta la dependencia del archivo config

//Cuando se ejecuta casi no hay cambios a la hora de imprimir el codigo mas que con una linea que es la que imprime el console.log(emtr) ya que lo toma como evento y aparecen multiples lineas que no se habian visto antes como el un elemento oculto (_events) que da como resultado [Object: null prototype], tambien hay un _eventsCount con 2, un _maxListeners con indefinido y un [Symbol(kCapture)]: false

var emtr = new Emitter();

emtr.on(config.events.GREET, () => {
  console.log("Somewhere, someone said hello.");
}); //Se cambia la llamada al metodo con el objetivo de utilizar el modulo contruido en el archivo config para poner en practica las buenas costumbres de los desarrolladores para evitar errores con la conolcacion de los tipos de valores correctamente

emtr.on(config.events.GREET, () => {
  console.log("A greeting occurred!");
});

console.log("Hello!");
emtr.emit(config.events.GREET);

emtr.on(config.events.JUMP, () => {
  console.log("someone jumped!");
});

console.log(emtr);
emtr.emit(config.events.JUMP);

// Se ha cambiado todas las llamadas al modulo y los cambios fueron nulos ya que estan recibiendo el mismo string solamente de la primera manera era colocado de manera directa pero ahora lo solicita al archivo config y lo coloca en el lugar que corresponde.
