

public class Main {
    public static void main(String[] args) {
        isPalindrome("A man, a plan, a canal: Panama");
    }
    public static boolean isPalindrome(String s) {
        s = s.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
        int left = 0;
        int right = s.length() - 1;
        System.out.println(s);
        while (left<right) {
            if (s.charAt(left) == s.charAt(right)){
                System.out.printf("%c & %c match", s.charAt(left), s.charAt(right));
                left++;
                right--;
                continue;
            }
            return false;
        }
        return true;
    }
}
