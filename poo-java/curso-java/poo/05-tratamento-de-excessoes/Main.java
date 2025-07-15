// Estamos falando de um evento que acontece durante a execução do programa que vai interromper o fluxo normal do programa.
// Normalmente, essa exceção é um erro, e o programa lança uma exceção para indicar que algo deu errado.

// Por exemplo:
// - Divisão por zero
// - Acesso a um índice de array que não existe
// - Tentativa de acessar um arquivo que não existe
// - NullPointerException (tentativa de acessar um objeto que é nulo)

public class Main {
    public static void main(String[] args) {
        try {
            int resultado = dividir(10, 0);
            System.out.println("Resultado: " + resultado);
        } catch (ArithmeticException e) {
            System.out.println("Erro: " + e.getMessage());
        }
    }

    private static int dividir(int i, int j) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'dividir'");
    }
}
