// ------------------------ PARTE # 1 ---------------------------------- //
// Responde las siguientes preguntas a continuación:

// 1. ¿Qué es un ciclo? //

/*TU RESPUESTA:

  es un proceso que ser repite varias veces hasta llegar a encontrar una respuesta verdadera o falsa o llegar a un resultado especifico

*/



// 2. ¿Qué tipos de ciclos conoces en JavaScript? //

/*TU RESPUESTA:

for 

*/



// 3. ¿Qué es un ciclo infinito y por qué es un problema? //

/*TU RESPUESTA:

un ciclo infinito es un ciclo que no para hasta no encontrar una respuesta o resultado adecuado entonses seguira repitiendose, es un problema por que la memoria tiene un espacio finito por el cual si no se para colapsara el computador 

*/



// 4. ¿Puedo mezclar ciclos y condicionales? //

/*TU RESPUESTA:

si


*/



// 5. Escribe la sintaxis de un ciclo for //

/*TU RESPUESTA:

for ( i = 0; i <= Objeto ; i++ ){}

*/



// ------------------------ PARTE # 2 ---------------------------------- //

// Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 10 + 10. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, muestras un mensaje de incorrecto vuelve a intentarlo.//

// TU RESPUESTA:

let  Suma = prompt("Cuanto es 10 + 10");

for ( i = 0; i === Suma; i++){
    console.log("Felicitaciones");
}

// for ( i = 20; i != Suma; i++){
//     console.log("Incorrecto Vuelve a Intentar");
// }

