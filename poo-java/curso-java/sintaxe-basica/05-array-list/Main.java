import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        // ArrayList é uma classe que permite implementar uma lista dinânimca
        // adicionando e removendo elementos e alterando o tamanho dela

        // Temos que importar ele do java.util
        // para adicionar elementos usamos o método add()
        // Utilizamos size() para ver o tamanho do ArrayList

        ArrayList<String> nomes = new ArrayList<>();
        nomes.add("Fransuelton");
        nomes.add("José");
        nomes.add("Vitória");

        // Para acessar os valores usamos o método get()

        System.out.println(nomes.get(0));

        // Para remover usamos o método remove(), usando indíce ou objeto

        nomes.remove(0);
        nomes.remove("José");

        // Após isso o próximo do indíce ocupa o que foi removido

        System.err.println(nomes.get(0));
    }
}
