// (geralmente aloca em STACK)

/*
Automática - Usada para variáveis locais (dentro de função)
*/

#include <stdio.h>

void funcaoExemplo(){
    int numero = 10; // Variável automática
    printf("Valor de numero: %d\n", numero);
}

int main() {
    funcaoExemplo(); // Chamada da função
    return 0;
}