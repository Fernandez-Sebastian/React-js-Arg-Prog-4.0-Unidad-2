# React-js-Arg-Prog-4.0-Unidad-2 Ejercicio 2
Argentina programa 4.0 React js
Curso Argentina Programa 4.0 React Js

Profesor: José Luis Condori

Alumno: Fernández Sebastián Gustavo Ezequiel


Link Deploy: https://fernandez-sebastian.github.io/React-js-Arg-Prog-4.0-Unidad-2/ 


Enunciado N°1:
Tengo desarrollada la siguiente función en javascript

function suma (a,b,callback){  
   let c = a +b;  
   callback();  
}
¿Que es el tercer parámetro recibido?

-El tercer parametro recibido es una función que se pasa como argumento. El propósito de un callback es permitir que una función sea ejecutada después de que otra función haya finalizado su ejecución. 
  En este caso se ejecuta despues de calcular c. pero al no tener parametros, se invoca sin argumentos.

¿En que casos es obligatorio desarrollar este tipo de funciones?

-Cuando se trabaja en situaciones donde las oepraciones no se realizan de manera secuencial.

Realizar un llamado a la función de ejemplo.

-Se peude usar en este caso para cualquier operacion de dos numeros (sumar restar dividir multiplicar).
  En el ejemplo de mas abajo, hace la multiplicacion de a y de b y con callback la muestra por pantalla.

function multiplicar (a,b,callback){
    let c = a * b;
    callback(c);
}

Enunciado N°2:
Desarrollador una calculadora que tenga:

2 campos inputs para los operadnos.
4 botones de operadores básicos (suma, resta, multiplicación, división).
Al realizar la cuenta se deberá actualizar el campo resultado.


Comentarios: 
-La calculadora puede saber que signo va entre dos numeros, aunque presiones muchos signos, dejando como correcto el ultimo ingresado.





