import java.util.Scanner;

public class MultiplicationTable {
    public static void main(String[] args) {
        try (Scanner scanner = new Scanner(System.in)) {
            System.out.print("Enter a number to see its multiplication table: ");
            int number = scanner.nextInt();

            for (int i = 0; i <= 10; i++) {
                int result = number * i;

                System.out.println(number + " x " + i + " = " + result);
            }
        }
    }
}
