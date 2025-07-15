public class Main {
    public static void main(String[] args) {
        // Vetores ou arrays são uma estrutura de dados para aramazenar variáveis do
        // mesmo ou de vários tipo

        // O indíce do array começa em 0

        // Existem algumas formas de declarar um array
        

        // 1. Indicamos que é um array utilizando [] e já iniciamos com valores padrões.
        // Quando declaramos o array dessa forma ele vai ter um tamanho fixo.

        int[] colecaoDeInteiros = { 1, 2, 3, 4, 5 }; // Aqui ele só armazena 5 elementos

        System.out.println(colecaoDeInteiros[2]);
        System.out.println(colecaoDeInteiros.length);

        // 2. inicializamos sem valores padrão, mas temos que informar o tamanho dele
        int[] meusNumeros = new int[10];
    }

}
