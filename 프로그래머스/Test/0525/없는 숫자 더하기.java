package Test;

import java.util.ArrayList;

public class Solution7 {
    public static void main(String[] args) {
        int[] numbers = {1,2,3,4,6,7,8,0};
        solution(numbers);
    }
    public static int solution(int[] numbers) {
        int answer = 0;
        int num[] = {1,2,3,4,5,6,7,8,9};
        ArrayList<Integer> numbers_list = new ArrayList<>();

        for (int i = 0; i < numbers.length; i++) {
            numbers_list.add(numbers[i]);
        }

        for (int i = 0; i < num.length; i++) {
            if(numbers_list.indexOf(num[i])==-1)
                answer += num[i];
        }
        return answer;
    }
}
