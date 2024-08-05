let fome = prompt('Você está com fome?')
let money = prompt('Você tem dinheiro?')
let rest = prompt('O restaurante está aberto?')

if (fome == 'Não' || money == 'Não'){
    console.log('Hoje a janta será em casa')
}
if (fome == 'Sim' && money == 'Sim' && rest == 'Não'){
    console.log('Peça um delivery')
}
if (fome == 'Sim' && money == 'Sim' && rest == 'Sim'){
    console.log('Hoje o jantar será no seu restaurante preferido')
}