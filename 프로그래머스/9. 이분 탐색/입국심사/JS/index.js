function solution(n, times) {
    let min = Math.floor(n / times.reduce((a, b) => a + 1 / b,0));
    let max = Math.max(...times) * Math.ceil(n / times.length);

    while (max > min) {
        const mid = Math.floor((min + max) / 2);
        let left = n;
        for (const time of times) {
            if ((left -= Math.floor(mid / time)) <= 0) break;
        }
        if (left <= 0) max = mid;
        else min = mid + 1;
    }

    return min;
}


//////////////////////////////////////////////////////
//////////////////////////////////////////////////////


console.log(solution(6, [7, 10]) === 28)
console.log(solution(10, [2,3,10]) === 12)
console.log(solution(1, [10]) === 10)
