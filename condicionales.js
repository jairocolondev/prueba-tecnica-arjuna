// ------------------------ PARTE # 1 ---------------------------------- //
// Responde las siguientes preguntas en la sección de comentarios:

// 1. ¿Qué es un condicional? //

/*TU RESPUESTA:

una condicional es aquella que nos evalua si es verdadero o falso 

*/

// 2. ¿Qué tipos de condicionales conoces en JavaScript y cuáles son sus diferencias? //

/*TU RESPUESTA:

if nos dice si se cumple la condicion siendo verdadero o falsa

if else nos dice si se cumple la condicion siendo verdadera o falsa 

else nos dice si no se cumple ninguna condicion   

*/



// 3. ¿Puedo combinar funciones y condicionales? //

/*TU RESPUESTA:

si

*/


// ------------------------ PARTE # 2 ---------------------------------- //

// Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:
const typeSubcription = "Basic";

switch (typeSubcription) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis de CreatiVo Digital");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de CreatiVo Digital durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de CreatiVo Digital durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de CreatiVo Digital durante un año");
       break;
}


const tipoSubscripcion = "Basico";

if (tipoSubscripcion == "Gratis") {
       console.log("Solo puedes tomar los cursos gratis de CreatiVo Digital");
}else if(tipoSubscripcion == "Basico"){
       console.log("Puedes tomar casi todos los cursos de CreatiVo Digital durante un mes");
    }else if (tipoSubscripcion == "Experto"){
       console.log("Puedes tomar casi todos los cursos de CreatiVo Digital durante un año");
    }else if (tipoSubscripcion == "ExpertoPlus"){
       console.log("Tú y alguien más pueden tomar TODOS los cursos de CreatiVo Digital durante un año");
    }else {
        console.log("No Quiero ningun plan")
    }

// Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if). 
// Tu puedes ser capaz de hacer este desafío con arrays u objetos y un solo condicional. 😏

const Subscripciones = {
    planes: ["Gratis", "Basico", "Experto", "ExpertoPlus"]
}

if (planes[1] == "Basico" ){
    console.log("Perfecto adquiriste el plan basico");
}