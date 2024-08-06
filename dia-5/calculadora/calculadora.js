let num1 = parseInt(prompt("Escolha seu primeiro numero:"))
let num2 = parseInt(prompt("Escolha seu segundo numero:"))
let operacao = parseInt(prompt("Escolha a operacao matematica sendo:" + "\n 1 = +; \n 2 = /; \n 3 = *; \n 4 = -;"))


switch (operacao) {
case 1: 
    console.log(num1 + " + " + num2 + "=" + (num1 + num2))
    break;

case 2: 
    console.log(num1 + " - " + num2 + "=" + (num1 - num2))
    break;

case 3: 
    console.log(num1 + " * " + num2 + "=" + (num1 * num2))
    break;

default: 
    console.log(num1 + " / " + num2 + "=" + (num1 / num2))
    break;
}
