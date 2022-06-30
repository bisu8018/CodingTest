package Sort;
import java.util.*;

public class Lv2_H-Index {
    public int solution(int[] citations) {
        int answer = 0;
        Arrays.sort(citations);

        int h;
        for (int i = 0; i < citations.length; i++) {
            h = citations.length-i;
            if(citations[i] >= h) {
                answer = h;
                break;
            }
        }
        return answer;
    }
}
