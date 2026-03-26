
import static java.lang.Math.max;

public class Main {
    public static void main(String[] args) {
        int numerator = 260;
        int denominator = 130;
        for (int i = max(numerator, denominator); i<=max(numerator, denominator); i--) {
            if (numerator % i == 0 && denominator % i == 0) {
                System.out.println("Greatest common divisor: " + i);
                return;
            }
        }
    }
}
