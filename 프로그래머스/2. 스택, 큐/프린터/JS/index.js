function solution(priorities, location) {
    let printArr = []
    for (let i = 0; i < priorities.length; ++i) {
        printArr[i] = {id: i, num: priorities[i]}
    }

    // 배열 정렬을 확인 합니다.
    const checkSorted = (arr) => {
        for (let i = 0; i < priorities.length - 1; ++i) {
            for (let j = i + 1; j < priorities.length; ++j) {
                if (arr[i].num < arr[j].num) return true
            }
        }
        return false
    }

    // 특정 번째의 배열 뒤로 더 큰 수가 있는지 확인 합니다.
    const checkHigherNum = (index) => {
        for (let i = index + 1; i < priorities.length; ++i) {
            if (printArr[index].num < printArr[i].num) return true
        }
        return false
    }

    while (checkSorted(printArr)) {
        // 큐 이동을 한번 하게 되면, 배열 순환에서 벗어나 다시 처음부터 시작해야 합니다.
        let flag = true
        for (let i = 0; i < priorities.length - 1; ++i) {
            if (checkHigherNum(i) && flag) {
                printArr.push(printArr[i])
                printArr.splice(i, 1)
                flag = false
            }
        }
    }

    let answer = 1;

    printArr.some(({id}, index) => {
        if (id !== location) ++answer;
        return (id === location)
    })

    return answer;
}


//////////////////////////////////////////////////////
//////////////////////////////////////////////////////


console.log(solution([2, 1, 3, 2], 2) === 1)
console.log(solution([1, 1, 9, 1, 1, 1], 0) === 5)
console.log(solution([2, 2, 2, 1, 3, 4], 3) === 6)
console.log(solution([1, 1, 1, 1, 1, 1], 0) === 1)
console.log(solution([1, 1, 1, 10, 11, 2], 0) === 4)
