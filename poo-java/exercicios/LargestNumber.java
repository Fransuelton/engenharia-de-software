public class LargestNumber {
    public static void main(String[] args) {
        int[] numbers = { 33, 12, 9, 34, 12343, 2313243, 13 };

        int largestNumber = numbers[0];

        for (int i = 0; i < numbers.length; i++) {
            if (numbers[i] > largestNumber) {
                largestNumber = numbers[i];
            }
        }

        System.out.println(largestNumber);
    }
}
