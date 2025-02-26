let vetor: number[] = [6, 1, 7, 3, 4, 5];

// Algoritmo de Ordenação Bolha
const n = vetor.length;

for (let i = 0; i < n - 1; i++) {
  for (let j = 0; j < n - i - 1; j++) {
    if (vetor[j] > vetor[j + 1]) {
      [vetor[j], vetor[j + 1]] = [vetor[j + 1], vetor[j]];
    }
  }
}

console.log(`O veotr ordenado é ${vetor}`);

// Outro exemplo

let numeros: number[] = [89,2,5,8,11,543,97,7,1,100]

const quantidadeDeElementos = numeros.length;

for(let numeroDePassadas = 0; numeroDePassadas < quantidadeDeElementos - 1; numeroDePassadas++){ // passadas
  for(let indice = 0; indice < quantidadeDeElementos - numeroDePassadas - 1; indice++){ // Comparações
    if(numeros[indice] > numeros[indice + 1]){
      [numeros[indice], numeros[indice + 1]] = [numeros[indice + 1], numeros[indice]];
    }
  }
}

console.log(`O vetor ordenado é ${numeros}`); // O vetor ordenado é 1,2,5,7,8,11,89,97,100,543