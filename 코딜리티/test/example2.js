function solution(A) {
    let castleCount = 0;
    let flag = false
    let up = true
    let tmpValue = 0

    A.forEach(value => {
        if (flag) {
            if (value === tmpValue || (up && value > tmpValue) || (!up && value < tmpValue)) {
                // pass
            } else
                flag = false;
        } else {
            castleCount++
            up = !up
            flag = true;
        }
        tmpValue = value
    });

    return castleCount;
}

console.log(solution([2, 2, 3, 4, 3, 3, 2, 2, 1, 1, 2, 5]))
console.log(solution([2, 2, 3, 4, 3, 3, 2, 2, 1, 1, 2, 5, 6]))
console.log(solution([2, 2, 3, 4, 3, 3, 2, 2, 1, 1, 2, 5, 6, 1, 2]))
console.log(solution([2, 2, 3, 4, 3, 3, 2, 2, 1, 1, 2, 5, 6, 1, 2, 2, 2, 2, 2, 4, 1]))
