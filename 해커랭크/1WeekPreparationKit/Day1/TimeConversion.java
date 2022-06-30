package Day1;

import java.util.Scanner;

public class TimeConversion {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        String s = in.next();

        int hh = Integer.valueOf(s.substring(0, 2));

        if(s.indexOf("AM") > -1){
            if(hh==12) hh -= 12;
        }else{ //PM
            if(hh!=12) hh += 12;
        }
        s = String.valueOf(hh) + s.substring(2,8);
        System.out.println(s.length() == 8? s : "0"+s);
    }
}
