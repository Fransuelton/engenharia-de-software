public class Main {
    public static void main(String[] args) {

        String[] nomesArr = new String[10];
        nomesArr[0] = "Fransuelton";
        nomesArr[1] = "Teste";
        nomesArr[2] = "Java";
        nomesArr[3] = "Array";
        nomesArr[4] = "Loop";
        nomesArr[5] = "Exemplo";
        nomesArr[6] = "Programação";
        nomesArr[7] = "Curso";

        // For: enquanto a condição não é atingida

        // for (int i = 0; i < nomesArr.length; i++) {
        // System.out.println(nomesArr[i]);
        // }

        // Forma que serve para ArrayList e Vetores onde declaramos o tipo de cada item
        // que vai ser atribuido na iteração e qual é a variável que vamos iterar sobre
        // (uma coleção de dados, vetor ou arraylist)

        for (String nome : nomesArr) {
            System.out.println(nome);
        }

        // While: executado até que chegue numa condição
        // Se esquecermos de incrementar ou decrementar a variável ele nunca vai parar,
        // fica em um loop infinito

        int contador = 0;
        while (contador < 10) {
            System.out.println("Estou no while");
            contador++; // Incrementando a variável
        }

    }
}
