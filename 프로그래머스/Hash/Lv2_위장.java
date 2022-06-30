package Hash;
import java.util.*;

public class Lv2_위장 {
    public int solution(String[][] clothes) {

        HashMap<String,Integer> map = new HashMap<String,Integer>();

        int cnt = 1;

        for (int i = 0; i < clothes.length; i++) {
            if(!map.containsKey(clothes[i][1])){
                map.put(clothes[i][1],1);
            } else {
                map.put(clothes[i][1], (map.get(clothes[i][1]).intValue()) + 1);
            }
        }

        for (String key: map.keySet()){
            cnt *= (map.get(key)+1);
        }

        return cnt-1;

    }
}
