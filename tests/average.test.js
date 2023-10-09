const { average } = require('../utils/for_testing'); //aqui defino la funcion

//cuando hacemos metodos matematicas temos que considerar si viene cero

describe('average', () => { // describe te recibe todo en lote  y te permite agrupar las pruebas
  //te describe todas las validaciones de la funcion average
  //Es prueba unitaria porque estamos probando una sola funcion
  test('of one value is the value itself', () => {
    expect(average([1])).toBe(1);//expect es el valor de entrada y el tobe lo que debe hacer
  });

  test('of one value is the multiple values', () => {
    expect(average([1, 2, 3, 4, 5, 6])).toBe(3.5);
  });
  
  test('of empty array is zero', () => {
    expect(average([])).toBe(0);
  });

});


