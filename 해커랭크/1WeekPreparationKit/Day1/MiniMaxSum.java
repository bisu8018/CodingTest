package Day1;

import java.util.Arrays;
import java.util.Scanner;

public class MiniMaxSum {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        long sum_min = 0;
        long sum_max = 0;

        long[] m = new long[5];
        for (int i = 0; i < m.length; i++) {
            m[i] = in.nextLong();
        }

        Arrays.sort(m);

        for (int i = 0; i < m.length-1; i++) {
            sum_min += m[i];
        }

        for (int i = 1; i < m.length; i++) {
            System.out.println("max : " + m[i]);
            sum_max += m[i];
        }

        System.out.println(sum_min + " " + sum_max);
    }
}
