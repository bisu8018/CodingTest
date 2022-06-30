function solution(n, costs) {
    let answer = 0;
    let count = 0
    let i = 0
    let mst = []
    let arr = costs.sort((a, b) => a[2] - b[2])

    while (count !== n - 1) {
        if (i === costs.length) i = 0

        if (mst.length === 0 || (mst.indexOf(arr[i][0]) >= 0 && mst.indexOf(arr[i][1]) < 0) || (mst.indexOf(arr[i][0]) < 0 && mst.indexOf(arr[i][1]) >= 0)) {
            mst.push(arr[i][0])
            mst.push(arr[i][1])
            mst = mst.filter((item, index) => mst.indexOf(item) === index);

            answer += arr[i][2]
            ++count
            i = 0
        } else ++i
    }

    return answer
}


//////////////////////////////////////////////////////
//////////////////////////////////////////////////////


console.log(solution(4, [[0, 1, 1], [0, 2, 2], [0, 3, 5], [0, 3, 2], [0, 3, 8]]) === 5)
console.log(solution(4, [[0, 1, 1], [0, 2, 2], [1, 2, 5], [1, 3, 1], [2, 3, 8]]) === 4)
console.log(solution(6, [[0, 1, 1], [0, 2, 2], [1, 2, 5], [1, 3, 1], [2, 3, 8], [2, 4, 1], [1, 5, 3], [5, 2, 1]]) === 6)
