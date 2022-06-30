package Day1;

import java.util.Arrays;
import java.util.Scanner;

public class MockTest {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int num = in.nextInt();

        int[] m = new int[num];
        for (int i = 0; i < m.length; i++) {
            m[i] = in.nextInt();
        }

        Arrays.sort(m);

        System.out.println(m[(num/2)]);
    }
}
