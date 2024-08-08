let numero = parseInt(prompt('Digite um número e te darei a tabuada dela e as próximas duas:'));

for(let contador = numero; contador<=numero +2; contador++){
    console.log("Tabuada do número:" + contador)
    for(let num=0; num <= 10; num++){
        console.log(contador + " x " + num + " = " + (contador*num))
    }
}