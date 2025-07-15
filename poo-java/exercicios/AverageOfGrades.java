public class AverageOfGrades {
    public static void main(String[] args) {
        double firstGrade = 3.1;
        double secondGrade = 5.9;
        double thirdGrade = 10;
        double fourthGrade = 2.4;

        double average = (firstGrade + secondGrade + thirdGrade + fourthGrade) / 4;

        if (average >= 7) {
            System.out.println("Approved! Student Grade Average: %.2f%n" + average);
        } else {
            System.out.println("Not approved, Student Grade Average: %.2f%n" + average);
        }

    }
}
