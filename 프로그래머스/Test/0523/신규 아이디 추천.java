package Test;

import java.util.Locale;

public class Solution3 {
    public static void main(String[] args) {
        //String new_id = "...!@BaT#*..y.abcdefghijklm";
        String new_id = "=.=";
        solution(new_id);
    }
    public static String solution(String new_id) {
        String answer = "";

        //단계 1. 소문자 처리
        new_id = new_id.toLowerCase();

        System.out.println("단계1 : " + new_id);
        //단계2. 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
        new_id = new_id.replaceAll("[^\\w\\-_.]*", "");

        System.out.println("단계2 : " + new_id);
        //단계3. 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다
        new_id = new_id.replaceAll("\\.{2,}", ".");

        System.out.println("단계3 : " + new_id);
        //단계4. 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
        new_id = new_id.replaceAll("^[.]|[.]$", "");

        System.out.println("단계4 : " + new_id);
        //단계5. 빈 문자열이라면, new_id에 "a"를 대입합니다.
        if(new_id.isEmpty())
            new_id = "a";

        System.out.println("단계5 : " + new_id);
        //단계6. 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
        //만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
        if(new_id.length() >= 16) {
            new_id = new_id.substring(0,15);
        }
        new_id = new_id.replaceAll("[.]$", "");

        System.out.println("단계6 : " + new_id);

        //단계7. new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.
        int cnt = new_id.length();

        if(cnt <= 2 && cnt > 0) {
            while (new_id.length()<3) {
                new_id += new_id.charAt(cnt-1);
            }
        }

        System.out.println("new_id : " + new_id);

        return answer;
    }
}
