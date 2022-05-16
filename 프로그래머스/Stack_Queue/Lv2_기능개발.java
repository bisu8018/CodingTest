package StackQueue;
import java.util.*;

public class Lv2_기능개발 {
    public int[] solution(int[] progresses, int[] speeds) {
        int[] answer = {};
        int day = 0;
        int[] dayArray = new int[100];

        for (int i = 0; i < progresses.length; i++) {
            while(progresses[i] + (day * speeds[i]) < 100) {
                day++;
            }
            dayArray[day]++;
        }

        return Arrays.stream(dayArray).filter(i -> i!=0).toArray();
    }
}
