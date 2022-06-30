package Hash;
import java.util.*;

public class Lv1_완주하지 못한 선수 {
    public String solution(String[] participant, String[] completion) {

        int i;
        Arrays.sort(participant);
        Arrays.sort(completion);

        for(i=0;i<completion.length;i++) {
            if(!participant[i].equals(completion[i]))
                return participant[i];
        }

        return participant[i];

    }
}
