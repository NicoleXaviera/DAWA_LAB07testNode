const { palindrome } = require('../utils/for_testing');

//aqui estamos testeando todo de forma individual

//cuando tenemos metodos que recibe string tenemos que testear y considerar si viene nada y vacio
test('palindrome of avion', () => {
  const result = palindrome('avion'); 
  expect(result).toBe('noiva'); //tobe recibe el resultado esperado de lo que recibe el palindrome
});

test('palindrome of empty string', () => {
  const result = palindrome(''); 
  expect(result).toBe('');  //tobe recibe el resultado esperado de lo que recibe el palindrome
});

test('palindrome of undefined', () => {
  const result = palindrome(undefined); 
  expect(result).toBeUndefined(); //toBeUndefined verifica si es undefined 
  //una cosa es pasar una cadena vacia y otra es pasarle nada que es indefinido es diferente a un vacio 
});


//primero
//las cadenas siempre se validad por dos parametros, que pasa si viene vacio y que pasa si viene nada
//testeamos los resultados las salidas