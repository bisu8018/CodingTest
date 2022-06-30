package Test;

import java.util.*;

public class Solution18 {
    public static void main(String[] args) {
        int N = 3;
        int[] stages = {1,1,1};
        solution(N,stages);
    }
    public static int[] solution(int N, int[] stages) {
        int[] answer = new int[N];
        int[] cnt = new int[stages.length+1];

        HashMap<Integer, Double> map = new HashMap<>();

        for (int i = 0; i < stages.length; i++) {
            cnt[stages[i]]++;
        }

        int stage_cnt = stages.length;
        for (int i = 1; i <= N; i++) {
            if(cnt[i] == 0 || stage_cnt == 0) {
                map.put(i,0.0);
            } else {
                map.put(i, (double)cnt[i] / stage_cnt);
                stage_cnt -= cnt[i];
            }
        }

        ArrayList<Integer> keySetList = new ArrayList<>(map.keySet());
        Collections.sort(keySetList, (o1, o2) -> (map.get(o2).compareTo(map.get(o1))));


        for (int i = 0; i < keySetList.size(); i++) {
            answer[i] = keySetList.get(i);
        }

        return answer;
    }
}
