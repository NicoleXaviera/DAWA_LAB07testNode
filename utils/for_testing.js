const palindrome = (string) => { // Función para verificar si una cadena es un palíndromo
    if (typeof string === 'undefined') return;   // Comprobamos si la cadena es indefinida y, en ese caso, retornamos undefined
    return string
      .split("")
      .reverse()
      .join("");//lo vuelve un array, lo invierte y lo vuelve a unir
  };
  
  // Función para calcular el promedio de un arreglo de números
  const average = (array) => { //recibe un array
    let sum = 0;
    if(array.length === 0) return 0; // Si el arreglo está vacío, retornamos 0
    array.forEach((num) => {
      sum += num;
    });
    return sum / array.length;//si le mandamos 0 elementos nos va a dar un error porque no se puede dividir entre 0
  };
  
  module.exports = { // Exportamos las dos funciones para que puedan ser utilizadas en otros archivos
    palindrome,
    average,
  };
  
  
  