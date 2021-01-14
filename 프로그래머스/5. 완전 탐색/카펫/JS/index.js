function solution(brown, yellow) {
    let answer = [];
    let sum = brown + yellow

    for (let x = 3; x <= (brown / 2) - 1; ++x) {
        let y = sum / x
        if (y <= x && y >= 3 && Number.isInteger(y) && (x - 2) * (y - 2) === yellow)
            answer = [x, y]
    }

    return answer;
}


//////////////////////////////////////////////////////
//////////////////////////////////////////////////////


console.log(solution(10,2) === [4,3])
console.log(solution(8,1) === [3,3])
console.log(solution(24,24)=== [8,6])
// console.log(solution(35,1)=== [12,3])

// console.log(solution(11, 1) === [4, 3])
