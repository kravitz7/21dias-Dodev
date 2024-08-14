let numero = parseInt(prompt("Digite uma tabuada que te darei ela e as próximas duas:"));


for(let i=numero; i<=numero+2; i++){
    console.log("Tabuada do número: " + i)
    for(let t=0; t<=10; t++){
        console.log(t + " x " + i + " = " + (t*i))
    }
}