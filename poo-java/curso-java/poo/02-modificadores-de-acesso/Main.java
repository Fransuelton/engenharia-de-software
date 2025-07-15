// Controlam a visibilidades das classes, atributos e métodos no java
// Por exemplo, se um método de uma classe vai ser visível por outras classes que não pertencem ao mesmo pacote ou pelas classes do mesmo pacote ou se é visível para todo mundo

// Existem 4 tipos de modificadores de acesso no Java:
// public -> acessível de todo lugar
// default -> quando eu não defino, ele segue esse daqui
// private -> acessível somente dentro da classe que foi definido
// protected -> acessível por todo mundo que está no mesmo pacote

// Quando nenhum tipo de modificador de acesso é especificado, o default é "package-private", ou seja, a classe, atributo ou método só é acessível dentro do mesmo pacote.

// Métodos decorados com private só podem ser acessados dentro da própria classe.

// O modificador de acesso protected permite que o atributo ou método seja acessado por classes do mesmo pacote e por subclasses.

// PACOTES NO JAVA:
// Os pacotes são utilizados para organizar as classes e interfaces em namespaces. fazendo um agrupamento lógico das classes.
// Os pacotes respeitam a estrutura de diretórios no qual as classes estão localizadas. então a hierarquia dos pacotes deve respeitar a hierarquia dos diretórios.

// Para dizer que uma classe pertence a um pacote, usamos a palavra-chave "package" no início do arquivo Java.
// Exemplo: package poo.java.cursojava.poo.modificadoresacesso;

public class Main {
    public static void main(String[] args) {

    }
}
