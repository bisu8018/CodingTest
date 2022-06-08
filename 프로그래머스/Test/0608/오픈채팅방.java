package Test;

import java.util.ArrayList;
import java.util.HashMap;

public class Solution26 {
    public static void main(String[] args) {
        String[] record = {"Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"};
        solution(record);
    }
    public static String[] solution(String[] record) {
        String[] answer = {};
        String[] tmp;
        HashMap<String, String> map = new HashMap<>();
        ArrayList<String> arrayList = new ArrayList<>();

        for (int i = 0; i < record.length; i++) {
            tmp = record[i].split(" ");
            if(tmp[0].equals("Enter")){
                map.put(tmp[1], tmp[2]);
            } else if(tmp[0].equals("Change")){
                if(map.containsKey(tmp[1])){
                    map.put(tmp[1], tmp[2]);
                }
            }
        }

        for (int i = 0; i < record.length; i++) {
            tmp = record[i].split(" ");
            if(tmp[0].equals("Enter")){
                arrayList.add(map.get(tmp[1]) +"님이 들어왔습니다.");
            } else if(tmp[0].equals("Leave")){
                arrayList.add(map.get(tmp[1]) +"님이 나갔습니다.");
            }
        }

        answer = arrayList.toArray(new String[arrayList.size()]);

        return answer;
    }
}
