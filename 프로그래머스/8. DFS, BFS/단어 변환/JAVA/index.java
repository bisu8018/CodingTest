package DFSBFS;

public class Lv3_1 {
    static int answer = 0;
    static boolean[] visited;

    public static int solution(String begin, String target, String[] words) {
        int cnt = 0;
        visited = new boolean[words.length];
        dfs(begin, target, words, cnt);

        return answer;
    }
    static void dfs( String begin, String target, String[] words, int cnt) {
        if(begin.equals(target)){
            answer = cnt;
            return;
        }

        for (int i = 0; i < words.length; i++) {
            if (visited[i]) {
                continue;
            }

            int k = 0;
            for (int j = 0; j < begin.length(); j++) {
                if(begin.charAt(j) == words[i].charAt(j))
                    k++;
            }

            if(k == begin.length()-1) {
                visited[i] = true;
                dfs(words[i], target, words, cnt+1);
                visited[i] = false;
            }
        }
    }
}
