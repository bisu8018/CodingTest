function solution(number, k) {
    let count = 0
    let flag = false
    let answer = ""

    for (let i = 0; i < number.length; ++i) {
        if(answer.length >= number.length - k) break
        flag = true

        if (number[i] !== '9')
            for (let j = 1; j <= k - count; ++j) {
                if (Number(number[i] < number[i + j])) {
                    ++count
                    flag = false
                    break
                }
            }

        if(flag) answer += number[i]
    }

    return answer
}


//////////////////////////////////////////////////////
//////////////////////////////////////////////////////


console.log(solution("1924", 2) === '94')
console.log(solution("1231234", 3) === '3234')
console.log(solution("4177252841", 4) === '775841')
console.log(solution("77413258", 2) === '774358')
console.log(solution("559913", 1) === '59913')
console.log(solution("9191919", 1) === '991919')
console.log(solution("111111", 4) === '11')
console.log(solution("87654321", 3) === '87654')
console.log(solution("18765432", 3) === '87654')
