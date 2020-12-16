function solution(N) {
    let answer = 0;
    let stringValue = N.toString(2)
    console.log(stringValue)
    let matchedValue = stringValue.match(/1+0+1/)
    console.log(matchedValue)
    let checkValue = stringValue

    while (true) {

        if (!matchedValue) return 0

        let tempValue = checkValue.match(/1+0+1/)

        if (!tempValue) break
        else {
            let tmpArr = tempValue[0].replace(/1/gi,'')
            let zeroCount = tmpArr.length

            console.log(tmpArr)
            console.log(zeroCount)

            if(answer < zeroCount) answer = zeroCount
        }

        checkValue = checkValue.replace(/1+0+/,'')
    }

    console.log('answer',answer)
    return answer
}

solution(529)
