//---PARA ESTOS EJERCICIOS TIENES QUE HACER UNO POR UNO PARA QUE PUEDAS PROBAR EL RESULTADO---//



/* EJERCICIO N° 1*/
/* Crea un objeto user y agregar las siguientes propiedades:
(
nombre, 
apellido, 
edad, 
ubicación {
  país
  ciudad
  dirección
},
amigos: ["amigo 1", "amigo 2", "amigo 3"],
active:
sendMail() {
  devolver un mensaje de enviando email...
}

Acceder a cada propiedad y mostrar su valor

) */

// let user = {
//   nombre: "Laura ",
//   apellido: "Perez ",
//   edad: 30 ,
//   ubicacion: {
//     pais: "Colombia ",
//     ciudad: "Bucaramanga ",
//     direccion: "calle 23 # 12 54 ",
//   },
//   amigos: ["Roberto, ", "Juanita, ", "Juan. "],
//   active: true,
//   sendmail(){
//     return "enviando mensaje..."
//   }
// }


// let userInformation = user.nombre + user.apellido + user.ubicacion.pais + user.ubicacion.ciudad + user.ubicacion.direccion + user.amigos[0] +user.amigos[1] + user.amigos[2] + user.active + user.sendmail;
// console.log(userInformation)


/* EJERCICIO N° 2*/
//Agregar, un elemento al principio del array, Agregar, un elemento al final del array, y mostrar por consola
//Eliminar el último elemento y luego eliminar el primer elemento
//Recorrer el array e imprimir el elemento en la tercera posición
//Eliminar un elemento a partir de la posición 2 del array,

 const lenguajes = ["JavaScript", "Python", "Go", "Java", "C++", "C+", "Kotlin"]
       let agregarUnElemento = lenguajes.unshift("HTML");
       let eliminarUltimoElemento = lenguajes.pop();
       let eliminarPrimerElementlo = lenguajes.shift();
       let Recorrerarray = lenguajes[2];
       let pos = 1;
       let EliminarUnElemento = lenguajes.splice(2,pos)
      console.log(lenguajes);
      console.log(Recorrerarray);
      console.log(EliminarUnElemento);












