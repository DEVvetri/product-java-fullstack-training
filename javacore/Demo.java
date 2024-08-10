
public class Demo {
    // 1) Fibonacci Series in Java
    public static int[] getFibnacci(int num) {
        int[] series = new int[num];
        int f1 = 0;
        int f2 = 1;
        series[0] = f1;
        series[1] = f2;
        for (int i = 2; i < series.length; i++) {
            int n = f1 + f2;
            series[i] = n;
            f1 = f2;
            f2 = n;
        }
        return series;
    }

    // 2) Prime Number Program in Java
    public static boolean isPrime(int num) {
        boolean isprime = false;
        for (int i = 2; i < num; i++) {
            if (num % 2 == 0) {
                isprime = true;
                break;
            }
        }
        return isprime;
    }

    // 3) Palindrome string Program in Java

    public static boolean isPalindromeString(String word) {
        for (int i = 0; i < word.length() / 2; i++) {
            if (word.charAt(i) != word.charAt(word.length() - 1 - i)) {
                return false;
            }
        }
        return true;
    }

    // 3) Palindrome number Program in Java

    public static boolean isPalindromeNum(int num) {

        String number = String.valueOf(num);
        for (int i = 0; i < number.length() / 2; i++) {
            if (number.charAt(i) != number.charAt(number.length() - 1 - i)) {
                return false;
            }
        }
        return true;
    }

    // 4) Factorial Program in Java
    public static int factorial(int num) {
        int total = num;
        for (int i = num - 1; i > 1; i--) {
            total *= i;
        }
        return total;
    }

    // 5) Armstrong Number in Java
    public static int power(int value, int power) {
        int sum = 1;
        for (int i = 1; i <= power; i++) {
            sum *= value;
        }
        return sum;
    }

    // 5) Armstrong Number in Java
    public static boolean anstorngNum(int num) {
        int total = 0;
        int temp = num;
        while (temp != 0) {
            int t = temp % 10;
            total += power(t, 3);
            temp = temp / 10;
        }
        return (total == num);
    }

    // 6) How to Generate Random Number in Java
    public static int generateRandomNumber( int range) {
        return (int) (Math.random() * range);
    }
    //7) pattern is other file

    public static void main(String[] args) {
        // 11111111111111111111111111
        System.out.println("1) Fibonacci Series in Java");
        int[] series = getFibnacci(10);
        System.out.print("anwser: ");
        for (int i = 0; i < series.length; i++) {
            System.out.print(series[i] + " ");
        }
        // 111111111111111111111111111
        System.out.println();
        // 22222222222222222222222222222
        System.out.println("2) Prime Number Program in Java");
        System.out.print(isPrime(19));
        // 22222222222222222222222222222222222
        System.out.println();
        // 3333333333333333333333333
        System.out.println("3) Palindrome string Program in Java");
        System.out.print(isPalindromeString("mada"));
        System.out.println();
        System.out.println("3) Palindrome number Program in Java");
        System.out.print(isPalindromeNum(3023));
        // 3333333333333333333333333
        System.out.println();
        // 4444444444444444444444444444444
        System.out.println("4) Factorial of a Number in Java");
        System.out.print(factorial(5));
        // 4444444444444444444444444444444444
        System.out.println();
        // 5555555555555555555555555555555555555555
        System.out.println("5) Armstrong Number in Java");
        System.out.println("anwser:" + anstorngNum(153));
        // 555555555555555555555555555555555555555555
        // 66666666666666666666666666666666666
        System.out.println("6) How to Generate Random Number in Java");
        System.out.println("anwser:" + generateRandomNumber(8));
        // 66666666666666666666666666666666666
    }
}