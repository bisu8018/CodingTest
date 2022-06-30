package Day2;

import java.util.Scanner;

public class LonelyInteger {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int num = in.nextInt();
        int cnt;

        int[] m = new int[num];
        for (int i = 0; i < m.length; i++) {
           m[i] = in.nextInt();
        }

        for (int i = 0; i < m.length; i++) {
            cnt = 0;
            for (int j = 0; j < m.length; j++) {
                if(m[i]==m[j]) {
                    cnt++;
                }
            }
            if(cnt < 2){
                System.out.println(m[i]);
            }
        }
    }
}
