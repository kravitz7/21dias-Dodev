let nome = prompt("Digite o seu nome");
let idade = parseInt(prompt("Digite a sua idade"));
let altura = Number(prompt("Digite a sua altura"));
let peso = parseInt(prompt("Digite o seu peso"));
let anoNasc = prompt("Digite o Ano Atual") - idade;
let imc = peso/(altura*altura);

console.log('Olá ' + nome + ', você tem ' + idade + ' anos, nasceu em ' + anoNasc + ', tem ' + altura + ' de altura, pesa ' + peso + ' kg e seu IMC é: ' + imc + 'kg/m2.')

