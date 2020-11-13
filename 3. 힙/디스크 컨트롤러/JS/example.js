function solution(jobs) {
    let result = []

    const loop = (arr, value, natural) => {
        if (arr.length === 0) return result.push(value)
        else {
            for (let i = 0; i < arr.length; ++i) {
                let tmpArr = arr.slice()
                let tmpValue = value + (natural + (natural > tmpArr[i][0] ? tmpArr[i][1] - tmpArr[i][0] : tmpArr[i][1] - natural))
                let tmpNatural = natural > tmpArr[i][0] ? natural +  tmpArr[i][1] :tmpArr[i][0] + tmpArr[i][1]

                tmpArr.splice(i, 1)

                loop(tmpArr, tmpValue, tmpNatural)
            }
        }
        return true
    }

    let tmpArr = jobs.slice(1, jobs.length)
    loop(tmpArr, jobs[0][1], jobs[0][1])

    return Math.ceil(result.sort((a, b) => a - b)[0] / 3)
}



//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

console.log(solution([[0, 3], [1, 9], [2, 6]]) === 9)
console.log(solution([[0, 3], [4, 3], [8, 3]]) === 3)
console.log(solution([[0, 5], [6, 1], [6, 2]]) === 3)
console.log(solution([[0, 5], [6, 2], [6, 1]]) === 3)
console.log(solution([[0, 5], [2, 2], [5, 3]]) === 5)
console.log(solution([[0, 5], [2, 2], [4, 2]]) === 5)
