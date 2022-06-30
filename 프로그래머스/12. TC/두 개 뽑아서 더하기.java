package Test;

import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import java.util.TreeSet;

public class Solution19 {
    public static void main(String[] args) {
        int[] numbers = {2,1,3,4,1};
        solution(numbers);
    }
    public static int[] solution(int[] numbers) {
        TreeSet<Integer> treeSet = new TreeSet<>();
        int[] answer;

        for (int i = 0; i < numbers.length; i++) {
            for (int j = 0; j < numbers.length; j++) {
                if(i!=j){
                    treeSet.add(numbers[i]+numbers[j]);
                }
            }
        }

        Integer[] arr = treeSet.toArray(new Integer[treeSet.size()]);
        Arrays.toString(arr);

        answer = new int[arr.length];
        for (int i = 0; i < arr.length; i++) {
            answer[i] = arr[i];
        }

        return answer;
    }
}
