function solution(citations) {
    let answer = 0;
    let dataArr = citations.slice().sort((a, b) => a - b)
    let maxData = dataArr[dataArr.length - 1]

    for (let i = 1; i <= maxData; ++i) {
        let tmp = dataArr.filter((v) => v >= i)
        if (tmp.length >= i) answer = i
    }

    return answer;
}


//////////////////////////////////////////////////////
//////////////////////////////////////////////////////


console.log(solution([3, 0, 6, 1, 5]) === 3)
console.log(solution([0, 0, 1, 1]) === 1)
console.log(solution([0, 1]) === 1)
console.log(solution([2, 7, 5]) === 2)
console.log(solution([10, 11, 12, 13]) === 4)
