// Condicionais if-else e else-if

let mediaFinal: number = 8.5; 
if(mediaFinal == 10){
    console.log("Resultado excelente!");    
}else if(mediaFinal > 8){
    console.log("Parabéns!");    
}else if(mediaFinal >= 7){
    console.log("Aprovado!");    
}else{
    console.log("vamos estudar mais!");    
}

// Operador ternário

let podeVotar: string;
let idade: number = 17;
podeVotar = (idade < 16) ? "Muito jovem para votar":"já pode votar";
console.log(podeVotar);