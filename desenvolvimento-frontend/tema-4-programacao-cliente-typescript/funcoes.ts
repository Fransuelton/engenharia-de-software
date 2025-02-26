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
