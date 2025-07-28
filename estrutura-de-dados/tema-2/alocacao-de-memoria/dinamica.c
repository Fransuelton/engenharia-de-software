//(geralmente aloca em HEAP)

// Permite que o programa reserve memória durante o momento de execução.

// Aumentar e liberar espaço conforme necessário

/*
FUNÇÃO MALLOC (Memory Allocation) 

void* malloc(size_t size);

onde size: número de bytes que queremos alocar e retorna um ponteiro para o ínicio do bloco de memória. Se não houver memória disponível a função retorna null.

*/

/*
FUNÇÃO CALLOC (Contiguous Allocation)

void* calloc(size_t num_elements, size_t size_of_each_element);

onde:

- num elements: número de elementos a serem alocados.
- size_of_each_element: tamanho em bytes de cada elemento.

Ela inicializa todos os blocos de memória com zero. Ela útil quando queremos um bloco de memória já inicializado.

*/

/*
FUNÇÃO FREE

void free(void* ptr);

Onde:
- ptr: ponteiro para o bloco de memória a ser liberado.
*/

#include <stdio.h>
#include <stdlib.h>

int main()
{
    // O ponteiro recebe o espaço alocado dinamicamente pela função malloc, após o uso liberamos a memória com a função free
    int *ponteiro;
    ponteiro = (int *)malloc(sizeof(int));

    if (ponteiro != NULL)
    {
        *ponteiro = 30;
        printf("Valor alocado dinamicamente: %d\n", *ponteiro);
        free(ponteiro); // Libera a memória
    }
    else
    {
        printf("Erro na alocação de memória.\n");
    }
}