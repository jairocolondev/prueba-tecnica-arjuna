// ------------------------ PARTE # 1 ---------------------------------- //
// RESPONDE LAS SIGUIENTES PREGUNTAS //

// 1. ¿Qué es una función? //

/*TU RESPUESTA:

Es un bloque con instrucciones para realizar una tarea o calcular un valor ****BUENA*****

*/


// 2. ¿Cuales son las clases de funciones que tenemos? -- Escribe la sintaxis  ****BUENA*****

/*TU RESPUESTA:

declaracion es una funcion que utiliza la palabra reservada function y se le asigna un nombre  
expresion es una funcion dentro de una variable puede ser anonima 

function declarativa(){

}

let unaFuncion = espresiva(){

}


*/


// 3. ¿Cuándo me sirve usar una función en mi código?  ****BUENA*****

/*TU RESPUESTA:

cuando nesecito realizar varias tareas o calcular valores en un mismo codigo o en su defecto para hacer el codigo mas claro y entendible  

*/



// 4. ¿Cuál es la diferencia entre parámetros y argumentos de una función?  ****BUENA*****

/*TU RESPUESTA:

los parametros de una funcion es el nombre que le damos para identificar un argumento 
los argumentos son el dato o el valor del parametro 

parametrosSintaxis --- function informacionUnsuario(parametro1,parametro2){

}

argumentosSintaxis --- informacionUsuario("Rafael","Perez");
*/


// ------------------------ PARTE # 2 ---------------------------------- //
//Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:   ****MALA*****

// let name = "Jairo";
// let lastname = "Colón";
// let nickname = "Jey Colón";
// let completeName = name + lastname;

// console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

function informacionUsuario(name,lastname,nickname){
     let completeName = name + lastname;
     console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".")
     
}
informacion("Jairo ", "Colón", "nickname");