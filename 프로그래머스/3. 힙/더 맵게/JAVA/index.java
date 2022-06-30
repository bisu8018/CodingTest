package Heap;

import java.util.Comparator;
import java.util.PriorityQueue;

public class Lv2 {
    public static void main(String[] args) {
        int[] scoville = {1, 2, 3, 9, 10, 12};
        int K = 7;
        System.out.println(solution(scoville,K));
    }
    public static int solution(int[] scoville, int K) {
        int answer = 0;
        PriorityQueue<Integer> queue = new PriorityQueue<>();

        for (int i = 0; i < scoville.length; i++) {
            queue.add(scoville[i]);
        }

        while (queue.peek() < K) {
            if(queue.size() == 1) {
                return -1;
            }
            int a = queue.poll();
            int b = queue.poll();
            int rst = a + (b*2);
            queue.add(rst);
            answer++;
        }
        return answer;
    }
}
