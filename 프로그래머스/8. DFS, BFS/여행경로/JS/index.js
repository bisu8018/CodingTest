function solution(tickets) {
    let answer = [];

    const loop = (arr, dummy) => {
        if (dummy.length === 0) {
            if(tickets.length + 1 === arr.length) return answer.push(arr)
            else return true
        }

        let start = arr[arr.length - 1]
        let goal = dummy.filter(v => v[0] === start).sort()

        if (goal.length === 0) return

        goal.map(num => {
            let tmpArr = arr.slice()
            let tmpDummy = dummy.slice()
            let _tmp = []

            tmpArr.push(num[1])
            tmpDummy = tmpDummy.filter((v) => {
                if (v[0] === start && v[1] === num[1]) _tmp.push(v)
                return (v[0] !== start || v[1] !== num[1])
            })
            _tmp.pop()

            if (_tmp.length > 0) tmpDummy.push(..._tmp)

            loop(tmpArr, tmpDummy)
        })
    }

    loop(["ICN"], tickets)

    return answer.sort()[0];
}


//////////////////////////////////////////////////////
//////////////////////////////////////////////////////


console.log(JSON.stringify(solution([["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]])) === JSON.stringify(["ICN", "JFK", "HND", "IAD"]))
console.log(JSON.stringify(solution([["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL", "SFO"]])) === JSON.stringify(["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]))
console.log(JSON.stringify(solution([["ICN", "JFK"], ["ICN", "JFK"], ["ICN", "JFK"], ["JFK", "ICN"], ["JFK", "ICN"]])) === JSON.stringify(["ICN", "JFK", "ICN", "JFK", "ICN", "JFK"]))
console.log(JSON.stringify(solution([["ICN", "A"], ["A", "B"], ["B", "A"], ["A", "ICN"], ["ICN", "A"]])) === JSON.stringify(["ICN", "A", "B", "A", "ICN", "A"]))
console.log(JSON.stringify(solution([["ICN", "A"], ["A", "C"], ["A", "D"], ["D", "B"], ["B", "A"]])) === JSON.stringify(["ICN", "A", "D", "B", "A", "C"]))
