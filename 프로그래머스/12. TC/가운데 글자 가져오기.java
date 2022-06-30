package Test;

public class Solution25 {
    public static void main(String[] args) {
        solution("Abcde");
    }
    public static String solution(String s) {
        int lgt = s.length() / 2;

        if(s.length() % 2 == 0){
            return Character.toString(s.charAt(lgt-1)) + Character.toString(s.charAt(lgt));
        } else {
            return Character.toString(s.charAt(lgt));
        }
    }
}
