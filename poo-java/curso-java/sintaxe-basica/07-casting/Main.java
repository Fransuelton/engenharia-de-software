public class Main {
    public static void main(String[] args) {
        // No java não podemos mudar o tipo da variável após declarada.

        // Casting permite que façamos a conversão de um tipo de dado para outro, ou
        // seja, vamos transformar o valor, então vamos declarar uma variável nova.

        // Casting explícito

        double resultado = 0.0;
        int resultadoInt = (int) resultado; // Isso indica pro Java um Casting

        String meuString = "10";
        int meuInt2 = Integer.parseInt(meuString);

        String minhaString = String.valueOf(meuInt2);

        // Casting Implícito

        int meuInt = 10;
        double meuDouble = meuInt;

    }
}
