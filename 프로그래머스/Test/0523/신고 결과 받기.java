package Test;

import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;

public class Solution1 {
    public static void main(String[] args) {
        String[] id_list = {"muzi", "frodo", "apeach", "neo"};
        String[] report = {"muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"};
        int k = 2;
        solution(id_list,report,k);
    }
    public static int[] solution(String[] id_list, String[] report, int k) {
        int[] answer = new int[id_list.length];
        String[] split2;
        String[] split1;

        HashSet<String> hashSet = new HashSet<>(Arrays.asList(report));
        report = hashSet.toArray(new String[0]);

        HashMap<String,Integer> map1 = new HashMap<>();
        HashMap<String,Integer> map2 = new HashMap<>();


        for (int i = 0; i < report.length; i++) {
            split2 = report[i].split(" ");
            if(map2.containsKey(split2[1])) {
                map2.put(split2[1], map2.get(split2[1]) + 1);
            } else {
                map2.put(split2[1],1);
            }
        }


        for (int i = 0; i < report.length; i++) {
            split1 = report[i].split(" ");

            for (String s : map2.keySet()) {
                if (s.equals(split1[1]) && map2.get(s) >= k) {
                    if(map1.containsKey(split1[0])) {
                        map1.put(split1[0], map1.get(split1[0]) + 1);
                    } else {
                        map1.put(split1[0],1);
                    }
                }
            }

        }

        for (int i = 0; i < id_list.length; i++) {
            for (String s : map1.keySet()) {
                if(id_list[i].equals(s)){
                    answer[i] = map1.get(s);
                }
            }
        }

        return answer;
    }
}
