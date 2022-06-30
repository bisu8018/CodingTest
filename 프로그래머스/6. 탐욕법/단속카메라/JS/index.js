function solution(routes) {
    let answer = 0;
    let routeArr = routes.slice().sort((a, b) => a[0] - b[0])
    let min = -30001
    let max = 30001

    const addCamera = (first, last) => {
        min = first
        max = last
        routeArr.shift()
        ++answer
    }

    const useCamara = (first, last) => {
        min = first >= min ? first : min
        max = last <= max ? last : max
        routeArr.shift()
    }

    while (routeArr.length !== 0) {
        const [first, last] = routeArr[0]
        if (min < -30000) addCamera(first, last)
        else {
            if ((first >= min && first <= max) || (last <= max && last >= min)) useCamara(first, last)
            else addCamera(first, last)
        }
    }

    return answer;
}


//////////////////////////////////////////////////////
//////////////////////////////////////////////////////


// console.log(solution([[-20, 15], [-14, -5], [-18, -13], [-5, -3]]) === 2)
// console.log(solution([[-20, 15], [-20, 15],[-20, 15],[-20, 15]]) === 1)
console.log(solution([[-100, 0], [1, 15], [20, 35], [40, 45]]) === 4)
