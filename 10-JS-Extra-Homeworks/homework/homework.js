// No cambies los nombres de las funciones.

const { straightThroughBufferTask } = require("simple-git/src/lib/tasks/task")

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var bigarray = []
  var littlearray = []
  var other = []


  for (const key in objeto) {
    
    littlearray.push(key)
    littlearray.push(objeto[key])
    other = littlearray.splice(0,2)
    bigarray.push(other)    
  } 
  return bigarray
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí'
  var object = {}
  for (let index = 0; index < string.length; index++) {
    if ( object[string[index]] === undefined ){
      object[string[index]] = 1
    }else {
      object[string[index]]= object[string[index]] + 1
    }
    
  }
  return object
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var letterUpp = ""
  var letterLow = ""
  for (let index = 0; index < s.length; index++) {
    if (s[index].match(/[A-Z]/) !== null ){
      letterUpp = letterUpp + s[index]
    }else{
      letterLow = letterLow + s[index]
    }
  }
  return letterUpp + letterLow
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí:
  
   
  return str.split('').reverse().join('').split(' ').reverse().join(' ')

  
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  
  if ( numero.toString().split('').reverse().join('')==numero ){
    return "Es capicua"
  }else{
    return "No es capicua"
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let array_cadena = cadena.split("")
  let array_clean = ""
  for (let index = 0; index < array_cadena.length; index++) {
    if (array_cadena[index]!=="a" && array_cadena[index]!=="b" && array_cadena[index]!=="c"){
      array_clean = array_clean + array_cadena[index]
    }else{
      continue
    }
  }
  return array_clean
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  let trigger = 0
  let array_sort = []
  for (let index = 0; index < arr.length; index++) {
    if(index === 0 ){
      trigger = arr[index].length
      array_sort.push(arr[index])
    }else if(arr[index].length>trigger){
      array_sort.push(arr[index])

    }else if(arr[index].length === arr[index-1].length) {

    }else{
      array_sort.unshift(arr[index])
    }
  }
  return array_sort
}



function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

