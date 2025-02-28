// Função tradicional

function imprimir_ts(msg: string, num: number): void {
  console.log(
    `O conteúdo da variável mensagem é ${msg} e da variável númerica é ${num}`
  );
}

let tnum: number = 10;
let tmsg: string = "este é um teste";
imprimir_ts(tmsg, tnum);

// Função com retorno

function somar_ts(x: number, y: number): number {
  return x + y;
}

let a: number = 10;
let b: number = 20;
let soma_ts = somar_ts(a, b);
console.log(`A soma de ${a} com ${b} é: ${soma_ts}`);

// Função com parâmetros do tipo string

function concatenar_texto(x: string, y: string): string {
  return x + ", " + y;
}

let t1: string = "primeiro";
let t2: string = "segundo";
let texto_concat = concatenar_texto(t1, t2);
console.log(`A concatenação de ${t1} com ${t2} é: ${texto_concat}`);

// Função para manipular vetores

function somatorio(pvetor: number[]): number {
  let soma: number = 0;
  for (let val of pvetor) {
    soma += val;
  }
  return soma;
}

let vetor: number[] = [1, 2, 3, 4, 5];
let res_soma: number = somatorio(vetor);
console.log(`O somatório dos elementos do vetor ${vetor} é: ${res_soma}`);

// Funções recursivas

function fatorial(n: number): number {
  if (n == 0 || n == 1) {
    return 1;
  }
  return n * fatorial(n - 1);
}

let numero: number = 5;
let res_fat = fatorial(numero);
console.log(`O fatorial de ${numero} é: ${res_fat}`);

// Arrow Functions

let soma_anom_ts_1 = (x: number, y: number): number => {
  return x + y;
}
let soma_anom_ts_2 = (x: number, y: number):number => x + y;
let c: number = 10; 
let d: number = 20; 
console.log(`Teste 01: a soma de ${c} com ${d} é: ${soma_anom_ts_1(c,d)}`);
console.log(`Teste 02: a soma de ${c} com ${d} é: ${soma_anom_ts_2(c,d)}`);

// RegEx

function checar_padrao(par_padrao: RegExp, par_texto: string): string {
  if(par_padrao.test(par_texto)){
      return "Foi detectado o padrão dentro do texto"
  }
  return "Não foi detectado o padrão dentro do texto";
}

const texto_teste : string = "O objetivo desse texto é realizar testes";
const padrao_regex : RegExp = /te/;
let res_teste: string = checar_padrao(padrao_regex, texto_teste);
console.log(`O resultado da execução do regex foi: ${res_teste}`);
