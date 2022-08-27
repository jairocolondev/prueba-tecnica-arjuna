// ------------------------ PARTE # 1 ---------------------------------- //
// 1. ¿Qué es un array?  ****MALA*****

/*TU RESPUESTA:

un contenedor que puede tener varios tipos de datos 

*/



// 2. ¿Qué es un objeto?  ****MALA*****

/*TU RESPUESTA:

es un elemento con propiedades y caracteristicas

*/



// 3. ¿Cuándo es mejor usar objetos o arrays? ****BUENA*****

/*TU RESPUESTA:

Los objetos los utilizamos cuando tenemos varios tipos de datos y propiedades , un array lo usamos cuando tenemos los mismos tipos de datos 

*/



// 4. ¿Puedo mezclar arrays con objetos o incluso objetos con arrays? ****BUENA*****

/*TU RESPUESTA:

si

*/




// ------------------------ PARTE # 2 ---------------------------------- //
// 1. Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento. ****MALA*****



function TengoEsto(elemento1){
  let elementoCasa = ["Nevera", "Lavadora", "Licuadora", "Escritorio"]
 console.log(elemento1)
}
elemento1(elementoCasa[1]);

// 2. Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo). ****MALA*****

function TengoEsto(elementos){
   console.log(elementos[0],elementos[1],elementos[2],elementos[3])
  }
  TengoEsto(elementoHabitacion["Closet", "Cama","Cobijas", "Mesa de Noche"]);


// Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).****MALA*****

let partesComputador = {
       
    parte1: pantalla,
    parte2: teclado,
    parte3: procesador, 
}

function estoEsDeMiComputador(){
    let todasLasPartes = partesComputador.parte1 + partesComputador.parte2 + partesComputador.parte3;
    console.log(todasLasPartes)
}
estoEsDeMiComputador();