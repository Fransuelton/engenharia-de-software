// Utilizando for e for...of

let vetor: number[] = [7, 5, 10, 20, 30, 40, 2, 1, 1];
let maior: number;

//forma 1: percorrendo um vetor através dos índices dele
let n = vetor.length;
maior = vetor[0];
for (let i = 1; i < n; i++) {
  if (vetor[i] > maior) {
    maior = vetor[i];
  }
}
console.log("Forma 01: O maior elemento do vetor é:" + maior);

//forma 2: percorrendo os elementos do vetor
maior = vetor[0];
for (var val of vetor) {
  if (val > maior) {
    maior = val;
  }
}
console.log("Forma 02: O maior elemento do vetor é:" + maior);

// While e do...while

let vetorw :number[] = [ 7, 5, 40, 20, 70, 50, 2, 1, 1];
let maiorw: number;
let i: number;
let tam:number = vetorw.length;
//forma 1: teste é realizado antes de entrar no bloco de comandos
i = 0;
maiorw = vetorw[0];
while(i<tam){
    if(vetorw[i]>maiorw){
        maiorw = vetorw[i];
    }
    i++;
}
console.log ("Forma 01: O maior elemento do vetor é:" + maiorw);

//forma 2: teste é realizado depois de entrar no bloco de comandos
i = 0;
tam = vetorw.length;
maiorw = vetorw[0];
do{
    if(vetorw[i]>maiorw){
        maiorw = vetorw[i];
    }
    i++;
}while(i<tam);
console.log ("Forma 02: O maior elemento do vetor é:" + maiorw);
