public class Main {
    public static void main(String[] args) {
        byte b = 100;
        short s = 10000;
        int i = 100000;
        long l = 10000000000L; // L no final indica que é um long
        float f = 10.5f; // f no final indica que é um float
        double d = 20.5;
        char c = 'A';
        String str = "Fransuelton";
        boolean bool = true;

        // isBlank() verifica se a string está vazia ""
        // equals() verifica por exemplo, se a variável e igual a outra e returna um bool



        if (str.isBlank()) {
            System.out.println("Verdadeiro");
        } else if (str == "Fransuelton") {
            System.out.println(str);
        }
        else {
            System.out.println("Falso");
        }

    }
}
