function solution(jobs) {
    let result = []

    console.log('jobs', jobs)

    const loop = (arr, value, natural) => {
        if (arr.length === 0) return result.push(value)

        let diskArr = arr

        console.log('------------------------------')
        console.log('diskArr : ', diskArr)
        console.log('value : ', value)
        console.log('natural : ', natural)

        if (diskArr.length !== 0)
            for (let i = 0; i < diskArr.length; ++i) {
                console.log('\n[' + i + ' 번째]')

                let tmpValue = value + (natural + diskArr[i][1] - diskArr[i][0])

                console.log('tmpValue : ', tmpValue)
                let tmpNatural = natural + diskArr[i][1]
                let splicedArr = diskArr
                splicedArr.splice(i, 1)

                console.log('splicedArr : ', splicedArr)
                console.log()

                return loop(splicedArr, tmpValue, tmpNatural)
            }


        console.log('------------------------------')
    }

    let tmpArr = jobs.slice(1, jobs.length)
    loop(tmpArr, jobs[0][1], jobs[0][1])

    let answer = Math.ceil(result.sort((a, b) => a - b)[0] / 3)

    console.log('result : ', result)
    console.log('answer : ', answer)

    return answer
}


//////////////////////////////////////////////////////
//////////////////////////////////////////////////////


console.log(solution([[0, 3], [1, 9], [2, 6]]) === 9)