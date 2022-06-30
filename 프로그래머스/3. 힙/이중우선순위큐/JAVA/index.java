package Heap;

import java.util.Collections;
import java.util.PriorityQueue;

public class L3_1 {
    public static void main(String[] args) {
        //String[] operations = {"I 7","I 5","I -5","D -1"};
        String[] operations = {"I -45", "I 653", "D 1", "I -642", "I 45", "I 97", "D 1", "D -1", "I 333"};
        solution(operations);
    }
    public static int[] solution(String[] operations) {
        int[] answer = new int[2];
        String[] rst = new String[2];
        PriorityQueue<Integer> pq_desc = new PriorityQueue<>(Collections.reverseOrder());
        PriorityQueue<Integer> pq_asc = new PriorityQueue<>();

        for (int i = 0; i < operations.length; i++) {
            for (int j = 0; j < rst.length; j++) {
                rst = operations[i].split(" ");
            }

            if (rst[0].equals("I")){
                pq_desc.add(Integer.parseInt(rst[1]));
            } else if(rst[0].equals("D")) {
                if(rst[1].equals("1")){
                    pq_desc.poll();
                } else {
                    while (!pq_desc.isEmpty()) {
                        pq_asc.add(pq_desc.poll());
                    }
                    pq_asc.poll();
                    pq_desc.clear();
                    while (!pq_asc.isEmpty()) {
                        pq_desc.add(pq_asc.poll());
                    }
                }
            }
        }

        if(pq_desc.isEmpty()) {
            for (int j = 0; j < answer.length; j++) {
                answer[j] = 0;
            }
        } else {
            answer[0] = pq_desc.poll();

            pq_asc.clear();
            while (!pq_desc.isEmpty()) {
                pq_asc.add(pq_desc.poll());
            }

            answer[1] = pq_asc.poll();
        }

        return answer;
    }
}
