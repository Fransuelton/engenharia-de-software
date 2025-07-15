public class Carro {
    String modelo;

    public Carro(String modelo) {
        this.modelo = modelo;
    }

    // Se o método não retorna nada, ele é um método void

    public void acelerar(){
        System.out.println("Acelerando o carro " + modelo);
    }
}

