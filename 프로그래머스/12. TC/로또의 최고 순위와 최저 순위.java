package Test;

import java.util.Arrays;

public class Solution2 {
    public static void main(String[] args) {
        int[] lottos = {44, 1, 0, 0, 31, 25};
        int[] win_nums = {31, 10, 45, 1, 6, 19};
        solution(lottos,win_nums);

    }
    public static int[] solution(int[] lottos, int[] win_nums) {
        int[] answer = new int[2];
        int[] cnt = new int[2];
        int rank = 0;

        for (int i = 0; i < lottos.length; i++) {
            for (int j = 0; j < win_nums.length; j++) {
                if(lottos[i]==win_nums[j]) {
                    cnt[1]++;
                }
            }
        }

        for (int i = 0; i < lottos.length; i++) {
           if(lottos[i]==0)
               cnt[0]++;
        }
        cnt[0] += cnt[1];


        for (int i = 0; i < cnt.length; i++) {
            switch (cnt[i]) {
                case 6:  rank = 1;
                    break;
                case 5:  rank = 2;
                    break;
                case 4:  rank = 3;
                    break;
                case 3:  rank = 4;
                    break;
                case 2:  rank = 5;
                    break;
                default: rank = 6;
                    break;
            }
            answer[i] = rank;
        }

        return answer;
    }
}
