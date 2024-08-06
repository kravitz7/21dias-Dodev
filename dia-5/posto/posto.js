let escolha = parseInt(prompt("Escolha uma das opções a seguir:" + "\n 1 = Gasolina \n 2 = Álcool \n 3 = Calibrar Pneus"))
let quantidade = parseInt('')
let valor = parseInt(prompt("Digite o valor que quer abastecer:"))


switch(escolha){
    case 1:
        quantidade = 5
        console.log("Voce abasteceu seu veiculo com:" + (valor / quantidade) + "Litros de Gasolina")
        break;
    case 2:
        quantidade = 3
        console.log("Voce abasteceu seu veiculo com:" + (valor / quantidade) + "Litros de Álcool")
        break;
    default:
        console.log("Voce calibrou seus pneus com sucesso!")
        break;
}
