function solution(jobs) {
    let lastTime = 0
    let sum = 0
    const jobsClone = jobs.slice()
    const sortedByRequestTime = () => jobsClone.sort((a, b) => a[0] - b[0])
    const sortedByWorkingTime = () => jobsClone.sort((a, b) => a[1] - b[1])

    while (jobsClone.length !== 0) {
        sortedByWorkingTime()
        let filteredArr = jobsClone.slice().filter((value) => value[0] < lastTime)[0]

        sortedByRequestTime()
        let tmpNum = filteredArr ? lastTime + filteredArr[1] - filteredArr[0] : jobsClone[0][1]
        lastTime = filteredArr ? tmpNum + filteredArr[0] : tmpNum + jobsClone[0][0]
        sum += tmpNum

        const index = jobsClone.indexOf(filteredArr || jobsClone[0]);
        if (index > -1) jobsClone.splice(index, 1);
    }

    return Math.floor(sum / jobs.length)
}

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

// console.log(solution([[0, 5], [6, 1], [6, 2]]) === 3)
// console.log(solution([[0, 3], [1, 9], [2, 6]]) === 9)
// console.log(solution([[0, 5], [6, 2], [6, 1]]) === 3)
// console.log(solution([[0, 5], [2, 2], [5, 3]]) === 5)
// console.log(solution([[0, 5], [2, 2], [4, 2]]) === 5)
// console.log(solution([[0, 1], [0, 1], [1, 0]]) === 1)
// console.log(solution([[0, 1], [1, 2], [500, 6]]) === 3)
// console.log(solution([[0, 3], [4, 3], [8, 3]]) === 3)
// console.log(solution([[0, 3], [1, 9], [2, 6], [4, 3]]) === 9)
// console.log(solution([[0, 10], [4, 10], [5, 11], [15, 2]]) === 15)
// console.log(solution([[0, 10], [2, 10], [9, 10], [15, 2]]) === 14)
// console.log(solution([[0, 10], [2, 10], [25, 10], [25, 2]]) === 10)
// console.log(solution([[0, 10], [4, 10], [5, 11], [15, 2]]) === 15)
// console.log(solution([[0, 9], [0, 4], [0, 5], [0, 7], [0, 3]]) === 13)
// console.log(solution([[24, 10], [28, 39], [43, 20], [37, 5], [47, 22], [20, 47], [15, 2], [15, 34], [35, 43], [26, 1]]) === 72)
// console.log(solution([[24, 10], [28, 39], [43, 20], [37, 5], [47, 22], [20, 47], [15, 34], [15, 2], [35, 43], [26, 1]]) === 72)
