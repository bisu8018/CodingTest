function solution(A) {
    let toggle = true;
    let sum = 0;

    A.sort((a, b) => {
        return b - a;
    });

    A.forEach(element => {
        if (toggle) {
            sum += element;
            toggle = false;
        } else {
            sum -= element;
            toggle = true;
        }
    });

    return sum;
}

console.log(solution([9, 3, 9, 3, 9, 7, 9]))
console.log(solution([9, 3, 9, 3, 9, 3, 9, 2 , 9,9,3]))
console.log(solution([9, 3, 9, 3, 9, 3, 9]))
console.log(solution([1,2,1,3,3]))