package DFSBFS;

public class Lv3 {
    static int answer = 0;
    public static int solution(int n, int[][] computers) {
        boolean[] visited = new boolean[computers.length];

        for (int i = 0; i < computers.length; i++) {
            visited[i] = false;
        }

        for (int i = 0; i < computers.length; i++) {
            if(visited[i]==false) {
                answer++;
                dfs(i, computers, visited);
            }
        }
        return answer;
    }

    static void dfs(int nodeIndex, int[][] computers, boolean[] visited) {
        visited[nodeIndex] = true;

        for (int i = 0; i < computers.length; i++) {
            if (computers[nodeIndex][i] == 1 && visited[i] == false) {
                dfs(i, computers, visited);
            }
        }
    }
}
