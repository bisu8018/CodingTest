function solution(numbers, target) {
    let answer = 0

    const loop = (arr) => {
        if (arr.length === numbers.length )
            return arr.reduce((a,b) => a+b) === target ? ++answer : true

        let arr1 = arr.slice()
        let arr2 = arr.slice()

        arr1.push(numbers[arr.length])
        arr2.push(numbers[arr.length] * -1)

        loop(arr1)
        loop(arr2)
    }

    loop([]);

    return answer
}


//////////////////////////////////////////////////////
//////////////////////////////////////////////////////


console.log(solution([1,1,1,1,1], 3) === 5)
