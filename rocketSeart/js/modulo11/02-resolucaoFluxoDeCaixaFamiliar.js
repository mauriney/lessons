/*Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.
*/

let familia = {
    receitas: [2500, 3200, 250.43, 360.45],
    despesas: [320.34, 128.45, 176.87, 1450.00],
}

function soma(array){ //funcao para somar as concatenação dos objetos
    let total = 0;

    for(let value of array){
        total += value
    }

    return total
}

function calculaBalanco(){ //calcular o receita e despesas familiar
    const calculaReceitas = soma(familia.receitas)
    const calculaDespesas = soma(familia.despesas)

    const total = calculaReceitas - calculaDespesas

    const ok = total >= 0

    let textoBalanco = "negativo"

    if(ok){
        textoBalanco = "positivo"
    }

    console.log(`Seu saldo é ${textoBalanco}: ${total}`)

}

calculaBalanco()