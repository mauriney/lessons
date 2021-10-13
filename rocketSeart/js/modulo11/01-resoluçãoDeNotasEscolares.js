/*
Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima -   A
* entre 80 - 89   -   B
* entre 70 - 79   -   C
* entre 60 - 69   -   D
* menor que 60    -   F
 */

const nota = 82

if (nota < 60){
  console.log ('Nota F')
} else if (nota <= 69){
  console.log('Nota D')
}else if (nota <= 79){
  console.log('Nota C')
} else if (nota <= 89){
  console.log('Nota B')
} else {
  console.log('Nota A')
}