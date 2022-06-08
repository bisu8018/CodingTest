package Test;

public class Solution23 {
    public static void main(String[] args) {
        int price = 3;
        int money = 20;
        int count = 4;
        solution(price,money,count);
    }
    public static long solution(int price, int money, int count) {
        long sum = 0;

        for (int i = 1; i <= count; i++) {
             sum += price * i;
        }

        if((sum-money) < 0){
            return 0;
        } else{
            return Math.abs(sum - money);
        }

    }
}
