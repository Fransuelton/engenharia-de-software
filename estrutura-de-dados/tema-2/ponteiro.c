#include <stdio.h> // Define a biblioteca padrão de entrada e saída que permite o uso da função printf para exibir informações na tela

// Ponto de entrada do programa em C
int main()
{
    int numero = 10; // variável normal
    int *ponteiro;   // Declaração do ponteiro

    // O ponteiro armazena o endereço da variável 'numero'
    // O ponteiro agora pode Acessar o valor de "numero" indiretamente
    ponteiro = &numero; // O operador & é para obter o endereço da variável

    printf("Valor de numero: %d\n", numero);
    printf("Endereço de numero: %p\n", ponteiro); // %p é um especificador de formato
    printf("Valor apontado por ponteiro: %d\n", *ponteiro);

    return 0;
}