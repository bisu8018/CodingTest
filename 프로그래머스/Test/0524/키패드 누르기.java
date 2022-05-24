package Test;

public class Solution5 {
    public static void main(String[] args) {
        int[] numbers = {1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5};
        String hand = "right";
        solution(numbers,hand);
    }
    public static String solution(int[] numbers, String hand) {
        String answer = "";
        String[][] pad = {{"1","2","3"},{"4","5","6"},{"7","8","9"},{"*","0","#"}};
        int[] target_pos = {0,0};
        int[] left_pos = {0,0};
        int[] right_pos = {0,0};
        String left = "*";
        String right = "#";


        for (int i = 0; i < numbers.length; i++) {
            for (int j = 0; j < pad.length; j++) {
                for (int k = 0; k < pad[j].length; k++) {
                    if(pad[j][k].equals(Integer.toString(numbers[i]))){
                        target_pos[0] = j;
                        target_pos[1] = k;
                    } else if(pad[j][k].equals(right)){
                        right_pos[0] = j;
                        right_pos[1] = k;
                    } else if(pad[j][k].equals(left)){
                        left_pos[0] = j;
                        left_pos[1] = k;
                    }
                }
            }

            if(numbers[i]==1 || numbers[i]==4 || numbers[i]==7){
                answer += "L";
                left = Integer.toString(numbers[i]);
            } else if(numbers[i]==3 || numbers[i]==6 || numbers[i]==9) {
                answer += "R";
                right = Integer.toString(numbers[i]);
            } else {
                int lt = Math.abs((left_pos[0]-target_pos[0])) + Math.abs((left_pos[1]-target_pos[1]));
                int rt = Math.abs((right_pos[0]-target_pos[0])) + Math.abs((right_pos[1]-target_pos[1]));

                if(lt > rt) {
                    answer += "R";
                    right = Integer.toString(numbers[i]);
                } else if(lt < rt) {
                    answer += "L";
                    left = Integer.toString(numbers[i]);
                } else {
                    if(hand.equals("right")) {
                        answer += "R";
                        right = Integer.toString(numbers[i]);
                    } else {
                        answer += "L";
                        left = Integer.toString(numbers[i]);
                    }
                }
            }
        }

        return answer;
    }
}
