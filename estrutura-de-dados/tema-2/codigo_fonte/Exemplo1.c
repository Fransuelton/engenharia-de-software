// Ocorre a declaração de variáveis globais (alocadas fora de uma função) ou estáticas (alocadas dentro de uma função), usando o modificador static. Nesse caso, o valor alocado à variável se mantém durante toda a vida do programa, exceto quando é modificado explicitamente.

#include <stdio.h>

static  int a = 0;  // vari�vel global, aloca��o est�tica

void incrementa(void)
{
int b = 0; // vari�vel local, aloca��o autom�tica
static int c = 0; // vari�vel local, aloca��o est�tica

printf ("a: %d, b: %d, c: %d\n", a, b, c);
a++ ;
b++ ;
c++ ;
}

int main(void)
{
int i;

for (i = 0; i < 5; i++)
incrementa();

system ("pause");
return 0;
}
