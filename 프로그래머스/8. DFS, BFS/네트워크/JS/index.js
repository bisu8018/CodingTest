function solution(n, computers) {
    let answer = -1;
    const cache = new Array(n).fill(-1)

    const loop = (i, isFirst) => {
        computers[i].map((n, i) => {
            if (n && cache[i] < 0) {
                if(isFirst) ++answer
                cache[i] = answer
                loop(i, false)
            }
        })
    }

    computers.map((v,i) => loop(i, true))

    return answer + 1
}


//////////////////////////////////////////////////////
//////////////////////////////////////////////////////


// console.log(solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]) === 2)
// console.log(solution(3, [[1, 1, 0], [1, 1, 1], [0, 1, 1]]) === 1)
// console.log(solution(1, [[1]]) === 1)
console.log(solution(5, [[1, 0, 0, 0, 1], [0, 1, 0, 1, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 1], [1, 0, 0, 0, 1]]) === 2)
