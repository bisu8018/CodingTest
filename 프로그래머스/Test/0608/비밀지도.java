package Test;

import java.util.ArrayList;
import java.util.Arrays;

public class Solution24 {
    public static void main(String[] args) {
        int n = 5;
        int[] arr1 = {9, 20, 28, 18, 11};
        int[] arr2 = {30, 1, 21, 17, 28};
        solution(5,arr1,arr2);
    }
    public static String[] solution(int n, int[] arr1, int[] arr2) {
        String[] answer;
        String tmp_1;
        String tmp_2;

        char[][] arr1_by = new char[n][n];
        char[][] arr2_by = new char[n][n];
        ArrayList<String> arrayList = new ArrayList<>();

        for (int i = 0; i < arr1_by.length; i++) {
            tmp_1 = String.format("%0" + n + "d", Long.parseLong(Integer.toBinaryString(arr1[i]).toString()));
            arr1_by[i] = tmp_1.toCharArray();

            tmp_2 = String.format("%0" + n + "d", Long.parseLong(Integer.toBinaryString(arr2[i]).toString()));
            arr2_by[i] = tmp_2.toCharArray();
        }

        String rstArray;
        for (int i = 0; i < arr1_by.length; i++) {
            rstArray = "";
            for (int j = 0; j < arr1_by[i].length; j++) {
                if(arr1_by[i][j]==48 && arr2_by[i][j]==48){
                    rstArray += " ";
                } else if(arr1_by[i][j]==49 || arr2_by[i][j]==49){
                    rstArray += "#";
                }
            }
            arrayList.add(rstArray);
        }

        answer = arrayList.toArray(new String[arrayList.size()]);
        return answer;
    }
}
