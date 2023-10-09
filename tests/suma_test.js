//esto si es que lo hago manualmente
const suma = (a, b) => {
    return a + b;
}

const check = [
    {a:0 , b:0, result:0},
    {a:3 , b:1, result:2},
    {a:2 , b:2, result:4},

]

check.forEach((check) => {
    const{a,b,resultado} = check;
    console.assert(
        suma(a,b) === resultado,
        `suma de ${a} y ${b} deberia ser ${resultado}`);
    })
    console.log($check.length + ' pruebas pasaron');
