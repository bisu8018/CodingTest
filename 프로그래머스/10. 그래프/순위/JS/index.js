function solution(n, results) {
    let boxerList = new Array(n).fill(0).map(el => [[], []]);

    // 각 선수간 이기고 진 결과를 담는다. [lose, win]
    for (let i in results) {
        boxerList[results[i][0] - 1][1].push(results[i][1])
        boxerList[results[i][1] - 1][0].push(results[i][0])
    }

    let idx = 0;

    while (idx < n) {
        for (let i in results) {
            let [winner, loser] = results[i]
            for (let j in boxerList) {
                let [lose, win] = boxerList[j]
                if (lose.length + win.length === n - 1) continue
                //특정 선수가 r2에는 지는데  r1한테는 지는게 기록 되어 있지 않으면 그 선수는 반드시 r1에게 져야 한다. 왜냐면 r2는 r1에게 지기 때문이다.
                if (lose.includes(loser) && !lose.includes(winner)) lose.push(winner)
                // 특정 선수가 r1에게는 이기는데 r2한테 이기는게 기록되어 있지 안흥면 그 선수는  반드시 r2에게 이긴다. r1은  r2에게 이기기 때문이다
                if (win.includes(winner) && !win.includes(loser)) win.push(loser)
            }
        }
        ++idx
    }

    return boxerList.filter(a => a[0].length + a[1].length === n - 1).length
}


//////////////////////////////////////////////////////
//////////////////////////////////////////////////////


console.log(solution(5, [[4, 3], [4, 2], [3, 2], [1, 2], [2, 5]]) === 2)
// console.log(solution(5, [[3, 5], [4, 2], [4, 5], [5, 1], [5, 2]]) === 1)
