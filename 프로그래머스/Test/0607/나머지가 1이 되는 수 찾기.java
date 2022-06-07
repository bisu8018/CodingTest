package Test;

public class Solution20 {
    public static void main(String[] args) {
        int n = 10;
        solution(n);
    }
    public static int solution(int n) {
        for (int i = 1; i < 1000000; i++) {
             if(n%i==1)
                 return i;
        }

        return 0;
    }
}
