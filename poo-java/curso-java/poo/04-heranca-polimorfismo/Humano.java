// HERANÇA:
// Define que uma classe consegue herdar atributos e métodos de outra classe.
// A classe que herda é chamada de subclasse ou classe filha, e a classe que é herdada é chamada de superclasse ou classe pai.
// Podemos usar a herança tanto com classe abstrata quanto com classe normal.

// POLIMORFISMO:
// Permite que uma única interface seja usada para representar diferentes tipos de objetos/ações.
// São objetos do mesmo tipo que possuem o mesmo contrato, mas que se comportam de maneira diferente.

public class Humano extends SerVivo {

    public Humano() {
        super(42);
    }

    @Override
    public void respirar() {
        System.out.println(this.idade);
        System.out.println("Inalando e exalando C02");
    }
    
}
