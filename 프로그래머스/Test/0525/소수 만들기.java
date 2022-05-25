package Test;

public class Solution11 {
    static int sum;
    static int cnt;
    public static void main(String[] args) {
        int[] nums = {1,2,3,4};
        solution(nums);
    }
    public static int solution(int[] nums) {
        int n = nums.length;
        boolean[] visited = new boolean[n];

        for (int i = 1; i <= n; i++) {
            if(i==3)
                comb(nums, visited, 0, n, i);
        }
        return cnt;
    }
    static void comb(int[] arr, boolean[] visited, int depth, int n, int r) {
        if (r == 0) {
            print(arr, visited, n);
            return;
        }

        if (depth == n) {
            return;
        }

        visited[depth] = true;
        comb(arr, visited, depth + 1, n, r - 1);

        visited[depth] = false;
        comb(arr, visited, depth + 1, n, r);
    }
    static void print(int[] arr, boolean[] visited, int n) {
        for (int i = 0; i < n; i++) {
            if (visited[i]) {
                sum += arr[i];
            }
        }
        if(Is_Prime(sum)==2)
            cnt++;

        sum = 0;
    }
    private static int Is_Prime(int num)
    {
        int count = 0;

        for(int i = 1; i <= num; i++)
        {
            if(num % i == 0)
                count += 1;
            if(count >= 3)
                return count;
        }

        return count;
    }

}
