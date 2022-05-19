package Day1;

import java.util.List;
import java.util.Scanner;

public class PlusMinus {
    public static void main(String[] args) {
        plusMinus();
    }
    public static void plusMinus() {
        Scanner in=new Scanner(System.in);
        int num = in.nextInt();
        int plus = 0;
        int minus = 0;
        int zero = 0;

        int[] m=new int[num];
        for(int i=0;i<num;i++){
            m[i]=in.nextInt();
        }

        for (int i = 0; i < m.length; i++) {
            if(m[i]>0) {
                plus++;
            } else if(m[i]<0){
                minus++;
            } else {
                zero++;
            }
        }

        System.out.println(String.format("%.6f", plus / (double)num));
        System.out.println(String.format("%.6f", minus / (double)num));
        System.out.println(String.format("%.6f", zero / (double)num));

    }
}
