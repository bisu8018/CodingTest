https://programmers.co.kr/learn/courses/30/lessons/43105

정삼각형 숫자 배열 리스트에서, 수의 합이 가장 큰 루트 찾기

깊이 우선 탐색 아닌 너비 우선 탐색으로 작업 필요

```javascript

//BFS
function solution(triangle) {
    let answer = 0
    const loop = arr => {
        if (arr.length === triangle.length) return answer = arr.sort((a,b) => b-a)[0]

        let tmpArr = triangle[arr.length]
        tmpArr.forEach((v, i) => tmpArr[i] = v + Math.max(i === 0 ? 0 : arr[i - 1], i === arr.length ? 0 : arr[i]))
        loop(tmpArr)
    }

    loop(triangle[0]);
    return answer
}

// DFS
function solution(triangle) {
    let answer = 0;

    const loop = (count, index, sum) => {
        if (count === triangle.length) return answer = answer < sum ? sum : answer

        let arr1 = triangle[count][index]
        let arr2 = triangle[count][index + 1]

        if (arr1) loop(count + 1, index, sum + arr1)
        if (arr2) loop(count + 1, index + 1, sum + arr2)
    }

    loop(0, 0, 0)

    return answer;
}
```
