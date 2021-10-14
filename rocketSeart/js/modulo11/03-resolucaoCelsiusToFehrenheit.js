/*
Crie uma função que receba uma string em celsius ou fahrenheit
e faça a transformação de uma unidade para outra 
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32
*/


// Celsius for Fahrenheit
const fahrenheit = (celsius) => (celsius * 1.8 + 32)
console.log(`Fahrenheit ${fahrenheit(2)}`)//pass the amount of degrees



// Fahrenheit for Celsius
const celsius = (fahrenheit) => ((fahrenheit - 32) * 0.55555)
console.log(`Celsius ${celsius(2)}`)//pass the amount of degrees