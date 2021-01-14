function solution(triangle) {
    return Math.max(...triangle.reduce((cost, line) => {
        return line.map((v, index) => {
            return v + Math.max((index < cost.length ? cost[index] : 0), (index > 0 ? cost[index-1] : 0));
        });
    }, []));
}


//////////////////////////////////////////////////////
//////////////////////////////////////////////////////


console.log(solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]) === 30)
