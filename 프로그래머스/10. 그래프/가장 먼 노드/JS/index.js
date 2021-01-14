function solution(n, edge) {
    let answer = 0
    let check = [1]
    while (true) {
        let newCheck = []
        edge = edge.filter(e => {
            if (check.includes(e[0]) && check.includes(e[1])) return false
            if (check.includes(e[0])) {
                newCheck.push(e[1])
                return false
            }
            if (check.includes(e[1])) {
                newCheck.push(e[0])
                return false
            }
            return true
        })
        if (edge.length === 0 && newCheck.length === 0) {
            answer = check.length
            break
        }
        check = [...new Set(newCheck)]
    }

    return answer
}


//////////////////////////////////////////////////////
//////////////////////////////////////////////////////


// console.log(solution(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]) === 3)
// console.log(solution(6, [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6]]) === 1)
// console.log(solution(2, [[1, 2]]) === 1)
// console.log(solution(7, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2], [5,7]]) === 1)
console.log(solution(6, [[1, 2], [3, 4], [5, 6]]) === 3)
