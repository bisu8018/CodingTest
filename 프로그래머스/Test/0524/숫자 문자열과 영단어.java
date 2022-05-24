package Test;

import java.util.HashMap;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Solution4 {
    public static void main(String[] args) {
        String s = "23four5six7";
        solution(s);
    }
    public static int solution(String s) {
        int end_tmp = 0;
        String tmp = "";
        String tmp_num = "";
        String rst = "";

        HashMap<String,Integer> map = new HashMap<>();
        map.put("zero", 0);
        map.put("one", 1);
        map.put("two", 2);
        map.put("three",3 );
        map.put("four", 4);
        map.put("five", 5);
        map.put("six", 6);
        map.put("seven", 7);
        map.put("eight", 8);
        map.put("nine", 9);


        Pattern p_char = Pattern.compile("([a-z])");
        Matcher m_char = p_char.matcher(s);


        while(m_char.find()){

            if(end_tmp < m_char.start()) {
                for (int i = end_tmp; i < m_char.start(); i++) {
                    tmp_num += s.charAt(i);
                }
                rst += tmp_num;
                tmp_num = "";
            }

            for (int i = m_char.start(); i < m_char.end(); i++) {
                tmp += s.charAt(i);
            }
            end_tmp = m_char.end();


            for (String s1 : map.keySet()) {
                if (tmp.equals(s1)){
                    rst += map.get(s1);
                    tmp = "";
                }
            }
        }

        if(rst.isEmpty()){
            return Integer.parseInt(s);
        } else {
            if(rst.length() < s.length()) {
                for (int i = end_tmp; i < s.length(); i++) {
                    rst += s.charAt(i);
                }
                return Integer.parseInt(rst);
            } else {
                return Integer.parseInt(rst);
            }
        }

    }
}
