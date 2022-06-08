package Test;

import java.util.Arrays;
import java.util.Collections;

public class Solution22 {
    public static void main(String[] args) {
        int[][] sizes = {{10, 7}, {12, 3}, {8, 15}, {14, 7}, {5, 15}};
        solution(sizes);
    }
    public static int solution(int[][] sizes) {
        int tmp = 0;
        Integer[] min = new Integer[sizes.length];
        Integer[] max = new Integer[sizes.length];

        for (int i = 0; i < sizes.length; i++) {
            if(sizes[i][0] > sizes[i][1]){
                tmp = sizes[i][0];
                sizes[i][0] = sizes[i][1];
                sizes[i][1] = tmp;
            }
        }

        for (int i = 0; i < sizes.length; i++) {
            max[i] = sizes[i][0];
            min[i] = sizes[i][1];
        }

        Arrays.sort(min,Collections.reverseOrder());
        Arrays.sort(max,Collections.reverseOrder());

        return min[0] * max[0];
    }
}
