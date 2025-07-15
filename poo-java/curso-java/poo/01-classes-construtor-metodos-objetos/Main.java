// Classe é um modelo que vai definir a estrutura dos objetos (atributos
        // (variaveis), métodos (funções)) e vai descrever o funcionamento do objeto

        // Criou arquivo .java tem quer ter no mínimo 1 classe dentro com o mesmo nome do arquivo

        // CONSTRUTURES:
        // método especial de uma classe, ele vai ser chamado sempre quando um objeto de uma classe for criado

public class Main {

    /*  O método main é o ponto de entrada do programa, onde a execução começa
    // Ele deve ser sempre público, estático e retornar void
    // O método main deve receber um array de String como parâmetro
    // O nome do método main deve ser exatamente esse, com letras minúsculas
    // O método main deve estar dentro de uma classe pública
    // O método main pode ser chamado de qualquer lugar do programa, mas é comum que ele
    // seja chamado automaticamente quando o programa é executado
    // O método main pode ser usado para criar objetos, chamar métodos, etc.
    */
    public static void main(String[] args) {
        // O método construtor da classe carro vai ser acionado toda vez que um novo carro for criado.

        // Cada um desseso objetos e uma instância da classe Carro
        // usamos o operador new para criar um novo objeto
        Carro meuCarro = new Carro("Fusca");

        Carro outroCarro = new Carro("Civic");

        meuCarro.acelerar(); // Chama o método acelerar do objeto meuCarro
        outroCarro.acelerar();
    }
}

