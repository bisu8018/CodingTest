function solution(name) {
    let answer = 0;
    let nameArr = name.split('')
    let currentX = 0

    const isOnlyA = arr => arr.filter(v => v !== 'A').length === 0

    while(!isOnlyA(nameArr)) {
        if(currentX !== 0 && !currentX) return

        let code = nameArr[currentX].charCodeAt(0) - 64
        answer += code > 13 ? 27 - code : code - 1 // A 이동 안함
        nameArr[currentX] = 'A'

        let flag = !isOnlyA(nameArr)
        let index = 1

        while (flag) {
            let toLeft = currentX - index < 0 ? nameArr.length - index + currentX : currentX - index
            let toRight = currentX + index

            if(toRight < nameArr.length && nameArr[toRight] !== 'A') {
                currentX = toRight
                flag = false
                answer += index
            }

            if(flag  && nameArr[toLeft] !== 'A') {
                currentX = toLeft
                flag = false
                answer += index
            }

            ++index
        }
    }

    return answer;
}


//////////////////////////////////////////////////////
//////////////////////////////////////////////////////


// console.log(solution("JEROEN") === 56)
// console.log(solution("JAN") === 23)
// console.log(solution("ABBBBBBBBB") === 18)
// console.log(solution("BBBAAAB") === 9)
console.log(solution("ABABAAAAABA") === 11)
