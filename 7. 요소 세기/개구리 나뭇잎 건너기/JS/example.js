function solution(X, A) {
    let tmp = []
    let comparedArr = []

    for (let i = 1; i <= X; ++i) {
        comparedArr[i - 1] = i
    }
    console.log('comparedArr',comparedArr)

     A.some((v, i) => {
         let findItem = comparedArr.indexOf(v)

         //console.log('findItem',findItem, comparedArr[findItem])

         if (findItem > 0) {
             tmp.push(i)
             comparedArr.splice(findItem,1)
         }

    console.log(v,i)

         return (tmp.length === X)
     })

     tmp.sort((a, b) => b - a)

    return tmp.length === X ? tmp[0] : -1
}


console.log(solution(5, [1, 3, 1, 4, 2, 3, 5, 4]) === 6)
/*console.log(solution(4, [1, 3, 1, 4, 2, 3, 5, 4]) === 4)
console.log(solution(3, [1, 3, 1, 4, 2, 3, 5, 4]) === 4)
console.log(solution(2, [1, 3, 1, 4, 2, 3, 5, 4]) === 4)
console.log(solution(1, [1, 3, 1, 4, 2, 3, 5, 4]) === 0)
console.log(solution(3, [1, 1, 3, 2, 1, 1, 1, 4]) === 3)*/
/*    for (let i = 1; i <= X; ++i) {
        rstArr.some((value, index) => {
            if (value === i){
                tmp.push(index)
            }

            return(value === i)
        })
    }*/
