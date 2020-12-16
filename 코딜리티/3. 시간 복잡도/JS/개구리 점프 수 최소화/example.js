function solution(X, Y, D) {
    let distance = Y - X

    if (distance === 0) return 0

    let comparedNum = Math.floor(distance/D)

    if(distance%D !== 0) ++comparedNum

    return comparedNum
}

console.log(solution(0, 1000000000, 15))