let nome = prompt('Qual o seu Nome?')
let idade = Number(prompt('Qual a sua Idade?'))
let carteira = prompt('Você possuí carteira de motorista?')
let carro = prompt('Você tem algum carro?')

if(idade < 18 || carteira == 'Não'){
    console.log(nome + ', você não pode dirigir!')
}
if(idade >= 18 && carteira == 'Sim' && carro == 'Não'){
    console.log(nome + ', você pode dirigir mas não tem carro.')
}
if(idade >= 18 && carteira == 'Sim' && carro == 'Sim'){
    console.log(nome + ', você será o motorista!')
}
