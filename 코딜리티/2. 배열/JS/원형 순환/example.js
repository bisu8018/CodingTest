function solution(A, K) {
    let tmpArr = A

    if(A.length === 0) return A

    for(let i = 0; i<K;++i) {
        let tmpNum = tmpArr[A.length - 1]
        tmpArr.pop()
        tmpArr.unshift(tmpNum)
    }

    return tmpArr
}