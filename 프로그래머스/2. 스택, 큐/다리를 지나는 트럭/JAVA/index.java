package StackQueue;
import java.util.*;

public class Lv2_2 {
    public int solution(int bridge_length, int weight, int[] truck_weights) {
        Queue<Integer> q = new LinkedList<>();
        int sum = 0;
        int time = 0;

        for (int i = 0; i < truck_weights.length; i++) {
            while (true){
                if(q.isEmpty()) {
                    q.add(truck_weights[i]);
                    sum += truck_weights[i];
                    time++;
                    break;
                } else if(q.size() == bridge_length) {
                    sum -= q.poll();
                } else {
                    if(sum + truck_weights[i] > weight) {
                        q.add(0);
                        time++;
                    } else {
                        q.add(truck_weights[i]);
                        sum += truck_weights[i];
                        time++;
                        break;
                    }
                }
            }
        }

        return time + bridge_length;
    }
}
