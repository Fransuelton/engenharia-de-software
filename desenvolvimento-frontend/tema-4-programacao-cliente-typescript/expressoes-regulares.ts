function checar_todas_palavras(
  par_padrao: RegExp,
  par_texto: string[]
): number {
  let total: number = 0;
  for (var val of par_texto) {
    if (par_padrao.test(val)) {
      total++;
    }
  }
  return total;
}

const vetor_texto: string[] = [
  "12345-657",
  "82345-67",
  "123aa-67",
  "92445-467",
];
const p_regex: RegExp = /\d{5}-\d{3}/;
let r_teste: number = checar_todas_palavras(p_regex, vetor_texto);
let n: number = vetor_texto.length;
console.log(
  `Das ${n} palavras, o total que satisfaz o padrão ${p_regex} é de: ${r_teste}`
);

// Expressão regular que reconhece e imprime os códigos de rastreamento dos correios

function checar_todos_codigos(par_padrao: RegExp, par_texto: string[]): void {
  for (var val of par_texto) {
    if (par_padrao.test(val)) {
      console.log(val);
    }
  }
}

let p_regex2: RegExp = /.\d{9}BR/;
let vetor_codigos: string[] = [
  "AA123456789BR",
  "LG123656789BR",
  "AA123456789",
  "123456789BR",
];
checar_todos_codigos(p_regex2, vetor_codigos);
