package Sort;
import java.util.Arrays;

public class Lv1_K번째수 {
    public int[] solution(int[] array, int[][] commands) {
        int[] answer = new int[commands.length];
        int start;
        int end;
        int idx;

        for (int i = 0; i < commands.length; i++) {
            start = commands[i][0];
            end = commands[i][1];
            idx = commands[i][2];

            int[] nArray = Arrays.copyOfRange(array, start-1, end);
            Arrays.sort(nArray);

            answer[i] = nArray[((int) idx-1)];
        }

        return answer;
    }
}
