/*
Crie 2 arquivos JavaScript.

O primeiro, irá exportar uma função chamada getFlag() que receberá um argumento do tipo String.

Essa função deverá buscar dentro do array process.argv a flag desejada, que é a String e retornar o valor da flag.

O segundo irá importar e passar a flag desejada.

Iremos rodar no terminal o segundo arquivo passando as flags --name e --greeting para que seja impresso no terminal a saudação e o nome da pessoa.
*/
function getFlagValue(flag){
    const index = process.argv.indexOf(flag) + 1 //pega o valor do flag --name
    return process.argv[index]
}

module.exports = getFlagValue


