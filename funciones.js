// ------------------------ PARTE # 1 ---------------------------------- //
// RESPONDE LAS SIGUIENTES PREGUNTAS //

// 1. ¿Qué es una función? //

/*TU RESPUESTA:

Es un bloque con instrucciones para realizar una tarea o calcular un valor 

*/


// 2. ¿Cuales son los tipos de funciones que tenemos? -- Escribe la sintaxis //

/*TU RESPUESTA:

var es una variable que es compatible con la mayoria de los navegadores, se puede cambiar y usar en varios bloques
let es una variable que se puede cambiar varias veces dentro del mismo bloque 
const es una variable  que no se puede cambiar y solo se puede usa dentro del mismo bloque 

Var saludo ={}
let saludo ={}
Const saludo ={}


*/


// 2. ¿Cuales son las clases de funciones que tenemos? -- Escribe la sintaxis //

/*TU RESPUESTA:

declaracion es una funcion que utiliza la palabra reservada function y se le asigna un nombre  
expresion es una funcion dentro de una variable puede ser anonima 

function declarativa(){}

let unaFuncion = espresiva(){}


*/


// 3. ¿Cuándo me sirve usar una función en mi código? //

/*TU RESPUESTA:

cuando nesecito realizar varias tareas o calcular valores en un mismo codigo o en su defecto para hacer el codigo mas claro y entendible  

*/



// 4. ¿Cuál es la diferencia entre parámetros y argumentos de una función? //

/*TU RESPUESTA:

los parametros de una funcion es el nombre que le damos para identificar un argumento 
los argumentos son el dato o el valor del parametro 

parametrosSintaxis --- function informacionUnsuario(parametro1,parametro2){

}

argumentosSintaxis --- informacionUsuario("Rafael","Perez");
*/


// ------------------------ PARTE # 2 ---------------------------------- //
//Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función: //

let name = "Jairo";
let lastname = "Colón";
let nickname = "Jey Colón";
let completeName = name + lastname;

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

function informacionUsuario(name,lastname,nickname){
     let completeName = name + lastname;
     console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".")
     
}
informacion("Jairo ", "Colón", "nickname");