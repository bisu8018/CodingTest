package Bruteforce;
import java.util.*;

public class Lv1_모의고사 {
    public int[] solution(int[] answers) {
        int[] answer = {};
        ArrayList<Integer> who1_list = new ArrayList<Integer>();
        ArrayList<Integer> who2_list = new ArrayList<Integer>();
        ArrayList<Integer> who3_list = new ArrayList<Integer>();

        who1_list.add(1);
        who1_list.add(2);
        who1_list.add(3);
        who1_list.add(4);
        who1_list.add(5);

        who2_list.add(2);
        who2_list.add(1);
        who2_list.add(2);
        who2_list.add(3);
        who2_list.add(2);
        who2_list.add(4);
        who2_list.add(2);
        who2_list.add(5);

        who3_list.add(3);
        who3_list.add(3);
        who3_list.add(1);
        who3_list.add(1);
        who3_list.add(2);
        who3_list.add(2);
        who3_list.add(4);
        who3_list.add(4);
        who3_list.add(5);
        who3_list.add(5);

        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();

        int cnt1 = 0;
        int cnt2 = 0;
        int cnt3 = 0;

        for (int i = 0; i < answers.length ; i++) {
            if(who1_list.get(i%5) == answers[i])
                cnt1++;
        }
        map.put(1,cnt1);

        for (int i = 0; i < answers.length; i++) {
            if(who2_list.get(i%8) == answers[i])
                cnt2++;

        }
        map.put(2,cnt2);

        for (int i = 0; i < answers.length; i++) {
            if(who3_list.get(i%10) == answers[i])
                cnt3++;
        }
        map.put(3,cnt3);

        List<Integer> keySetList = new ArrayList<>(map.keySet());
        Collections.sort(keySetList, (o1, o2) -> (map.get(o2).compareTo(map.get(o1))));

        int max = 0;
        max = map.get(keySetList.get(0));
        ArrayList<Integer> list = new ArrayList<Integer>();

        for (int i = 0; i < keySetList.size(); i++) {
            if(max == map.get(keySetList.get(i))) {
                list.add(keySetList.get(i));
            }
        }

        answer = new int[list.size()];
        for (int i = 0; i < answer.length; i++) {
            answer[i] = list.get(i);
        }

        return answer;
    }
}
