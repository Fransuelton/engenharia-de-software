
import java.util.Scanner;

public class SearchInArray {
    public static void main(String[] args) {
        try (Scanner scanner = new Scanner(System.in)) {
            int[] array = { 12, 65, 3, 2, 50 };

            System.out.print("Enter a number to see its exist on array: ");
            int number = scanner.nextInt();

            boolean found = false;

            for (int i = 0; i < array.length; i++) {
                if (number == array[i]){
                    System.out.println(number + " Exists on array in position: " + array[i]);
                    found = true;
                    break;
                }
            }

            if(!found) {
                System.out.println(number + " Not exists on array.");
            }
        }
    }
}
