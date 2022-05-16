package Sort;
import java.util.*;

public class Lv2_가장 큰 수 {
    public String solution(int[] numbers) {
        String answer = "";

        ArrayList<String> convertedArr = new ArrayList<>();
        for (int number : numbers) {
            convertedArr.add(String.valueOf(number));
        }

        convertedArr.sort((num1, num2)-> (num1+num2).compareTo(num2+num1));

        for (String s : convertedArr) {
            answer = s + answer;
        }
        while (answer.length() > 1 && answer.charAt(0) == '0'){
            answer = answer.substring(1);
        }
        return answer;
    }
}
