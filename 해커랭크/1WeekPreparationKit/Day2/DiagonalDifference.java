package Day2;

import java.util.Arrays;
import java.util.Scanner;

public class DiagonalDifference {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int num = in.nextInt();
        int sum_left = 0;
        int sum_right = 0;

        int[][] m = new int[num][num];
        for (int i = 0; i < m.length; i++) {
            for (int j = 0; j < m[i].length; j++) {
                m[i][j] = in.nextInt();
            }
        }

        for (int i = 0; i < m.length; i++) {
            sum_left += m[i][i];
        }

        int k = 0;
        for (int j = m.length-1 ; j >= 0; j--) {
            sum_right += m[k][j];
            k++;
        }

        System.out.println(Math.abs(sum_left - sum_right));

    }
}
