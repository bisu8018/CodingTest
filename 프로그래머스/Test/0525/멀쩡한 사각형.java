package Test;

public class Solution10 {
    public static void main(String[] args) {
        int w = 8;
        int h = 12;
        solution(w,h);
    }
    public static long solution(int w, int h) {
        long gcd_num = gcd(w,h);
        long num = ((long) w * h) - (((w / gcd_num) + (h / gcd_num) - 1) * gcd_num);

        return num;
    }

    private static int gcd(int a, int b){
        if(b == 0) return a;
        return gcd(b, a % b);
    }

}
