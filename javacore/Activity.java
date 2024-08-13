import java.util.Scanner;
class Student {
    int StdregNo;
    String StdName;
    int[] subjects = new int[5];
    int size = subjects.length;

    Student(int regNo, String name) {
        this.StdregNo = regNo;
        this.StdName = name;
    }

    void getMark() {
        Scanner sc = new Scanner(System.in);
        for (int i = 0; i < size; i++) {
            System.out.println("enter " + (i + 1) + " subject mark:");
            subjects[i] = sc.nextInt();
        }

        showMarks();
    }

    void showMarks() {
        System.out.println("your marks are:");
        for (int i = 0; i < subjects.length; i++) {
            System.out.println("mark in " + (i + 1) + " subject is " + subjects[i]);
        }
    }

    void displayGrade() {
        int sum = 0;
        int avg = 0;
        for (int i = 0; i < subjects.length; i++) {
            sum += subjects[i];
        }

        avg = sum / size;
        System.out.println("total Marks:" + sum);

        System.out.println("average Mark:" + avg);

        System.out.println("Grade:" + getGrade(avg));

    }

    char getGrade(int avg) {
        if (avg > 90 && avg < 100) {
            return 'O';
        } else if (avg > 80 && avg < 90) {
            return 'A';
        } else if (avg > 70 && avg < 80) {
            return 'B';
        } else if (avg > 60 && avg < 70) {
            return 'C';
        } else if (avg >= 50 && avg < 60) {
            return 'D';
        } else {
            return 'F';
        }
    }
}

public class Activity {

    public static void main(String[] args) {
        Student std = new Student(101, "vetri");
        std.getMark();
        std.displayGrade();
    }
}
